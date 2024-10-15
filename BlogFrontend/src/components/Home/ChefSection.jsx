import chefImg from "../../assets/imgs/chef.png";
import veganIcon from "../../assets/icons/vegan.png";
import meatIcon from "../../assets/icons/meat.png";
import onionIcon from "../../assets/icons/onion.svg";
import tomatoIcon from "../../assets/icons/tomato.svg";
import frAnimations, { motion } from "../../constants/framerAnimations";
import { Link } from "react-router-dom";

function ChefSection() {
  return (
    <div>
      <div
        className="
      container px-4 mx-auto flex flex-col gap-20 justify-between items-center py-16
      lg:flex-row lg:gap-0
      "
      >
        {/* Text Section */}
        <div
          className="
        flex-1 mb-8 pr-[2rem] text-center
        md:mb-0
        lg:text-left
        "
        >
          <motion.div
            {...frAnimations.fadeRight({ duration: 0.4 })}
            className="
            text-4xl leading-[42px] font-bold mb-4
            sm:text-5xl
            "
          >
            Everyone can be a <br /> chef in their own kitchen
          </motion.div>
          <motion.p
            {...frAnimations.fadeRight({ duration: 0.4, delay: 0.2 })}
            className="text-gray-600 mb-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <Link to="/blog">
            <motion.button
              {...frAnimations.fadeRight({ duration: 0.4, delay: 0.4 })}
              {...frAnimations.btnRotate({ delay: 0 })}
              className="bg-black text-white py-[1rem] px-[2.4rem] text-sm font-medium mt-[4rem] rounded-[0.8rem] shadow-lg"
            >
              Learn More
            </motion.button>
          </Link>
        </div>

        {/* Image Section */}
        <motion.div
          {...frAnimations.fadeUp({ duration: 0.5, delay: 0.3 })}
          className="flex-1 flex justify-center relative "
        >
          <img
            src={chefImg}
            alt="Chef"
            className="max-w-full z-10 h-auto object-cover"
          />
          {/* */}
          <motion.div
            {...frAnimations.toggleY({})}
            className="absolute z-10 top-[9rem] right-[9rem] w-10 h-10 hidden sm:block"
          >
            <img src={onionIcon} alt="onion" />
          </motion.div>
          <motion.div
            {...frAnimations.toggleY({ duration: 3 })}
            className="absolute z-10 top-[14rem] -right-7 w-20 h-20 hidden sm:block"
          >
            <img src={veganIcon} alt="vegetable" />
          </motion.div>
          <motion.div
            {...frAnimations.toggleY({ duration: 4, rotate: -20 })}
            className="absolute z-10 top-[3rem] left-[6rem] w-[6rem] h-[6rem] hidden sm:block"
          >
            <img src={meatIcon} alt="meat" />
          </motion.div>
          <motion.div
            {...frAnimations.toggleY({ duration: 1 })}
            className="absolute z-10 bottom-[5rem] left-[2.5rem] hidden sm:block"
          >
            <img src={tomatoIcon} alt="tomato" />
          </motion.div>
          {/*  */}
          <div
            {...frAnimations.toggleY({})}
            className="
            absolute z-0 w-[100%] h-full bottom-0 right-0 bg-gradient-to-t from-babyBlue to-transparent rounded-[1.8rem]
            lg:w-[90%]
            "
          ></div>
        </motion.div>
      </div>
    </div>
  );
}

export default ChefSection;
