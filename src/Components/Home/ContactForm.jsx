import { message } from "antd";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error', error);
    }

    message.success("Message sent successfully");
  };

  return (
    <div className=" bg-gray-800">
      <h1 className=" text-center text-yellow-500 font-extrabold text-xl tracking-widest">
        Connect with me
      </h1>
      <form
        className=" w-[22rem] mx-2 md:w-[25rem] lg:w-[30rem]"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col mb-4">
          <label htmlFor="name">full name:</label>
          <input
            type="name"
            name=""
            id="name"
            className=" bg-gray-600 outline-none text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className=" flex flex-col mb-4">
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name=""
            id="email"
            className=" bg-gray-600 outline-none text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="message">message:</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="3"
            className=" bg-gray-600 outline-none text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </div>

        <button className=" bg-yellow-400 text-gray-800 rounded-md px-3 py-1 mb-4 mx-[8rem] hover:tracking-widest">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
