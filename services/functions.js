const shortTextHanlder = (text, max) => {
  const one = text.split("");
  const two = one.slice(0, max);
  const result = two.join("");
  return result;
};

const convertToLocalString = (number) => {
  const result = number.toLocaleString();
  return result;
};

const getFirstLetter = (text) => {
  const one = text.split("");
  const two = one.slice(0, 1);
  const three = two.toString()

  return three;
};

const uploadImageHandler = async (image, url) => {
  const body = new FormData();
  body.append("file", image);
  const response = await fetch(`/api/uploadimage/${url}`, {
    method: "POST",
    body,
  });
  return response;
};

export {
  shortTextHanlder,
  convertToLocalString,
  uploadImageHandler,
  getFirstLetter,
};
