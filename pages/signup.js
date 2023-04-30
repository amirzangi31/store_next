import SignUpPage from "@/components/templates/auth/SignUpPage";
import notify from "@/services/Toastify";
import validateSign from "@/validateForm/validateSign";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function SingUp() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validateSign(form, "signin").errors);
  }, [form, touched]);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    setLoading(true);
    if (validateSign(form, "signin").lengthErrors === 0) {
      const res = await axios.post("/api/user/signup", form);
      console.log(res)
      if (res.data.status === "success") {
        setLoading(false);
        notify("success" , "ثبت نام با موفقیت انجام شد")
        setTimeout(() => {
          router.push("/signin");
        }, 1000);
      }else {
        setLoading(false)
        notify("error" , "ثبت نام با انجام نشد")
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
    <SignUpPage
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

export default SingUp;
