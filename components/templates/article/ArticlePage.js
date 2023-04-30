import CardArticle from "@/components/modules/cards/CardArticle";
import React from "react";
import { useState } from "react";

function ArticlePage({ articles }) {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchArticles = articles.filter((item) => item.title.includes(search));

  return (
    <div className="content-page">
      <div className="container px-2">
        <div className="form-b">  
          <div>
            <input type="text" onChange={changeHandler} placeholder="جست وجو در مقالات...." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {searchArticles.map((item) => (
              <CardArticle key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
