import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  photo: string;
  planId: number;
  creditBalance: number;
}

const userSchema = new Schema({
  clerkId: { String, required: true, unique: true },
  username: { String, required: true, unique: true },
  email: { String, required: true, unique: true },
  firstName: { String },
  lastName: { String },
  photo: { String, required: true },
  planId: { Number, default: 1 },
  creditBalance: { Number, default: 10 },
});

const User = models?.User || model("User", userSchema);

export default User;
