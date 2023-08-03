import React from 'react'
import Contact from './Contact'

const Footer = () => {
  return (
    <>
      <div className=" bg-gray-500 flex justify-center pt-20 pb-4">
        <Contact />
      </div>
      <p className=" bg-gray-500 text-center pl-8 tracking-widest">
        &copy; 2023 TAPHA Inc. All rights reserved.
      </p>
    </>
  );
}

export default Footer