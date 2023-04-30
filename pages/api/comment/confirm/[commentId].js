import Comment from "@/models/Comment";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Error to connecting to db" });
  }

  if (req.method === "PATCH") {
    const id = req.query.commentId;

    try {
      const comment = await Comment.findOne({ _id: id });

      comment.show = true;
      comment.updatedAt = Date.now();
      comment.save();

      res
        .status(200)
        .json({ status: "success", message: "data updated", data: comment });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "Error in storying data from database",
      });
    }
  }
};

export default handler;
