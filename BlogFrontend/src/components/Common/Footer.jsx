import logo from "../../assets/icons/logo.svg";
import socials from "../../assets/icons/Social.svg";
import frAnimations, { motion } from "../../constants/framerAnimations";

function Footer() {
  return (
    <nav className="box-border ">
      <div className="container relative mx-auto px-4 border-b border-black/10">

        <motion.div
          {...frAnimations.fadeUp({})}
          className="
          flex flex-col justify-between items-center min-h-[5rem]
          md:flex-row
          "
        >
          <img src={logo} alt="Logo" className="mb-[2rem] md:mb-0" />
          <ul className="
          flex flex-col text-center justify-center items-center
          sm:flex-row sm:flex-wrap sm:gap-14
          ">
            {["Home", "Recipes", "Blog", "Contact", "About us"].map(
              (ele, ix) => (
                <li key={ix}>
                  <a href="" className="font-medium block py-2">
                    {ele}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
        <motion.p
          {...frAnimations.fadeUp({ delay: 0.2 })}
          className="
          font-light text-center mt-[1.5rem] text-black/50 mb-12
          lg:text-end lg:mt-0
          "
        >
          Lorem ipsum dolor sit amet, consectetuipisicing elit
        </motion.p>
      </div>
      <motion.div
        {...frAnimations.fadeUp({ delay: 0.3 })}
        className="text-center my-12"
      >
        © 2020 Flowbase. Powered by{" "}
        <span className="text-[#FF7967]">Webflow</span>
      </motion.div>
    </nav>
  );
}

export default Footer;
