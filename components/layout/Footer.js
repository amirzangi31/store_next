import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsGoogle, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import validateSiteComment from "@/validateForm/validateSiteComment";

import "react-toastify/dist/ReactToastify.css";
import notify from "@/services/Toastify";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

function Footer() {
  const [loading, setLoading] = useState(false);

  const [formComment, setFormComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeFormHanlder = (e) => {
    setFormComment({
      ...formComment,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    if (validateSiteComment(formComment).lengthError === 0) {
      setLoading(true);
      const res = await axios.post("/api/sitecomments/insert", formComment);
      if (res.data.status === "success") {
        notify("success", "دیدگاه با موفقیت ارسال شد");
        setLoading(false);
        setFormComment({
          name: "",
          email: "",
          message: "",
        });
      }
    } else {
      notify("error", "لطفا تمام فیلد ها رو پر کنید");
      setLoading(false);
    }
  };

  return (
    <footer className="p-2">
      <div className="container">
        <div className="footer ">
          <div className="w-full md:w-6/12  h-full flex justify-between items-start">
            <div className="footer__line text-primary font-bold w-6/12">
              <h6>مارا دنبال کنید</h6>
              <div className="flex justify-between items-start  text-2xl mt-4 pl-4">
                <BsInstagram className="footer__icon" />
                <BsTwitter className="footer__icon" />
                <BsGoogle className="footer__icon" />
                <BsTelegram className="footer__icon " />
              </div>
              <div className="py-2 flex justify-center items-center">
                <a href="#">
                  <Image
                    src="/images/namad/namad-1.png"
                    width={1000}
                    height={1000}
                    alt="namad_image"
                    className="w-36"
                  />
                </a>
              </div>
            </div>
            <div className="footer__line w-6/12">
              <ul className="h-full flex justify-between items-start flex-col font-bold">
                <li className="item-list-navbar text-primary my-2">
                  <Link href="/">صفحه اصلی</Link>
                </li>
                <li className="item-list-navbar text-primary my-2">
                  <Link href="/">محصولات</Link>
                </li>
                <li className="item-list-navbar text-primary my-2">
                  <Link href="/">مقالات</Link>
                </li>
                <li className="item-list-navbar text-primary my-2">
                  <Link href="/">درباره ما</Link>
                </li>
                <li className="item-list-navbar text-primary my-2">
                  <Link href="/">تماس با ما</Link>
                </li>

                <li className="item-list-navbar text-primary my-2">
                  <Link href="/">ثبت نام / ورود</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-6/12  h-full flex justify-start items-start flex-col">
            <h3 className="text-primary font-bold">دیدگاه خود را در مورد سایت ما را وارد کنید</h3>
            {loading ? (
              <div className="flex justify-center items-center w-full">
                <InfinitySpin width="200" className="text-primary mx-auto" />
              </div>
            ) : (
              <form className="w-full ">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="footer__form-group">
                    <label htmlFor="name">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      name="name"
                      onChange={changeFormHanlder}
                      value={formComment.name}
                    />
                  </div>
                  <div className="footer__form-group">
                    <label htmlFor="name">ایمیل </label>
                    <input
                      type="text"
                      name="email"
                      onChange={changeFormHanlder}
                      value={formComment.email}
                    />
                  </div>
                </div>
                <div className="footer__form-group">
                  <label>دیدگاه</label>
                  <textarea
                    rows="5"
                    name="message"
                    onChange={changeFormHanlder}
                    value={formComment.message}
                    className="w-full mt-2 border border-primary bg-transparent rounded"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={submitHandler}
                  className="btn bg-transparent btn-sm  border border-primary mt-2 w-full transition-all duration-500 text-center text-primary hover:bg-primary hover:text-white"
                >
                  {" "}
                  ارسال دیدگاه
                </button>
              </form>
            )}
          </div>
        </div>
        <h6 className=" mt-auto text-sm py-2 text-primary flex justify-center items-center w-full">
          نوشته شده با ❤ برای دوستان عزیز
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
