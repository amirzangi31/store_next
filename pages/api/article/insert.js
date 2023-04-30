import Article from "@/models/Article";

const handler = async (req, res) => {
  if (req.method !== "POST")
    try {
      await connectDB();
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", message: "Error to connecting to db" });
    }

  const { title, cover, des, shortDes } = req.body;
  // const session = await getSession({ req });
  // if (!session) {
  //   return res
  //     .status(401)
  //     .json({ status: "failed", message: "You are not log in !" });
  // }

  if (!title || !cover || !des || !shortDes) {
    return res.status(400).json({ status: "failed", message: "Invalid Data" });
  }

  const articleName = await Article.findOne({ title: title });
  if (articleName) {
    return res
      .status(422)
      .json({ status: "failed", message: "article doesn't exist", error: 422 });
  }

  try {
    const article = await Article.create({ ...req.body });

    return res.status(201).json({
      status: "success",
      message: "The product was successfully created",
      data: article,
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "Error in storing data in DB" });
  }
};

export default handler;
