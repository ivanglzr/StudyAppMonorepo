import { TObjectId } from "../../..";

export declare interface ISubjectFlashcardsStats {
  subjectId: TObjectId;

  learnedFlashcardsPercentage: number;

  totalFlashcards: number;

  learnedFlashcards: number;
}
