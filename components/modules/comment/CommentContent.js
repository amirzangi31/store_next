import React from "react";
import Comment from "./Comment";
import { useEffect } from "react";
import { useState } from "react";

import Loader from "@/components/templates/loader/Loader";


function CommentContent({ data , type }) {
    
  if (!data) return <Loader />;

  if (data.length === 0)
    return (
      <div className="text-center text-3xl text-primary h-48 flex justify-center items-center">
        <h3>کامنتی وجود ندارد 😐</h3>
      </div>
    );
  return (
    <div>
      <div className="title">
        <h3>کامنت ها</h3>
      </div>
      {data.map((item) => (
        <Comment key={item._id} {...item} type={type}  />
      ))}
    </div>
  );
}

export default CommentContent;
