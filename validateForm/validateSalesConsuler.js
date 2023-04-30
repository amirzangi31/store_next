import { phoneNumberValidator } from "@persian-tools/persian-tools";

const validateSalesConsuler = (data) => {
  const errors = {};
  const { name, phone, des } = data;

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
  if (!phone.trim()) {
    errors.phone = "شماره همراه الزامی میباشد";
  } else if (!phoneNumberValidator(phone)) {
    errors.phone = "شماره همراه معتبر وارد کنید";
  } else {
    delete errors.phone;
  }

  return { errors, lengthErrors: Object.keys(errors).length };
};

export default validateSalesConsuler;
