import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, XIcon } from "lucide-react";

const Message = ({ title, body, isError = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4 }}
          className={`fixed z-50 text-left bg-white border-t-4 max-w-[90%] w-[350px] mx-auto p-4 rounded-lg shadow-lg top-28 right-[10px] sm:right-[35px] ${
            isError ? "text-red-500" : "text-green"
          }`}
        >
          <div className="flex items-center gap-2">
            {isError ? <XIcon strokeWidth={4} /> : <Check strokeWidth={4} />}
            <h3 className="font-bold text-lg ">{title}</h3>
          </div>
          <p className="mt-2 text-black w-[90%] ml-auto">{body}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
