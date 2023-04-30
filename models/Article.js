import { models, model, Schema } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  shortDes: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  like: {
    type: Number,
    default: 0,
  },
  
});

const Article = models.Article || model("Article", articleSchema);

export default Article;
