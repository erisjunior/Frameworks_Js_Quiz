export interface QuestionProps {
  questions: Question[];
  questionIndex: number;
  onConfirm(answerIndex: number): void;
}

export interface Question {
  id: number;
  statement: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}
