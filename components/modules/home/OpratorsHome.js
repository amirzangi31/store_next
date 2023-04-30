import Image from "next/image";
import Link from "next/link";
import React from "react";



function OpratorsHome() {   
  return (
    <>
      <div className="p-2 w-full lg:w-6/12">
        <div className="card card-oprator lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-1/2">
            <Image
              width={700}
              height={500}
              className="w-full"
              src="/images/moshavereh/1.jpg"
              alt="moshavereh"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-sm text-primary">
              تماس با اپراتور پرسش و پاسخ
            </h2>
            <p className="text-xs mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">
                <Link href="/requestquestion">درخواست پاسخگویی</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 w-full lg:w-6/12">
        <div className="card card-oprator lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-1/2">
            <Image
              width={700}
              height={500}
              className="w-full"
              src="/images/moshavereh/2.jpg"
              alt="moshavereh"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-sm text-primary">
              تماس با اپراتور مشاوره فروش{" "}
            </h2>
            <p className="text-xs mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm transition-all duration-500">
                <Link href="/salesconsuler">درخواست مشاوره</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 w-full lg:w-6/12">
        <div className="card card-oprator lg:card-side bg-base-100 shadow-xl ">
          <figure className="lg:w-1/2">
            <Image
              width={700}
              height={500}
              className="w-full"
              src="/images/moshavereh/3.jpg"
              alt="moshavereh"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-sm text-primary">
              تماس با اپراتور تعمیر{" "}
            </h2>
            <p className="text-xs mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">
                <Link href="/requestrepire">درخواست تعمیر</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default OpratorsHome;
