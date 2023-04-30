import React from 'react'
import HeaderHome from '../modules/home/HeaderHome'
import Image from "next/image";
import OpratorsHome from '../modules/home/OpratorsHome';
import BrandSliderHome from '../modules/home/BrandSliderHome';
import ArticleSliderHome from '../modules/home/ArticleSliderHome';

function HomePage({articles}) {

  return (
    <>
      <HeaderHome />
      <section className="pb-4" id="start">
        <div className="container px-2">
          <div className="title">
            <h3>خدمات ما </h3>
          </div>
          <div className="content mt-4 grid grid-col-1 lg:grid-cols-2 gap-4">
            <div className="card-services   ">
              <div className="card-services__image  overflow-hidden">
                <Image
                  src="/images/services/ersal.jpg"
                  alt="image-services"
                  width={1000}
                  height={700}
                />
              </div>
              <div className="card-services__body">
                <div className="card-services__title text-md py-2">
                  <h3 className="text-center w-full">ارسال رایگان</h3>
                </div>
                <div className="card-services__text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>
            <div className="card-services   ">
              <div className="card-services__image  overflow-hidden">
                <Image
                  src="/images/services/moshavereh.jpg"
                  alt="image-services"
                  width={1000}
                  height={700}
                />
              </div>
              <div className="card-services__body">
                <div className="card-services__title text-md py-2">
                  <h3 className="text-center w-full">مشاوره خرید </h3>
                </div>
                <div className="card-services__text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>
            <div className="card-services   ">
              <div className="card-services__image  overflow-hidden">
                <Image
                  src="/images/services/queiz.jpg"
                  alt="image-services"
                  width={1000}
                  height={700}
                />
              </div>
              <div className="card-services__body">
                <div className="card-services__title text-md py-2">
                  <h3 className="text-center w-full">پرسش و پاسخ </h3>
                </div>
                <div className="card-services__text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>
            <div className="card-services   ">
              <div className="card-services__image  overflow-hidden">
                <Image
                  src="/images/services/repire.jpg"
                  alt="image-services"
                  width={1000}
                  height={700}
                />
              </div>
              <div className="card-services__body">
                <div className="card-services__title text-md py-2">
                  <h3 className="text-center w-full">تعمیر </h3>
                </div>
                <div className="card-services__text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-4">
        <div className="title">
          <div className="container px-2">
            <h3>اپراتورها </h3>
            <div className="content flex justify-center items-center flex-wrap mt-6 ">
              <OpratorsHome />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-4">
        <div className="container">
          <div className="title">
            <h3>اینستاگرام</h3>
          </div>
          <div className="content px-2">
            <div className="card-instagram ">
              <Image
                width={1000}
                height={700}
                className="w-32 h-32"
                src="/images/instagram/instagram.png"
                alt="instagram-logo"
              />
              <div className="card-instagram__body">
                اینستاگرام ما را دنبال کنید تا از جدیدترین اخبار دنیای دیجیتال
                با خبر شوید
              </div>
              <div className="card-instagram__button">
                <button className="btn btn-primary " type="button">
                  اینستاگرام ما
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="title">
            <h3>مقالات</h3>
          </div>
          <div className="content">
            <ArticleSliderHome articles={articles}/>
          </div>
        </div>
      </section>
      <section className="bg-secondary pb-4">
        <div className="container">
          <div className="title">
            <h3>برند ها</h3>
          </div>
          <div className="content">
            <BrandSliderHome />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;






