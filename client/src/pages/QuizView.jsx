import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, useLocation, useParams } from 'react-router-dom';
import { Redirect } from 'react-router';
import ViewQuestion from '../components/ViewQuestion';

export default function QuizView() {
  let quizId;
  const [quiz, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!quizId)
      return;

    axios.get(`http://localhost:5000/api/v1/quizzes/id/${quizId}`)
      .then(response => setQuizData(response.data[0]))
      .finally(() => setLoading(false));
  }, []);

  try {
    const location = useLocation();
    const { id } = location.state;
    quizId = id;
  }
  catch (error) {
    console.error(`An error occured when rendering QuizView: ${error.stack}`);
    return <Redirect to='/dashboard' />
  }

  const getRenderableQuestions = () => {
    let questions = [];

    for (let index = 0; index < quiz.questions.length; index++) 
      questions.push(<ViewQuestion key={index} question={quiz.questions[index]} number={index + 1} />);
    
    return questions;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className='quiz-view'>
      {getRenderableQuestions()}
    </div>
  );
}