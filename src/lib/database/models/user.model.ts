import { Schema, model, models, Document } from "mongoose";

// export interface IUser extends Document {
//   clerkId: string;
//   username: string;
//   email: string;
//   firstName?: string;
//   lastName?: string;
//   photo: string;
//   planId: number;
//   creditBalance: number;
// }

const userSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  photo: { type: String, required: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", userSchema);

export default User;
