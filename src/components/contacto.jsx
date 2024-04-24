const Contacto = () => {
  return (
    // <section id="contacto">
    //   <div className="container px-5 py-24 mx-auto ">
    //     <div className="flex flex-col text-center w-full mb-12">
    //       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
    //         Contactanos
    //       </h1>
    //       <p className="lg:w-2/3 mx-auto leading-relaxed">
    //         Alguna frase motivadora qu quiera poner ROMI.
    //       </p>
    //     </div>
    //     <div className="lg:w-1/2 md:w-2/3 mx-auto">
    //       <div className="flex flex-wrap -m-2">
    //         <div className="p-2 w-1/2">
    //           <div className="relative">
    //             <label for="name" className="leading-7 text-sm">
    //               Nombre
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>
    //         <div className="p-2 w-1/2">
    //           <div className="relative">
    //             <label for="email" className="leading-7 text-sm">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               name="email"
    //               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>
    //         <div className="p-2 w-1/2">
    //           <div className="relative">
    //             <label for="email" className="leading-7 text-sm">
    //               Telefono
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               name="email"
    //               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //             <label for="message" className="leading-7 text-sm">
    //               Mensaje
    //             </label>
    //             <textarea
    //               id="message"
    //               name="message"
    //               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    //             ></textarea>
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <button className="bg-gray-100 bg-opacity-50 flex mx-auto rounded border border-gray-400 focus:outline-none py-2 px-8 leading-8 transition-colors hover:bg-pink-200 duration-200 text-lg">
    //             Enviar
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300 ">
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          className="w-full h-full border-solid ml-0 mr-0 bg-white p-20 "
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Contacto;
