import LoadingComponent from "@/loaders/LoadingComponent";
import notify from "@/services/Toastify";
import validateComment from "@/validateForm/validateComment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CommentForm({ parentId, type }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    parent: parentId,
    type,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validateComment(form).errors);
  }, [form, touched]);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const focusHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };
  const submitHandler = async () => {
    setLoading(true);
    if (validateComment(form).lengthError === 0) {
      const res = await fetch(`/api/comment/insert`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (data.status === "success") {
        setLoading(false);
        notify("success", "کامنت با موفقیت ارسال شد");
        setForm({
          name: "",
          email: "",
          comment: "",
          parent: parentId,
          type,
        });
        setTouched({
          name : false,
          email : false,
          comment : false,
        })
      }
    }
  };

  return (
    <div className="my-3">
      <div className="">
        <h5 className="text-lg text-primary text-right ">کامنت </h5>
      </div>
      <form>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="form-b__form-group ">
            <label
              htmlFor="name"
              className={`${
                errors.name && touched.name ? "text-error" : "text-primary"
              }`}
            >
              نام و نام خانوادگی :
            </label>
            <input
              type="text"
              onChange={changeHandler}
              className={`${
                errors.name && touched.name ? "border-error" : "border-primary"
              }`}
              onFocus={focusHandler}
              name="name"
              id="name"
              value={form.name}
            />
            {errors.name && touched.name && (
              <span className="text-error text-xs ">{errors.name}</span>
            )}
          </div>
          <div className="form-b__form-group ">
            <label
              htmlFor="email"
              className={`${
                errors.email && touched.email ? "text-error" : "text-primary"
              }`}
            >
              ایمیل :
            </label>
            <input
              value={form.email}
              type="text"
              className={`${
                errors.email && touched.email
                  ? "border-error"
                  : "border-primary"
              }`}
              onChange={changeHandler}
              onFocus={focusHandler}
              name="email"
              id="email"
            />
            {errors.email && touched.email && (
              <span className="text-error text-xs ">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="form-b__form-group-text">
          <label
            htmlFor="text"
            className={`${
              errors.comment && touched.comment ? "text-error" : "text-primary"
            }`}
          >
            متن کامنت :
          </label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={changeHandler}
            onFocus={focusHandler}
            id="text"
            className={`${
              errors.comment && touched.comment
                ? "border-error"
                : "border-primary"
            }`}
            cols="30"
            rows="10"
          ></textarea>
          {errors.comment && touched.comment && (
            <span className="text-error text-xs ">{errors.comment}</span>
          )}
        </div>
        <div className="px-2">
          <button
            type="button"
            className="btn btn-sm btn-primary text-white w-full"
            onClick={submitHandler}
            disabled={loading}
          >
            {loading ? <LoadingComponent /> : "ارسال کامنت"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
