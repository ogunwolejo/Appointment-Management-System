import { Schema, model } from "mongoose";

interface ICompany {
  companyName: string;
  companyEmail?: string;
  companyPhoneNum?: string;
  companyTwitterHandler?: string;
  companyFacebookHandler?: string;
  companyInstagramHandler?: string;
  companyLinkedlnHandler?: string;
  companyTiktokHandler?: string;
}

const companySchema: Schema<ICompany> = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
    },
    companyPhoneNum: {
      type: String,
    },
    companyTwitterHandler: {
      type: String,
    },
    companyFacebookHandler: {
      type: String,
    },
    companyLinkedlnHandler: {
      type: String,
    },
    companyInstagramHandler: {
      type: String,
    },
    companyTiktokHandler: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Company = model("company", companySchema);
