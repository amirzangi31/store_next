import LoadingComponent from "@/loaders/LoadingComponent";
import Link from "next/link";
import React from "react";

function SignInPage({ form, changeHandler, submit, errors, touched, focus , loading }) {
  return (
    <div className="content-page">
      <div className="container px-2 flex justify-center pt-10 items-start">
        <form className="form-s  ">
          <div className="title">
            <h3 className="text-2xl text-center text-primary max-w-full">
              ورود
             </h3>
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
       

          <button
            type="button"
            className="btn btn-sm border w-full btn-primary my-4"
            onClick={submit}
            disabled={loading}
          >
            {loading ? <LoadingComponent /> : "ورود"}
          </button>
          <Link href="/signup" className="text-xs text-center w-full block">
            آیا قبلا ثبت نام کرده اید؟؟
             <span className="text-primary font-bold">ثبت نام</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
