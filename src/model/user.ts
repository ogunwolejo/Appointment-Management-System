import { Schema, model } from "mongoose";
import { Role } from "../enum/role.enum";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  phoneNum?: string;
  twitterHandler?: string;
  facebookHandler?: string;
  instagramHandler?: string;
  linkedlnHandler?: string;
  tiktokHandler?: string;
}

const userSchema: Schema<IUser> = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNum: {
    type: String,
  },
  twitterHandler: {
    type: String,
  },
  facebookHandler: {
    type: String,
  },
  instagramHandler: {
    type: String,
  },
  linkedlnHandler: {
    type: String,
  },
  tiktokHandler: {
    type: String,
  },
});

export const User = model("user", userSchema);
