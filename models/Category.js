import { models, model, Schema } from "mongoose";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Categrory = models.Categrory || model("Categrory", categorySchema);

export default Categrory;
