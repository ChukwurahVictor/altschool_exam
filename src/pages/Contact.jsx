const Contact = () => {
   return (
     <>
       <div className="w-full max-w-md mt-20 m-auto">
         <h1 className="text-gray-700 text-lg font-bold mb-2">
           Contact Us
         </h1>
         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="username"
             >
               Username
             </label>
             <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username"
               type="text"
               placeholder="Username"
             />
           </div>
           <div className="mb-6">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="message"
             >
               Message
             </label>
             <textarea
               className="shadow appearance-none border rounded w-full py-10 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               id="message"
               type="text"
               placeholder="Enter your message"
             />
           </div>
           <div className="flex items-center justify-between">
             <button
               className="bg-blue-800 hover:bg-blue-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="submit"
             >
               Submit
             </button>
           </div>
         </form>
         <p className="text-center text-gray-500 text-xs">
           &copy;2022 Victor Chukwurah. All rights reserved.
         </p>
       </div>
     </>
   );
}

export default Contact;