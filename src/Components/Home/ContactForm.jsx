import { message } from "antd";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

 const ContactForm = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    const { target } = e

    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_4vlpv09",
        "template_1lqwxsv",
        "#contactForm",
        "YQTmrWbECqzQvbjAW"
      )
      .then(
        (response) => {
          console.log('Success!', response.status, response.text);
          setLoading(false);
          // setStatus(response.status);

          setFormData({
            name: "",
            email: "",
            message: "",
          });
          message.success("Message sent successfully");
        },
        (err) => {
          setLoading(false);
          // setStatus(err.status);
          message.success("Unable to send");
        }
      );
    };
  return (
    <div className=" bg-gray-800 text-gray-400 pb-[4rem]">
      <h1 className=" text-center text-yellow-500 font-extrabold text-xl tracking-widest">
        Connect with me
      </h1>
      <form
        className=" w-[20rem] mx-2 md:w-[25rem] md:mx-auto lg:w-[30rem]"
        onSubmit={sendMail}
        id="contactForm"
        ref={formRef}
      >
        <div className=" flex flex-col mb-4">
          <label htmlFor="name">full name:</label>
          <input
            onChange={handleChange}
            value={formData.name}
            type="text"
            name="name"
            id="name"
            className=" bg-gray-600 outline-none text-gray-800 p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className=" flex flex-col mb-4">
          <label htmlFor="email">email:</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            id="email"
            className=" bg-gray-600 outline-none text-gray-800 p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="message">message:</label>
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            id="message"
            cols="30"
            rows="3"
            className=" bg-gray-600 outline-none p-2 text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
        </div>

        <button className=" bg-yellow-400 text-gray-800 rounded-md px-3 py-1 mb-4  hover:tracking-widest">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;