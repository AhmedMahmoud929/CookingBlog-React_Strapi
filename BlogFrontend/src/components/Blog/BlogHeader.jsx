import { useDispatch } from "react-redux";
import frAnimations, { motion } from "../../constants/framerAnimations";
import { useFormik } from "formik";
import { fetchArticles } from "../../reducers/articlesSlice";

function BlogHeader() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      dispatch(fetchArticles(values.query));
    },
  });

  return (
    <div>
      <div className="container px-4 mx-auto py-20">
        <motion.h1
          {...frAnimations.fadeUp({})}
          className="
          text-4xl text-center font-semibold mb-4
          md:text-6xl
          "
        >
          Blog & Article
        </motion.h1>
        <motion.p
          {...frAnimations.fadeUp({ delay: 0.2 })}
          className="text-center text-base text-black/60 leading-7"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </motion.p>
        <motion.form
          onSubmit={formik.handleSubmit}
          {...frAnimations.fadeUp({ delay: 0.4 })}
        >
          <div
            className="
           h-[4.5rem] p-[10px] mt-14 flex max-w-[800px] mx-auto rounded-3xl border border-black/10
           md:h-20 md:mt-20 
          "
          >
            <input
              placeholder="Search article, news or recipe..."
              name="query"
              value={formik.values.query}
              onChange={formik.handleChange}
              className="
            text-sm placeholder:text-black/40 pl-2 w-full font-medium
            sm:pl-4 sm:text-md
            "
            />
            <button className="hidden sm:block px-[56px] bg-black rounded-2xl text-white">
              Search
            </button>
          </div>
          <button
            className="
          block py-[16px] px-[50px] mt-4 mx-auto bg-black rounded-2xl text-white
          sm:hidden
          "
          >
            Search
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default BlogHeader;
