import frAnimations, { motion } from "../../constants/framerAnimations";
import person1 from "../../assets/icons/person1.svg";
import formatDate from "../../utils/formatDate";

function ArticleHeader({ title, auther, cover, brief, publishedAt }) {
  return (
    <div>
      <div className="container px-4 mx-auto pt-20 pb-10 ">
        <motion.h1
          {...frAnimations.fadeUp({})}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold"
        >
          {title}
        </motion.h1>
        <div className="flex justify-center items-center mt-10 mb-10">
          <motion.div
            {...frAnimations.fadeRight({ delay: 0.2 })}
            className="flex justify-center items-center gap-3 px-[2rem] border-r border-black/10 "
          >
            <img
              className="w-12 h-12"
              src={import.meta.env.VITE_API_SERVER + auther.avatar.url}
              alt="Icon"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{auther.fullName}</span>
            </div>
          </motion.div>
          <motion.span
            {...frAnimations.fadeRight({ delay: 0.4 })}
            className="font-medium text-sm px-[2rem]  text-black/60"
          >
            {formatDate(publishedAt)}
          </motion.span>
        </div>
        <motion.p
          {...frAnimations.fadeUp({ delay: 0.4 })}
          className="text-center text-black/60 leading-6 sm:leading-7 mx-auto lg:w-[70%]"
        >
          {brief}
        </motion.p>
        <motion.div
          {...frAnimations.fadeUp({ delay: 0.5 })}
          className="w-full h-[300px] sm:h-[500px] my-10 md:my-20 rounded-xl overflow-hidden"
        >
          <img
            className="w-full h-full object-cover object-center"
            src={import.meta.env.VITE_API_SERVER + cover}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ArticleHeader;
