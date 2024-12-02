import { ISubject, TObjectId } from "../../";

export declare interface ISubjectStats {
  subjectId: TObjectId;
  studyTime: number;
}

export declare interface IPopulatedSubjectStats extends ISubjectStats {
  subject: ISubject;
}
