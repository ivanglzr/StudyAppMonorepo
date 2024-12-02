import { TObjectId } from "../id";

export declare interface IUser {
  fullname: string;
  email: string;
  password: string;
  _id: TObjectId;
}

export declare interface IRegister extends Omit<IUser, "_id"> {}

export declare interface ILogIn extends Omit<IRegister, "fullname"> {}

export declare interface IChangePassword extends Omit<ILogIn, "email"> {
  newPassword: string;
}
