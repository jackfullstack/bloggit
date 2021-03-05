import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const otherArticles = articleContent.filter(
    (otherArticle) => otherArticle.name !== name
  );

  if (!article) {
    return <h1>Oops! There is no such article, try again.</h1>;
  }

  return (
    <div className="container p-4 mx-auto my-5 border">
      <div>
      <h1 className="p-3">{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
         </div>
         <div className="p-4 mx-auto my-5 border">
        <h3 className="p-3">Other Articles</h3>
        <ArticlesList articles={otherArticles} />
      </div>
    </div>
  );
};

export default ArticlePage;
