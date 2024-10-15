import { Link } from "react-router-dom";
import frAnimations, { motion } from "../../constants/framerAnimations";
import formatTitle from "../../utils/formatTitle";
import formatDate from "../../utils/formatDate";

function Article({ article }) {
  return (
    <motion.div
      {...frAnimations.fadeUp({})}
      className="
      flex p-6 w-full flex-col h-auto relative items-center gap-[2rem]
      md:flex-row md:h-[220px] md:p-0
      "
    >
      <div className="z-10 w-[100%] md:w-[50%] h-full bg-babyBlue rounded-2xl overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src={import.meta.env.VITE_API_SERVER + article.cover.url}
          alt=""
        />
      </div>
      <div className="z-10 flex flex-col justify-between">
        <Link to={"/article/" + article.documentId}>
          <h1 className="text-xl md:text-2xl font-semibold">
            {formatTitle(article.title, 37)}
          </h1>
        </Link>
        <p className="mt-2 mb-[2rem] text-black/60 leading-5 md:leading-7">
          {formatTitle(article.brief, 100)}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex item-center gap-3 pr-[2rem] mb-3 sm:mb-0 sm:border-r border-black/10">
            <img
              className="w-6 h-6"
              src={import.meta.env.VITE_API_SERVER + article.auther.avatar.url}
              alt="Icon"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{article.auther.fullName}</span>
              <span className="font-medium text-sm text-black/60"></span>
            </div>
          </div>
          <span className="font-medium text-sm pl-[2rem] text-black/60">
            {formatDate(article.publishedAt)}
          </span>
        </div>
      </div>
      <div
        className="
      absolute h-full w-full left-0 top-1/2 -translate-y-1/2 bg-gradient-to-t from-babyBlue to-transparent rounded-2xl -z-10
      md:h-[94%] md:left-20 md:bg-gradient-to-r
      "
      ></div>
    </motion.div>
  );
}

export default Article;
