import React from "react";
import { useState } from "react";

import validateSign from "@/validateForm/validateSign";

import { useEffect } from "react";
import { useRouter } from "next/router";
import notify from "@/services/Toastify";


import { signIn } from "next-auth/react";
import SignInPage from "@/components/templates/auth/SignInPage";

function SignIn() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validateSign(form, "signup").errors);
  }, [form, touched]);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();

  const submitHandler = async () => {
    setLoading(true);
    if (!validateSign(form, "signup").lengthErrors) {
      const res = await signIn("credentials", {
        ...form,
        redirect: false,
      });


      if (!res.error) {
        setLoading(false);
        router.replace("/");
      } else {
        notify("error", "ایمیل یا رمز وارد شده صحیح نمیباشد");
        setLoading(false);
      }
    }
  };

  const focusHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };
  return (
    <SignInPage
      form={form}
      changeHandler={changeHandler}
      submit={submitHandler}
      errors={errors}
      touched={touched}
      focus={focusHandler}
      loading={loading}
    />
  );
}

export default SignIn;
