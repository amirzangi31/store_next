import { phoneNumberValidator } from "@persian-tools/persian-tools";

const validateProfileUpdate = (data) => {
  const errors = {};

  if (!data.password.trim()) {
    errors.password = " رمز عبور الزامی میباشد";
  } else if (data.password.length < 6) {
    errors.password = "رمز عبور باید 6 رقم یا بیشتر باشد";
  } else {
    delete errors.password;
  }




  if (!data.email.trim()) {
    errors.email = "ایمیل الزامی میباشد";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "لطفا ایمیل معتبر وارد کنید";
  } else {
    delete errors.email;
  }

  if (!data.name.trim()) {
    errors.name = "نام کاربری الزامی میباشد";
  } else {
    delete errors.name;
  }
  // if (!data.postalcode.trim()) {
  //   errors.postalcode = " کد پستی الزامی میباشد";
  // } else {
  //   delete errors.postalcode;
  // }
  // if (!data.address.trim()) {
  //   errors.address = "آدرس الزامی میباشد";
  // } else {
  //   delete errors.address;
  // }

  // if (!data.confirmPassword.trim()) {
  //   errors.confirmPassword = "تایید رمز عبور الزامی میباشد";
  // } else if (data.confirmPassword !== data.password) {
  //   errors.confirmPassword = "رمز عبور مشابه نمیباشد";
  // } else {
  //   delete errors.confirmPassword;
  // }

  // if (!data.phone.trim()) {
  //   errors.phone = "شماره همراه الزامی میباشد";
  // } else if (!phoneNumberValidator(data.phone)) {
  //   errors.phone = "شماره همراه معتبر وارد کنید";
  // } else {
  //   delete errors.phone;
  // }




  return { errors, lengthErrors: Object.keys(errors).length };
};

export default validateProfileUpdate;
