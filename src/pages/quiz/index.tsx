import { useCallback, useState } from 'react';

import QuestionsData from '../../data/questions';

import { Question, Results } from './components'
import './index.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleQuestionConfirm = useCallback((answerIndex: number) => {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, answerIndex]
    });

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < QuestionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  }, [setAnswers, setCurrentQuestion, setShowResults, currentQuestion]);

  const handleReset = useCallback(() => {
    setAnswers([]);
    setShowResults(false);
    setCurrentQuestion(0);
  }, [setAnswers, setShowResults, setCurrentQuestion])

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {showResults ? (
        <Results
          questions={QuestionsData}
          answersIndexes={answers}
          onReset={handleReset}
        />
      ) : (
        <Question
          questions={QuestionsData}
          questionIndex={currentQuestion}
          onConfirm={handleQuestionConfirm}
        />
      )}
    </div>
  );
}

export default Quiz;
