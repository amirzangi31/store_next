import { phoneNumberValidator } from "@persian-tools/persian-tools";

const validateRepire = (data) => {
  const errors = {};
  const { name, phone, model, des , brand } = data;

  if (!name.trim()) {
    errors.name = "نام کاربری الزامی میباشد";
  } else {
    delete errors.name;
  }
  if (!des.trim()) {
    errors.des = "توضیحات الزامی میباشد";
  } else {
    delete errors.des;
  }
  if (!model.trim()) {
    errors.model = "وارد کردن مدل الزامی میباشد";
  } else {
    delete errors.model;
  }
  if (!brand.trim()) {
    errors.brand = "انتخاب کردن برند الزامی میباشد";
  } else {
    delete errors.brand;
  }
  if (!phone.trim()) {
    errors.phone = "شماره همراه الزامی میباشد";
  } else if (!phoneNumberValidator(phone)) {
    errors.phone = "شماره همراه معتبر وارد کنید";
  } else {
    delete errors.phone;
  }

  return { errors, lengthErrors: Object.keys(errors).length };
};

export default validateRepire;
