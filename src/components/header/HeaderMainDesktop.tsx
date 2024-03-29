import maeztraLogo from "../../assets/images/logo-maeztra-novo.png";

const HeaderMainDesktop = () => {
  return (
    <div className="flex items-center justify-between max-w-3xl m-auto">
      <figure>
        <a href="/">
          <img src={maeztraLogo} alt="logo maeztra" />
        </a>
      </figure>
      <form className="w-2/5 flex">
        <input
          type="search"
          name="search-product"
          id="search-product"
          placeholder="O Que Você Busca?"
          className="bg-color-4-500 pl-6 text-xs h-10 w-full max-w-[700px] rounded-lg outline-none"
        />
        <button
          type="submit"
          className="bg-color-1-500 px-11 py-2 rounded-lg text-white -ml-4"
        >
          Buscar
        </button>
      </form>
      <div className="flex items-center justify-center gap-10">
        <button className="flex items-center justify-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              d="M9.8 9.5C8.90312 9.5 8.47188 10 7 10C5.52812 10 5.1 9.5 4.2 9.5C1.88125 9.5 0 11.3813 0 13.7V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.7C14 11.3813 12.1187 9.5 9.8 9.5ZM12.5 14.5H1.5V13.7C1.5 12.2125 2.7125 11 4.2 11C4.65625 11 5.39687 11.5 7 11.5C8.61563 11.5 9.34062 11 9.8 11C11.2875 11 12.5 12.2125 12.5 13.7V14.5ZM7 9C9.48438 9 11.5 6.98438 11.5 4.5C11.5 2.01562 9.48438 0 7 0C4.51562 0 2.5 2.01562 2.5 4.5C2.5 6.98438 4.51562 9 7 9ZM7 1.5C8.65312 1.5 10 2.84687 10 4.5C10 6.15312 8.65312 7.5 7 7.5C5.34688 7.5 4 6.15312 4 4.5C4 2.84687 5.34688 1.5 7 1.5Z"
              fill="#353535"
            />
          </svg>{" "}
          Minha Conta
        </button>
        <button className="flex items-center justify-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
          >
            <path
              d="M16.367 1.15404C14.3033 -0.581202 11.1148 -0.320559 9.14037 1.68961C7.16591 -0.320559 3.97749 -0.584772 1.91377 1.15404C-0.771215 3.41414 -0.378464 7.09885 1.5353 9.05189L7.79788 15.4323C8.15493 15.7965 8.63337 16 9.14037 16C9.65095 16 10.1258 15.8001 10.4829 15.4359L16.7454 9.05546C18.6556 7.10242 19.0555 3.41771 16.367 1.15404ZM15.5244 7.84865L9.26177 14.2291C9.17608 14.3147 9.10467 14.3147 9.01898 14.2291L2.7564 7.84865C1.45318 6.52044 1.18897 4.00683 3.01704 2.46797C4.40595 1.30043 6.54822 1.47538 7.89071 2.84287L9.14037 4.11752L10.39 2.84287C11.7397 1.46824 13.8819 1.30043 15.2637 2.4644C17.0882 4.00326 16.8169 6.53115 15.5244 7.84865Z"
              fill="#353535"
            />
          </svg>{" "}
          Lista de desejos
        </button>
        <button className="flex items-center justify-center gap-2 border-color-1-500 border rounded-lg px-4 py-3 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
          >
            <path
              d="M14.3755 15.4741L13.1128 3.89368C13.0864 3.65125 12.8742 3.46716 12.6211 3.46716H10.248V2.94604C10.248 1.32166 8.8757 0 7.18914 0C5.50244 0 4.1302 1.32166 4.1302 2.94604V3.46716H1.75706C1.50395 3.46716 1.29179 3.65125 1.2653 3.89368L0.00268441 15.4741C-0.011891 15.6083 0.0333562 15.7422 0.127019 15.8425C0.220809 15.9427 0.354396 16 0.494447 16H13.8836C14.0237 16 14.1573 15.9427 14.251 15.8425C14.3449 15.7422 14.39 15.6083 14.3755 15.4741ZM5.11904 2.94604C5.11904 1.8468 6.04769 0.952393 7.18914 0.952393C8.33046 0.952393 9.2591 1.8468 9.2591 2.94604V3.46716H5.11904V2.94604ZM1.0435 15.0476L2.20231 4.41956H4.1302V5.46899C4.1302 5.73193 4.35161 5.94519 4.62462 5.94519C4.89762 5.94519 5.11904 5.73193 5.11904 5.46899V4.41956H9.2591V5.46899C9.2591 5.73193 9.48052 5.94519 9.75353 5.94519C10.0265 5.94519 10.248 5.73193 10.248 5.46899V4.41956H12.1758L13.3346 15.0476H1.0435Z"
              fill="#353535"
            />
          </svg>{" "}
          Minha Sacola
        </button>
      </div>
    </div>
  );
};

export default HeaderMainDesktop;
