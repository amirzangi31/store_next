import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

//NEXT AUTH
import { useSession } from "next-auth/react";

//ICONS
import { VscSignIn } from "react-icons/vsc";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "@/redux/user/userActions";
import LoadingComponent from "@/loaders/LoadingComponent";




function Navbar({ font }) {
  const [theme, setTheme] = useState("light");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState(null);

  //user authenticated
  const { status } = useSession();
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.userState);
  useEffect(() => {
    dispatch(fetchUser());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //change theme
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //change style navbar on scroll
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  //toggle menu
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme, clientWindowHeight]);

  return (
    <nav className={`navbar fixed ${font} `}>
      <div className="container mx-auto p-2 flex justify-between items-center">
        {/* hamburgermenu */}
        <div className="block md:hidden w-3/12 " style={{ zIndex: 1200 }}>
          <button
            type="button"
            className={`btn ${
              toggleMenu ? "btn-primary " : "btn-secondary"
            } btn-sm`}
            onClick={toggleMenuHandler}
          >
            {toggleMenu ? (
              <AiOutlineClose className="text-1xl text-white font-bold" />
            ) : (
              <AiOutlineMenu className="text-1xl text-primary font-bold" />
            )}
          </button>
        </div>
        {/* hamburgermenu */}

        {/* mobile menu */}
        <div className={`${toggleMenu ? "menu-mobile active" : "menu-mobile"}`}>
          <ul className="flex justify-center items-center flex-col h-full">
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
            <div className="dropdown dropdown-bottom dropdown-end">
              <label
                tabIndex={0}
                className="item-list-navbar text-primary my-2"
              >
                پشتیبانی
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="my-1 bg-secondary text-primary rounded-lg">
                  <Link href="/">پشتیبانی</Link>
                </li>
                <li className="my-1 bg-secondary text-primary rounded-lg">
                  <Link href="/">پشتیبانی</Link>
                </li>
              </ul>
            </div>
            <li className="item-list-navbar text-primary my-2">
              <Link href="/">ثبت نام / ورود</Link>
            </li>
          </ul>
        </div>
        {/* mobile menu */}

        {/* logo      */}
        <div className="w-1/12 ">
          <Link href="/" className="text-primary font-bold normal-case text-xl">
            Shop{" "}
          </Link>
        </div>
        {/* logo      */}

        {/* menu */}
        <div className="w-8/12 text-center hidden md:block">
          <ul className="flex justify-start items-center font-bold">
            <li className="item-list-navbar">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="item-list-navbar">
              <Link href="/">محصولات</Link>
            </li>
            <li className="item-list-navbar">
              <Link href="/">مقالات</Link>
            </li>
            <li className="item-list-navbar">
              <Link href="/">درباره ما</Link>
            </li>
            <li className="item-list-navbar">
              <Link href="/">تماس با ما</Link>
            </li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="item-list-navbar">
                پشتیبانی
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li className="bg-secondary text-primary my-1 rounded-lg">
                  <Link href="/">پشتیبانی</Link>
                </li>
                <li className="bg-secondary text-primary my-1 rounded-lg">
                  <Link href="/">پشتیبانی</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        {/* menu */}

        {/* buttons  */}
        <div className="w-3/12 text-center flex justify-end items-center ">
          <button
            type="button"
            className="btn btn-secondary btn-sm font-bold text-primary mx-2"
            onClick={changeTheme}
          >
            {theme === "light" ? (
              <BsFillMoonFill className="text-1xl " />
            ) : (
              <BsFillSunFill className="text-1xl " />
            )}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm font-bold text-primary relative"
          >
            <AiOutlineShoppingCart className="text-1xl" />
            <span className="badge-one">1</span>
          </button>
          {status === "authenticated" ? (
            <div
              className="tooltip  tooltip-secondary tooltip-bottom "
              data-tip={!loading ? users.name : ""}
            >
              <Link href="/dashboard">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm font-bold text-primary mr-2"
                >
                  {loading ? <LoadingComponent /> : <AiOutlineUser className=" " />}
                </button>
              </Link>
            </div>
          ) : (
            <Link href="/signup" className="flex justify-between items-center">
              <button
                type="button"
                className="btn btn-secondary btn-sm mx-2 font-bold text-primary  items-center hidden md:flex"
              >
                <VscSignIn className="text-1xl" />
                ورود
              </button>
            </Link>
          )}
        </div>
        {/* buttons  */}
      </div>
    </nav>
  );
}

export default Navbar;
