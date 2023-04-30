import Comment from "@/models/Comment";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  if (req.method !== "POST") return;
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Error to connecting to db" });
  }

  const { name, email, comment, type, parent } = req.body;

  if (!name || !email || !comment || !type || !parent) {
    return res.status(400).json({ status: "failed", message: "Invalid Data" });
  }

  try {
    const comment = await Comment.create({ ...req.body });

    return res.status(201).json({
      status: "success",
      message: "The comment was successfully created",
      data: comment,
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "Error in storing data in DB" });
  }
};

export default handler;
