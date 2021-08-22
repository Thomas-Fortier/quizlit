import { Link } from 'react-router-dom';

export default function QuizCard({ quizData }) {
  return quizData ? (
    <div className='quiz-card'>
      <h3>{quizData.title}</h3>
      <p>Responses: {quizData.submissions.length}</p>
      
      <div className='card-buttons'>
        <Link to={{pathname: '/quiz/view', state: {id: quizData._id}}}>
          <button>View</button>
        </Link>
        <Link to={{pathname: '/quiz/edit', state: {id: quizData._id}}}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className='quiz-card'>
      <Link to={`quiz/create`}>
        <button>New</button>
      </Link>
    </div>
  );
}