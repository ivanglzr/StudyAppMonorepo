import { TObjectId } from "..";
import { IExam, IFlashcard, INote } from ".";

export declare interface ISubject {
  userId: TObjectId;
  subjectName: string;
  documents: string[];
  flashcards: IFlashcard[];
  notes: INote[];
  exams: IExam[];
  color: string;
  _id: TObjectId;
}
