function Form() {
  return (
    <form className="p-12 sm:p-16 z-10 max-w-[600px] flex flex-col gap-4 mx-auto bg-black rounded-2xl">
      <p className="text-gray-200">Estoy interesado en...</p>
      <div className="flex flex-wrap gap-4 text-gray-400">
        <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
          Desarrollo web
        </button>
        <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
          Desarrollo aplicación
        </button>
        <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
          Diseño UX/UI
        </button>
        <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
          Branding / Multimedia
        </button>
        <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
          Otros
        </button>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        <input
          className="px-1 py-2 bg-black border-b border-gray-400 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
          placeholder="Nombre"
          type="text"
          name="name"
        />
        <input
          className="px-1 py-2 bg-black border-b border-gray-400 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
          placeholder="Email"
          type="email"
          name="email"
        />
        <textarea
          placeholder="Cuéntanos de tu proyecto"
          className="px-1 py-2 bg-black border-b border-gray-400 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
          name="propuesta"
          id=""
          rows="6"
        ></textarea>
        <button className="py-2 px-4 max-w-fit bg-gray-50 rounded-lg text-black font-bold transition-all duration-300 hover:bg-cyan-400 hover:text-white">
          Enviar mensaje
        </button>
      </div>
    </form>
  );
}

export default Form;
