import React from "react";

function HeaderHome() {
  return (
    <header
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/landing-page.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md ">
          <h1 className="mb-5 text-2xl md:text-4xl font-bold  ">
            خوش آمدید به سایت ما 😉
          </h1>
          <p className="mb-5  md:text-1xl  font-bold ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <button className="btn btn-primary ">
            <a href="#start">شروع کنیم ؟؟</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
