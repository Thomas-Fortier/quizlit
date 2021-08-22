import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Components
import QuizCard from '../components/QuizCard';

// Util
import { UserContext } from '../util/userContext';

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const [ loading, setLoading ] = useState(true);
  const [ quizzes, setQuizzes ] = useState([]);

  useEffect(() => {
    if (!user)
      return;

    axios.get(`http://localhost:5000/api/v1/quizzes/creator/${user.googleId}`)
      .then(response => setQuizzes(response.data))
      .catch(error => console.error(`Error when getting quizzes:\n\n${error.stack}`))
      .finally(() => setLoading(false));
  }, [])

  const getRenderableCards = () => {
    let board = [];
    let row = [];

    for (let quiz = 0; quiz < quizzes.length; quiz++) {
      if (quiz % 3 === 0 && quiz !== 0) {
        board.push(<div key={quiz} className='row'>{row}</div>);
        row = [];
        row.push(<QuizCard key={quizzes[quiz]._id} quizData={quizzes[quiz]} />);

        if (quiz + 1 === quizzes.length) {
          board.push(<div key={'final' + quiz} className='row'>{row}</div>);
        }

        continue;
      }

      row.push(<QuizCard key={quizzes[quiz]._id} quizData={quizzes[quiz]} />);
    }

    return board;
  }

  return user ? (
    <>
      <h1>Dashboard</h1>

      <section className='quiz-section'>
        <h2>Quizzes</h2>

        <Link to='/quiz/create'>
            <button className='new-button'>New</button>
        </Link>

        {
          loading ?
            <h3 className='loading'>Loading...</h3>
          :
            <div className='quizzes'>
              {getRenderableCards()}
            </div>
        }
      </section>
    </>
  ) : (
    <>
      <Redirect to='/login' />
    </>
  );
}