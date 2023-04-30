import { models, model, Schema } from "mongoose";

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    default : false
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  answer: {
    type: String,
    default: "",
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
