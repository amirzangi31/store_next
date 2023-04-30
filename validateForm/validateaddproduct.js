function validateaddproduct(data) {
  const { name, category, price, image, des } = data;

  const errors = {};

  if (name.trim() === "") {
    errors.name = "نام الزامی میباشد";
  } else {
    delete errors.name;
  }

  if (category.trim() === "") {
    errors.category = "دسته بندی الزامی میباشد";
  } else {
    delete errors.category;
  }

  if (price.trim() === "") {
    errors.price = "قیمت الزامی میباشد";
  } else {
    delete errors.price;
  }

  if (des.trim() === "") {
    errors.des = "توضیحات الزامی میباشد";
  } else {
    delete errors.des;
  }
  if (image.trim() === "") {
    errors.image = "عکس الزامی میباشد";
  } else {
    delete errors.image;
  }

  return { errors: errors, lengthErrors: Object.keys(errors).length };
}

export default validateaddproduct;
