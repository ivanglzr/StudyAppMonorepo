import { ISubjectFlashcardsStats } from "./subject-flashcards-stats/subject-flashcards-stats";

export declare interface IFlashcardsStats {
  subjectsFlashcardsStats: ISubjectFlashcardsStats[];

  learnedFlashcardsPercentage: number;

  totalFlashcards: number;

  learnedFlashcards: number;
}
