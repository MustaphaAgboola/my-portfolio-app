import React from 'react'

const ContactForm = () => {
  return (
    <div className=' bg-gray-800'>
      <form action="">
        <div>
          <label htmlFor="">full name:</label>
          <input type="text" name="" id="" className=' bg-gray-800'/>
        </div>
        <div>
            <label htmlFor="">email:</label>
            <input type="email" name="" id="" className=' bg-gray-800'/>
        </div>
        <div>
            <label htmlFor="">message:</label>
            <textarea name="" id="" cols="30" rows="5" className=' bg-gray-800'></textarea>
        </div>
      </form>
    </div>
  );
}

export default ContactForm