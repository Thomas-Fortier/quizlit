export default function ViewQuestion({ question, number }) {
  return (
    <div className='view-question'>
      <h2>{`${number}. ${question.question} /${question.points}`}</h2>
      <ul>
        {question.answers.map(answer => {
          return answer.correct ? <li><p>{`${answer.value} (correct)`}</p></li> : <li><p>{answer.value}</p></li>
        })}
      </ul>
    </div>
  );
}