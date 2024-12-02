import { TObjectId } from "../";
import { IFlashcardsStats, ISubjectStats } from ".";

export declare interface IStats {
  userId: TObjectId;
  totalTime: number;
  flashcardsStats: IFlashcardsStats;
  subjectsStats: ISubjectStats[];
}
