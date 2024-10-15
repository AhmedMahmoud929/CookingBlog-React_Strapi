import frAnimations, { motion } from "../../constants/framerAnimations";
import chefImg from "../../assets/imgs/chef2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { XIcon } from "lucide-react";
import { postMessage } from "../../reducers/messagesSlice";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Common/Message";

const InpField = ({
  value,
  onChange,
  onBlur,
  label,
  isError,
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="flex flex-1 flex-col">
      <label
        htmlFor={name}
        style={
          isError && {
            color: "red",
          }
        }
        className="text-sm font-medium text-black/60 uppercase mb-2"
      >
        {label}
      </label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          className="h-full bg-transparent bg-none text-gray-400 border border-black/10 rounded-2xl p-5 py-4 sm:text-sm font-medium text-black/40 focus:text-black"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          style={
            isError && {
              borderColor: "red",
            }
          }
        >
          <option value={placeholder} label={placeholder} />
          <option value="AR" label="Arabic" />
          <option value="EN" label="English" />
          <option value="FR" label="French" />
          <option value="GR" label="German" />
        </select>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={false}
          style={
            isError && {
              borderColor: "red",
            }
          }
          className="border border-black/10 rounded-2xl p-5 py-4"
        />
      )}
    </div>
  );
};

const ErrorMsg = ({ touched, error }) => {
  if (!touched || !error) return <div className="py-3" />;
  return (
    <div className="flex items-center gap-1 pt-2 pl-6 mb-5 text-red-400">
      <XIcon size={18} />
      {error}
    </div>
  );
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  subject: Yup.string().required("Please enter the subject"),
  enqType: Yup.string()
    .required("Please enter the enquiry type")
    .oneOf(["AR", "EN", "FR", "GR"], "Please enter a valid selection"),
  message: Yup.string()
    .min(20, "The message cannot be less than 20 letters")
    .max(300, "The message cannot be more than 300 letters")
    .required("Please enter the message"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  enqType: "",
  message: "",
};

const inpGroupStyling = "flex flex-col md:flex-row gap-[2rem]";
const errorGroupStyling = "hidden md:flex gap-[2rem]";

function ContactSection() {
  const { response, status, error } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(postMessage(values));
      resetForm();
    },
  });

  return (
    <div>
      {status == "SUCCESS" && (
        <Message
          title={"Thanks, " + response.name}
          body="Your message has been sent successfully"
        />
      )}
      {status == "FAILED" && (
        <Message
          title={"Oops"}
          body="Something wrong has been happened!! Try again later."
          isError={true}
        />
      )}
      <form
        autoComplete={false}
        onSubmit={formik.handleSubmit}
        className="relative container px-4 mx-auto py-[5rem] "
      >
        {/* TOP */}
        <div>
          <motion.h1
            {...frAnimations.fadeUp({})}
            className="
            text-4xl text-center font-semibold
            sm:text-5xl
            "
          >
            Contact Us
          </motion.h1>
        </div>
        {/* MIDDLE */}
        <div className="flex gap-[2.5rem] mt-[4rem]">
          <motion.div
            {...frAnimations.fadeRight({ duration: 0.5, delay: 0.3 })}
            className="
            hidden justify-center items-end bg-gradient-to-t from-babyBlue to-transparent w-[45rem] rounded-[1.8rem]
            lg:flex
            "
          >
            <img
              src={chefImg}
              alt="Chef"
              className="object-cover h-full w-fill"
            />
          </motion.div>
          <motion.div
            {...frAnimations.fadeLeft({ duration: 0.5, delay: 0.3 })}
            className="w-full"
          >
            <div className={inpGroupStyling}>
              <InpField
                label="Name"
                name="name"
                isError={formik.touched.name && formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name..."
              />

              <InpField
                label="Email"
                name="email"
                type="text"
                isError={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email..."
              />
            </div>

            {/* ERRORS ROW */}
            <div className={errorGroupStyling}>
              <div className="w-1/2">
                <ErrorMsg
                  touched={formik.touched.name}
                  error={formik.errors.name}
                />
              </div>
              <div className="w-1/2">
                <ErrorMsg
                  touched={formik.touched.email}
                  error={formik.errors.email}
                />
              </div>
            </div>

            <div className={inpGroupStyling}>
              <InpField
                label="Subject"
                name="subject"
                isError={formik.touched.subject && formik.errors.subject}
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your subject..."
              />
              <InpField
                label="Enquiry type"
                name="enqType"
                type="select"
                isError={formik.touched.enqType && formik.errors.enqType}
                value={formik.values.enqType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your enquiry..."
              />
            </div>

            {/* ERRORS ROW */}
            <div className={errorGroupStyling}>
              <div className="w-1/2">
                <ErrorMsg
                  touched={formik.touched.subject}
                  error={formik.errors.subject}
                />
              </div>
              <div className="w-1/2">
                <ErrorMsg
                  touched={formik.touched.enqType}
                  error={formik.errors.enqType}
                />
              </div>
            </div>

            <div className>
              <label
                htmlFor="message"
                style={
                  formik.touched.message &&
                  formik.errors.message && {
                    color: "red",
                  }
                }
                className="text-sm font-medium block text-black/60 uppercase mb-2"
              >
                Message
              </label>

              <textarea
                name="message"
                id="message"
                placeholder="Enter your messages..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={
                  formik.touched.message &&
                  formik.errors.message && {
                    borderColor: "red",
                  }
                }
                className="border border-black/10 rounded-2xl p-5 resize-none w-full h-[250px] "
              ></textarea>
            </div>
            {/* ERRORS ROW */}
            <div className="w-full">
              <ErrorMsg
                touched={formik.touched.message}
                error={formik.errors.message}
              />
            </div>
          </motion.div>
        </div>
        <motion.button
          {...frAnimations.fadeUp({ duration: 0.3 })}
          {...frAnimations.btnRotate({})}
          className="bg-black flex items-center justify-center gap-3 text-white py-[1.2rem] px-[4rem] text-sm font-medium mx-auto mt-[3rem] rounded-[0.9rem] shadow-lg"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}

export default ContactSection;
