const countText = (text) => {
  const one = text.split(" ");
  const two = one.length;
  return two;
};

const validateComment = (data) => {
  const error = {};
  const { name, email, comment } = data;

  if (!name.trim()) {
    error.name = "نام الزامی میباشد";
  } else {
    delete error.name;
  }

  if (!email.trim()) {
    error.email = "ایمیل الزامی میباشد";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.email = "لطفا ایمیل معتبر وارد کنید";
  } else {
    delete error.email;
  }

  if (!comment.trim()) {
    error.comment = "متن کامنت الزامی میباشد";
} else if(countText(comment) < 3){
    
    error.comment = "متن  حداقل باید دو کلمه باشد";
  }else{
    delete error.comment;
  }

  return { errors: error, lengthError: Object.keys(error).length };
};

export default validateComment;
