import { useCallback, useMemo, useState } from 'react';
import { Button } from '../../../../components'

import { QuestionProps } from './types'
import './index.css'

function Question({ questions, questionIndex, onConfirm }: QuestionProps) {
  const [currentAnswer, setCurrentAnswer] = useState<number>();

  const question = useMemo(() => questions[questionIndex], [questions, questionIndex]);

  const handleConfirm = useCallback(() => {
    if (!currentAnswer && currentAnswer !== 0) return;

    onConfirm(currentAnswer);
    setCurrentAnswer(undefined);
  }, [currentAnswer, onConfirm, setCurrentAnswer]);

  return (
    <div className="question-container">
      <div className="question-box">
        <p>Questão {questionIndex + 1} de {questions.length}</p>
        <h3>{question.statement}</h3>
        <div>
          {question.answers.map((answer, index) => (
            <Button
              key={answer.id}
              onClick={() => setCurrentAnswer(index)}
              focused={currentAnswer === index}
            >
              {answer.text}
            </Button>
          ))}
        </div>
      </div>
      <Button
        disabled={!currentAnswer && currentAnswer !== 0}
        onClick={handleConfirm}
      >
        Confirmar resposta
      </Button>
    </div>
  );
}

export default Question;
