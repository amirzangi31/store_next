import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import CommentForm from "@/components/modules/comment/CommentForm";
import CommentContent from "@/components/modules/comment/CommentContent";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from 'swr'
import LoadingComponent from "@/loaders/LoadingComponent";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function DetailArticlePage({ des, title, cover, shortDes, _id }) {

  const {data , error , isLoading} = useSWR(`/api/comment/article/${_id}` , fetcher)



  const router = useRouter()

  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`/api/comment/article/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setComments(data.data)
  //       setLoading(false)
  //     });
  //     console.log("first")
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (router.isFallback) return <Loader />

  return (
    <div className="content-page">
      <div className="container ">
        <div className="form-b ">
          <div className="title">
            <h2 className="text-xl text-primary">{title}</h2>
          </div>
          <div className="cover">
            <Image
              src={cover}
              alt={title}
              width={1000}
              height={700}
              className="mx-auto w-8/12 rounded-3xl"
            />
          </div>
          <div className="shortDes my-4 text-primary text-lg text-justify">
            {shortDes}
          </div>
          <hr />
          <div className="my-2 text-xl text-primary">متن اصلی : </div>
          <div className="my-4 ProseMirror">{parse(des)}</div>
          <hr />
          <CommentForm parentId={_id} type="article" />
          {isLoading ? <div className="flex justify-center items-center h-60">
            <LoadingComponent />
          </div>  : <div>
            <CommentContent data={data.data} type="user" />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default DetailArticlePage;
