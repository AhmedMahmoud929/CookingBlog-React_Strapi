import post1 from "../../assets/imgs/post1.svg";
import post2 from "../../assets/imgs/post2.svg";
import post3 from "../../assets/imgs/post3.svg";
import post4 from "../../assets/imgs/post4.svg";
import instaIcon from "../../assets/icons/insta.svg";
import frAnimations, { motion } from "../../constants/framerAnimations";

import { Swiper, SwiperSlide } from "swiper/react";

function InstaSection() {
  return (
    <div className="bg-gradient-to-t  from-babyBlue to-transparent ">
      <div className="container mx-auto py-[4rem]">
        {/* TOP */}
        <div>
          <motion.h1
            {...frAnimations.bounceOut({})}
            className="
            text-4xl gap-2 text-center font-semibold
            sm:text-5xl
            "
          >
            Check out{" "}
            <motion.a
              {...frAnimations.btnRotate({})}
              className="inline-flex text-transparent bg-clip-text"
              href="www.instagram.com"
              target="_blanked"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
              }}
            >
              @foodieland
            </motion.a>{" "}
            on Instagram
          </motion.h1>
          <motion.p
            {...frAnimations.bounceOut({ delay: 0.2 })}
            className="
            w-full mx-auto text-center leading-7 mt-6
            md:w-1/2
            "
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </motion.p>
        </div>

        {/* SLIDER */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 50, disableOnInteraction: false }}
          grabCursor={true}
          speed={800}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper mt-[4rem]"
        >
          {[post1, post2, post3, post4, post3].map((ele, ix) => (
            <SwiperSlide className="flex justify-center" key={ix}>
              <motion.img
                {...frAnimations.fadeUp({ delay: 0.3 })}
                src={ele}
                className="border"
                alt={"post " + ix + 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.button
          {...frAnimations.fadeUp({})}
          {...frAnimations.btnRotate({})}
          className="bg-black flex items-center justify-center gap-3 text-white py-[1.2rem] px-[2rem] text-sm font-medium mx-auto mt-[4rem] rounded-[0.9rem] shadow-lg"
        >
          <span>Visit Our Instagram</span>
          <img src={instaIcon} alt="insta" />
        </motion.button>
      </div>
    </div>
  );
}

export default InstaSection;
