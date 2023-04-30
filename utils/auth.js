import { verify } from "jsonwebtoken";

const { hash, compare } = require("bcryptjs");

const hashPassword = async (password) => {
  const result = await hash(password, 12);
  return result;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
const verifyToken = (token, secretKey) => {
  try {
    const result = verify(token, secretKey);
    return result
  } catch (error) {
    return false;
  }
};
export { hashPassword, verifyPassword, verifyToken };
