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
  // const session = await getSession({ req });
  // if (!session) {
  //   return res
  //     .status(401)
  //     .json({ status: "failed", message: "You are not log in !" });
  // }

  if (req.method === "DELETE") {
    const id = req.query.articleId;

    try {
      await Article.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "data deleted" });
    } catch (error) {
      res
        .status(500)
        .json({
          status: "failed",
          message: "Error in deleting data from database",
        });
    }
  }
};

export default handler;
