import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (  
    <div className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-6" style={{ backgroundImage: "url('/space-bg.jpeg')" }}>
       <h1 className="text-4xl sm:text-8xl font-vcr-osd-mono font-bold text-white mb-6 sm:mb-8">
        contact
      </h1>
      
      <form 
        action="https://formspree.io/f/myzkjdyl" 
        method="POST"
        className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        {/* name */}
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* subject */}
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">subject</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">message</label>
          <textarea 
            name="message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* submit */}
        <button 
          type="submit" 
          className="w-full py-3 bg-babyBlue hover:bg-gray-500 text-white font-bold rounded-md shadow-md transition duration-300"
        >
          talk 2 ya boi !!
        </button>
      </form>
    </div>
  );
}

export default Contact;
