import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { motion } from "framer-motion";
import contactStyle from "../../styles/Contact.module.css";

const Contact = () => {
  const [emailV, setEmailV] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resultmessage, setResultMessage] = useState(null);

  const submitForm = async () => {
    setSubmitting(true);

    let details = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    try {
      await fetch("http://mail.alizoie.com", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(details),
        headers: new Headers({
          "content-type": "application/json",
          Accept: "application/json",
        }),
      });

      setSubmitting(false);

      setResultMessage({
        class: contactStyle.successResult,
        text: "Thanks, We'll be in touch shortly.",
      });
    } catch (err) {
      console.log(err);

      setResultMessage({
        class: contactStyle.failResult,
        text: "Sorry, there was a problem. Please try again later.",
      });
    }
    resetForm();
    setSubmitting(false);
  };
  const { handleChange, handleSubmit, values, errors, resetForm } = useForm(
    submitForm,
    validate
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={contactStyle.myworksbackground}>
        <div className={contactStyle.form_container}>
          <h1>Contact Us</h1>
          {resultmessage && (
            <div className={resultmessage.class}>{resultmessage.text}</div>
          )}
          <form
            id="contact-form"
            action="submit"
            className={contactStyle.contact_form}
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className={contactStyle.inputs}>
              <label htmlFor="name" className={contactStyle.input_label}>
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                className={contactStyle.input_text}
                name="name"
                id="name"
                value={values.name}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className={contactStyle.inputs}>
              <label htmlFor="email" className={contactStyle.input_label}>
                Email
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                className={contactStyle.input_text}
                id="email"
                value={values.email}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className={contactStyle.inputs}>
              <label htmlFor="message" className={contactStyle.input_label}>
                {!emailV ? <h1> Please Enter a Valid Email </h1> : ""} Message
              </label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                className={contactStyle.massege_area}
                value={values.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p>{errors.message}</p>}
            </div>

            <button
              disabled={submitting}
              className={contactStyle.submit_button}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <div className={contactStyle.spacer}></div>
      </div>
    </motion.div>
  );
};

export default Contact;
