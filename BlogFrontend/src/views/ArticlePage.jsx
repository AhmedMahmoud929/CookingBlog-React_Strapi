import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import ArticleHeader from "../components/Article/ArticleHeader";
import ArticleBody from "../components/Article/ArticleBody";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, fetchSingleArticle } from "../reducers/articlesSlice";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader";

function ArticlePage() {
  const { id } = useParams();
  const { singleArticle } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleArticle(id));
    }
  }, [id]);
  return (
    <>
      <Navbar />
      {singleArticle ? (
        <>
          <ArticleHeader
            title={singleArticle.title}
            auther={singleArticle.auther}
            cover={singleArticle.cover.url}
            brief={singleArticle.brief}
            publishedAt={singleArticle.publishedAt}
          />
          <ArticleBody content={singleArticle.body} />
        </>
      ) : (
        <div className="container px-4 mx-auto py-14">
          <Loader width="1/2" height="[80px]" spacing="mb-6" />
          <Loader width="[95%]" height="[100px]" spacing="mb-14" />
          <Loader width="[90%]" height="[500px]" />
        </div>
      )}
      <Footer />
    </>
  );
}

export default ArticlePage;
