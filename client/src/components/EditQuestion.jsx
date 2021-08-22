import { useState } from "react";

export default function EditQuestion({ question, number }) {
  const [inputQuestion, setInputQuestion] = useState(question.question);

  return (
    <div className='edit-question'>
      <input type='text' value={inputQuestion} onChange={(event) => setInputQuestion(event.value)} />
      <ul>
        {question.answers.map(answer => {
          return answer.correct ? <li><p>{`${answer.value} (correct)`}</p></li> : <li><p>{answer.value}</p></li>
        })}
      </ul>
    </div>
  );
}