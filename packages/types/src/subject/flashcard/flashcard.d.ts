import { TObjectId } from "../../";

export declare interface IFlashcard {
  title: string;
  answers: string[];
  tags: string[];
  learned: boolean;
  _id: TObjectId;
}
