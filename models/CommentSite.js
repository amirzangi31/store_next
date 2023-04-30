import { Schema, model, models } from "mongoose";

const siteCommentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default : () => Date.now(),
    Immutable: true,
  },
});

const SiteComment =
  models.SiteComment || model("SiteComment", siteCommentSchema);

export default SiteComment;
