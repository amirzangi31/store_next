import { shortTextHanlder } from "@/services/functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardArticle({ title, cover, shortDes , _id }) {
  return (
    <div className="card card-article hover:shadow-2xl transition-all duration-700 w-full shadow-xl">
      <figure>
        <Image
          width={1000}
          height={700}
          src={cover}
          alt={title}
          className="h-44"
        />
      </figure>
      <div className="card-body p-5 pb-1 text-center">
        <h2 className="card-title text-center text-primary text-sm">{title}</h2>
        <p className="text-xs">
          {shortTextHanlder(shortDes, 100)}
          {shortDes.length > 100 && "..."}
        </p>
        <div className="card-actions my-4">
          <Link href={`/articles/${_id}`} className="w-full">
            <button className="btn btn-sm  w-full text-secondary btn-primary">
              ادامه مطلب ...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardArticle;
