import Loader from "../Common/Loader";
import Article from "./Article";

function ArticlesList({ articles }) {
  return (
    <div className="
    w-full flex flex-col gap-[2rem]
    lg:w-[200%]
    ">
      {articles
        ? articles.map((ele, ix) => <Article key={ix} article={ele} />)
        : [1, 2, 3].map((ele, ix) => <Loader key={ix} />)}
    </div>
  );
}

export default ArticlesList;
