import frAnimations, { motion } from "../../constants/framerAnimations";
import floatVegtPic from "../../assets/imgs/float-vegt.png";
import platePic from "../../assets/imgs/Photo-plate.png";
import rucolaPic from "../../assets/imgs/rucola-png.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postEmail } from "../../reducers/emailsSlice";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";

function SubscribeSection() {
  const { response, status, error } = useSelector((state) => state.emails);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please enter your email"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(postEmail(values.email));
      resetForm();
    },
  });

  return (
    <div className="container px-4 w-full min-h-[442px] mx-auto pt-6 pb-12">
      <div className="w-full min-h-full flex flex-col items-center justify-center text-center bg-[#e7f9fd] rounded-[60px] relative overflow-hidden p-[1.5rem] py-[2rem] sm:p-[3rem] lg:p-[5rem]">
        {/* Images */}
        <motion.img
          {...frAnimations.apearWithRotate({})}
          src={platePic}
          alt="Plate"
          className="
          -bottom-[140px] -right-[140px]
          hidden origin-bottom-right absolute
          lg:block
          "
        />
        <motion.img
          {...frAnimations.apearWithRotate({ axis: -50, rotate: -45 })}
          src={floatVegtPic}
          alt="floatVegt"
          className="
          -bottom-[160px] -left-[200px]
          hidden origin-bottom-left absolute
          lg:block
          "
        />
        <motion.img
          {...frAnimations.fadeUp({ delay: 0.4 })}
          src={rucolaPic}
          alt="rucola"
          className="
          top-[50px] left-[70px]
          hidden absolute
          lg:block
          "
        />
        {/* Images */}

        <motion.p
          {...frAnimations.fadeUp({})}
          className="
          text-3xl z-[4] font-semibold text-black
          md:text-4xl
          lg:text-5xl
          "
        >
          Deliciousness to your inbox
        </motion.p>
        <motion.p
          {...frAnimations.fadeUp({ delay: 0.2 })}
          className="
          text-[16px] w-full font-normal text-black/60 mt-4
          lg:max-w-[60%]
          "
        >
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </motion.p>

        <motion.form
          onSubmit={formik.handleSubmit}
          {...frAnimations.fadeUp({ duration: 0.4, delay: 0.3 })}
          className="w-full"
        >
          <div
            className="flex z-50 w-[90%] mx-auto md:w-[50%] h-[80px] p-3 bg-white rounded-[24px] mt-12"
            style={
              formik.touched.email &&
              formik.errors.email && {
                borderColor: "red",
                borderWidth: "2px",
              }
            }
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="h-full w-full px-4 pl-2"
            />
            <button
              className="hidden sm:flex items-center justify-center text-[14px] w-[160px] font-semibold text-white bg-black rounded-[16px] h-full"
              style={
                formik.touched.email &&
                formik.errors.email && {
                  color: "red",
                }
              }
            >
              Subscribe
            </button>
          </div>
          <button
            className="flex sm:hidden mx-auto mt-4 items-center justify-center text-[14px] w-[160px] font-semibold text-white bg-black rounded-[16px] h-[60px]"
            style={
              formik.touched.email &&
              formik.errors.email && {
                color: "red",
              }
            }
          >
            Subscribe
          </button>
        </motion.form>
        {status == "SUCCESS" && (
          <Message
            title="Congratulation!!"
            body="You subscribed successfully"
          />
        )}
        {status == "FAILED" && (
          <Message
            title="Duplicated!!"
            body="This email recorded previously"
            isError={true}
          />
        )}
      </div>
    </div>
  );
}

export default SubscribeSection;
