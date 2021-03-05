import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <div className=" container p-4 mx-auto my-5 border">
    <h1 className="p-3">Article List</h1>
    {articles.map((article, key) => (
      <div className="p-3">
        <Link key={key} to={`/article/${article.name}`}>
          <h3>{article.title}</h3>
        </Link>
        <p className="p-3">{article.content[0].substring(0, 150)}...</p>
      </div>
    ))}
  </div>
);

export default ArticlesList;
