import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import socials from "../../assets/icons/Social.svg";
import frAnimations, { motion } from "../../constants/framerAnimations";
import { XIcon, MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

const navElements = [
  { text: "Home", href: "/" },
  { text: "Recipes", href: "/#recipes" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
  { text: "About us", href: "" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrollPosition ? "fixed" : "relative"
      } transition-all duration-300 z-[99] w-full box-border border-b border-black/10`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-[5rem] ">
        {scrollPosition ? (
          <div className="fixed bg-white/35 backdrop-blur-md z-[-10] w-full h-[5rem] left-0" />
        ) : null}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        {isOpen ? (
          <XIcon
            className="block lg:hidden right-0 cursor-pointer z-[99]"
            strokeWidth={2}
            size={33}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <MenuIcon
            className="block lg:hidden cursor-pointer z-[99]"
            strokeWidth={2}
            size={33}
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen ? (
          <ul
            className="
        absolute block z-[100] bg-white/35 backdrop-blur-md w-full py-4 right-0 top-full
        lg:flex lg:relative lg:items-center lg:gap-14
        "
          >
            <div className="container px-4 mx-auto">
              {navElements.map((ele, ix) => (
                <li key={ix}>
                  <motion.a
                    {...frAnimations.btnRotate({})}
                    href={ele.href}
                    className="font-medium block py-2 text-lg lg:text-base"
                  >
                    {ele.text}
                  </motion.a>
                </li>
              ))}
            </div>
          </ul>
        ) : (
          <ul className="hidden lg:flex lg:relative lg:items-center lg:gap-14">
            {navElements.map((ele, ix) => (
              <li key={ix}>
                <motion.a
                  {...frAnimations.btnRotate({})}
                  href={ele.href}
                  className="font-medium block py-2 text-lg lg:text-base"
                >
                  {ele.text}
                </motion.a>
              </li>
            ))}
          </ul>
        )}
        <img className="hidden lg:block" src={socials} alt="Socials" />
      </div>
    </nav>
  );
}

export default Navbar;
