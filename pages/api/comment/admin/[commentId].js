import Article from "@/models/Article";
import Comment from "@/models/Comment";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  if (req.method !== "GET") return;

  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Error to connecting to db" });
  }

  const id = req.query.commentId;

  const articleName = await Article.findOne({ _id: id });
  
  if (!articleName) {
    return res
      .status(404)
      .json({ status: "failed", message: "Article is not found" });
  }

  try {
    const comments = await Comment.find({ parent: id });
    const data = comments.reverse();
    return res.status(200).json({ status: "success", data  });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Error in storing data in DB" });
  }
};

export default handler;
