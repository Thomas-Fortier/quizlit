import { Link } from 'react-router-dom';
import { Route } from 'react-router';

// Pages
import QuizView from '../pages/QuizView';

export default function QuizCard({ quizData }) {
  return quizData ? (
    <div className='quiz-card'>
      <h3>{quizData.title}</h3>
      <p>Responses: {quizData.submissions.length}</p>
      
      <div className='card-buttons'>
        <Link to={`/quiz/view/${quizData._id}`}>
          <button>View</button>
        </Link>
        <Link to={`/quiz/edit/:id`} >
          <button>Edit</button>
        </Link>
      </div>

      <Route path={`/quiz/view/${quizData._id}`} render={(props) => (<QuizView {...props} id={quizData._id} />)} />
    </div>
  ) : (
    <div className='quiz-card'>
      <Link to={`quiz/create`}>
        <button>New</button>
      </Link>
    </div>
  );
}