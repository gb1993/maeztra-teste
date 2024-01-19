const FooterTop = () => {
  return (
    <section className="w-full p-4 md:p-10 shadow-md border-t bg-color-3-500">
      <form className="w-full flex items-center flex-col md:flex-row justify-center gap-2 md:gap-14">
        <label htmlFor="nl" className="font-bold text-2xl">
          Recebe Nossa Newsletter
        </label>
        <div className="flex items-center">
          <input
            type="email"
            name="nl"
            id="nl"
            className="pl-6 text-xs h-10 w-[200px] md:w-[468px] outline-none border-color-2-500 border rounded"
            placeholder="Digite seu email"
          />
          <button
            type="submit"
            className="bg-color-1-500 px-11 py-2 rounded text-white -ml-4"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default FooterTop;
