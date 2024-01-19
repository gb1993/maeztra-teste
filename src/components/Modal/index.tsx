import React, { useState, useEffect, MouseEvent } from "react";
import { ModalNLIcon, SendIcon } from "../../assets/icons";
import modalBanner from "../../assets/images/modal-banner.png";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent<HTMLDialogElement>): void => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = isOpen ? "hidden" : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      className="w-full h-screen flex z-20 bg-black bg-opacity-70 p-8"
      onClick={handleClickOutside}
    >
      <div className="relative flex items-center justify-center max-w-[848px] w-full m-auto bg-white">
        <button
          className="absolute -top-5 right-0 text-white text-xs uppercase"
          onClick={handleClose}
        >
          fechar
        </button>
        <div className="w-full md:block hidden">
          <img src={modalBanner} alt="banner modal" className="w-full" />
        </div>
        <div className="w-full text-center px-5 pt-10 pb-6 md:p-[52px]">
          <div className="mb-6 mx-auto">
            <div className="flex justify-center mb-3">
              <ModalNLIcon />
            </div>
            <p className="mb-3 text-xs text-[#464B54]">BEM VINDO À MAEZTRA</p>
            <p className="text-xl text-[#787D83] px-4 md:px-7">
              Receba em Primeira mão{" "}
              <strong>desconto e ofertas exclusivas</strong>
            </p>
          </div>
          <form>
            <input
              type="email"
              name="nl"
              id="nl"
              className="border-[#C4C4C4] border w-full p-3 rounded-[10px] h-10 outline-none mb-3 text-xs"
              placeholder="Digite seu e-mail"
              required
            />
            <button
              type="submit"
              className="text-white bg-color-1-500 w-full h-10 flex items-center justify-center gap-2 rounded-[10px] text-xs"
            >
              ENVIAR
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
