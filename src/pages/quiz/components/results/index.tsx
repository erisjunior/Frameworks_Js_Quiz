import { Button } from '../../../../components';

import { ResultsProps } from './types'
import './index.css';

function Results({ questions, answersIndexes, onReset }: ResultsProps) {
  return (
    <div>
      <div className="results-box">
        {questions.map((question, index) => (
          <div key={question.id}>
            <h3>Questão { index + 1 }</h3>
            <p>{ question.statement }: { question.answers[answersIndexes[index]].text }</p>
          </div>
        ))}
      </div>
      <Button onClick={onReset}>Reinicia</Button>
    </div>
  );
}

export default Results;
