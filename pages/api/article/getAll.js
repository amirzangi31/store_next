import Article from "@/models/Article";
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

  try {
    const articles = await Article.find();
    return res.status(200).json({ status: "success", data: articles });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Error in storing data in DB" });
  }
};

export default handler;
