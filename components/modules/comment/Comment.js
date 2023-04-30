import LoadingComponent from "@/loaders/LoadingComponent";
import { getFirstLetter } from "@/services/functions";
import moment from "jalali-moment";
import React from "react";
import { useState } from "react";

function Comment({ createdAt, name, answer, comment, type, _id, show, email }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [answerC, setAnswerC] = useState("");


  const answerHandler = async (id) => {
    setLoading(true);
    const res = await fetch(`/api/comment/answer/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ answer: answerC }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setLoading(false);
      setShowModal(false);
      setAnswerC("");
    }
  };

  const closeHandler = (e) => {
    if (e.target.className === "content-modal") {
      setShowModal(false);
    }
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/comment/delete/${_id}`, {
      method: "DELETE",
    });

    const data = await res.json();
  };

  const confirmHandler = async () => {
    const res = await fetch(`/api/comment/confirm/${_id}`, { method: "PATCH" });
    const data = await res.json();
  };


  return (
    <div className="comment w-full p-4 bg-secondary my-4 shadow-lg rounded-lg ">
      <div className="comment__header flex justify-between items-center text-primary">
        <div className=" comment__profile flex justify-between items-center">
          <div className="avatar placeholder">
            <div className="bg-white text-primary rounded-full w-12">
              <span className="text-2xl">
                {getFirstLetter(name).toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center flex-col">
            <span className="text-md mx-2">{name}</span>
            {type === "admin" && <span className="text-md mx-2">{email}</span>}

          </div>
        </div>
        <div className="comment__date">
          <span className="text-primary">
            {moment(createdAt, "YYYY/MM/DD ")
              .locale("fa")
              .format("YYYY/MM/DD ")}
          </span>
          <span className="text-error">

            {moment(createdAt, "HH:mm").locale("fa").format("HH:mm")}
          </span>

        </div>
      </div>
      <hr className="text-primary my-2" />
      <div className="comment__body bg-white rounded-lg shadow-sm p-2">
        <div className="comment__queiz py-3 text-primary">{comment}</div>

        {answer && (
          <>
            <hr />
            <div className="comment__answer py-3 text-error">{answer}</div>
          </>
        )}
      </div>
      {type === "admin" && (
        <>
          <hr className="text-primary my-2" />
          {showModal && (
            <div className="content-modal" onClick={closeHandler}>
              <div className="rounded-lg p-5 bg-white w-80 max-w-full">
                <textarea
                  name="answer"
                  id="answer"
                  value={answerC}
                  onChange={(e) => setAnswerC(e.target.value)}
                  cols="30"
                  rows="10"
                ></textarea>
                <button
                  className="btn btn-sm btn-primary w-full"
                  onClick={() => answerHandler(_id)}
                  type="button"
                  disabled={loading}
                >
                  {loading ? <LoadingComponent /> : "پاسخ"}
                </button>
              </div>
            </div>
          )}
          <div className="flex justify-end items-center">
            <button
              type="button"
              onClick={deleteHandler}
              className="btn btn-sm btn-error text-white"
            >
              حذف{" "}
            </button>
            {!answer ? (
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn btn-sm btn-success mx-2 text-white"
              >
                پاسخ
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn btn-sm btn-success mx-2 text-white"
              >
                تغییر پاسخ
              </button>
            )}
            {show === false ? (
              <button
                type="button"
                onClick={confirmHandler}
                className="btn btn-sm btn-primary mx-2 text-white"
              >
                تایید
              </button>
            ) : (
              <span className="btn btn-sm mx-2 btn-primary">درحال نمایش</span>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Comment;
