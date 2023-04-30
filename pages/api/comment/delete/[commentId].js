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

  if (req.method === "DELETE") {
    const id = req.query.commentId;

    try {
      await Comment.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "data deleted" });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "Error in deleting data from database",
      });
    }
  }
};

export default handler;
