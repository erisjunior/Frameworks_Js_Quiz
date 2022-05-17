import { Question } from '../question/types';

export interface ResultsProps {
  questions: Question[];
  answersIndexes: number[];
  onReset(): void;
}
