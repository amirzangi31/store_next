import Article from "@/models/Article";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Error to connecting to db" });
  }

  
  if (req.method === "GET") {
    const id = req.query.articleid;
    
    try {
      const article = await Article.findOne({ _id: id });
      res.status(200).json({ status: "success", data: article });
    } catch (error) {

      res
        .status(500)
        .json({
          status: "failed",
          message: "Error to getting data from database",
        });
    }
  }
};

export default handler;
