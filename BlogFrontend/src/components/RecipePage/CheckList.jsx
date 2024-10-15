import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import frAnimations from "../../constants/framerAnimations";
import { Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToComplatedTasks,
  removeFromComplatedTasks,
} from "../../reducers/recipesSlice";
import { useParams } from "react-router-dom";

const ListItem = ({ header, extended, body, img, ix }) => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const { complatedTasks } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (isVisible) dispatch(removeFromComplatedTasks(id + header));
    else dispatch(addToComplatedTasks(id + header));
  };

  useEffect(() => {
    if (complatedTasks) {
      const currentState = complatedTasks.includes(id + header);
      setIsVisible(currentState);
    }
  }, [complatedTasks]);

  return (
    <motion.li
      {...frAnimations.fadeUp({})}
      onClick={handleToggle}
      className="flex items-start py-[33px] border-b border-black/10 gap-6 cursor-pointer"
    >
      <motion.div
        className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full border-2 border-black/10 flex items-center justify-center"
        initial={{ backgroundColor: "transparent", borderColor: "#e5e5e5" }}
        animate={{
          backgroundColor: isVisible ? "#000" : "transparent",
          borderColor: isVisible ? "#000" : "#e5e5e5",
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="flex items-center justify-center"
            >
              <Check stroke="white" size={20} strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* INFO */}
      <div>
        <span
          className={`transition-all duration-200  ${
            extended && "text-2xl font-semibold"
          }
          ${
            isVisible
              ? "opacity-20 text-black/60 text-base line-through"
              : "text-lg "
          }
        `}
        >
          {header}
        </span>
        {body && (
          <p
            className={`mt-6 duration-200 ${
              isVisible ? "text-black/20" : "text-black/60"
            }`}
          >
            {body}
          </p>
        )}
        {img && (
          <img
            className={`my-6 rounded-[20px] duration-200  ${
              isVisible && "opacity-50"
            }`}
            src={import.meta.env.VITE_API_SERVER + img.url}
          />
        )}
      </div>
    </motion.li>
  );
};

function CheckList({ title, extended, items = [] }) {
  return (
    <div>
      {title && (
        <motion.h1
          {...frAnimations.fadeRight({})}
          className="text-2xl font-semibold mt-12"
        >
          {title}
        </motion.h1>
      )}
      <ul>
        {items.map((ele, ix) => (
          <ListItem
            key={ix}
            ix={ix}
            header={ele.header}
            body={ele.body}
            img={ele.img}
            extended={extended}
          />
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
