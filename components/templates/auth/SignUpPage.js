import LoadingComponent from "@/loaders/LoadingComponent";
import Link from "next/link";
import React from "react";

function SignUpPage({
  form,
  changeHandler,
  submit,
  errors,
  touched,
  focus,
  loading,
}) {
  return (
    <div className="content-page ">
      <div className="container px-2 flex justify-center pt-10 items-start">
        <form className="form-s  ">
          <div className="title">
            <h3 className="text-2xl text-center text-primary max-w-full">
              ثبت نام{" "}
            </h3>
          </div>
          <div className="form-s__form-group">
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
              name="name"
              id="name"
              className={`${
                errors.name && touched.name ? "border-error" : "border-primary"
              }`}
              onFocus={focus}
              value={form.name}
              onChange={changeHandler}
            />
            {errors.name && touched.name && (
              <span className="text-error text-xs ">{errors.name}</span>
            )}
          </div>
          <div className="form-s__form-group">
            <label
              htmlFor="email"
              className={`${
                errors.email && touched.email ? "text-error" : "text-primary"
              }`}
            >
              ایمیل:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={`${
                errors.email && touched.email
                  ? "border-error"
                  : "border-primary"
              }`}
              onFocus={focus}
              value={form.email}
              onChange={changeHandler}
            />
            {errors.email && touched.email && (
              <span className="text-error text-xs ">{errors.email}</span>
            )}
          </div>
          <div className="form-s__form-group">
            <label
              htmlFor="password"
              className={`${
                errors.password && touched.password
                  ? "text-error"
                  : "text-primary"
              }`}
            >
              رمز عبور:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`${
                errors.password && touched.password
                  ? "border-error"
                  : "border-primary"
              }`}
              onFocus={focus}
              value={form.password}
              onChange={changeHandler}
            />
            {errors.password && touched.password && (
              <span className="text-error text-xs ">{errors.password}</span>
            )}
          </div>
          <div className="form-s__form-group">
            <label
              htmlFor="confirmPassword"
              className={`${
                errors.confirmPassword && touched.confirmPassword
                  ? "text-error"
                  : "text-primary"
              }`}
            >
              تایید رمز عبور:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={`${
                errors.confirmPassword && touched.confirmPassword
                  ? "border-error"
                  : "border-primary"
              }`}
              onFocus={focus}
              value={form.confirmPassword}
              onChange={changeHandler}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="text-error text-xs ">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button
            type="button"
            className="btn btn-sm border w-full btn-primary my-4"
            onClick={submit}
            disabled={loading}
          >
            {loading ? <LoadingComponent /> : "ثبت نام"}
          </button>
          <Link href="/signin" className="text-xs text-center w-full block">
            قبلا ثبت نام کرده ام ؟{" "}
            <span className="text-primary font-bold">ورود</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
