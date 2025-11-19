export default function ModalForm({
  children,
  title,
  buttonText,
  onClose,
  isOpen,
  onSubmit,
  altButtonClick,
  altButtonText,
}) {
  return (
    <div
      className={`modal fixed top-0 right-0 bottom-0 left-0 m-0 bg-stone-800/50 flex justify-center items-center p-0 z-2 invisible  ${
        isOpen && "modal__opened visible"
      }`}
    >
      <div className="modal__content bg-gray-200 relative max-w-md w-full rounded-xl box-border font-medium text-lg p-7 pb-9">
        <h2 className="modal__title mb-6 font-medium text-2xl">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close absolute top-5 right-6 bottom-5 w-5 cursor-pointer border-none bg-transparent bg-no-repeat bg-contain bg-[url('/src/assets/close-button.svg')]"
        />
        <form
          action=""
          onSubmit={onSubmit}
          className="modal__form flex flex-col m-0 p-0 w-full"
        >
          {children}
          <div className="modal__buttons flex">
            <button
              type="submit"
              className="modal__submit m-0 p-0 bg-slate-950/45! text-white border-0 w-31 h9 rounded-md cursor-pointer"
            >
              {buttonText}
            </button>
            <button
              type="button"
              className="modal__alt-button ml-3 p-0 bg-transparent text-blue-400 border-0 cursor-pointer"
              onClick={altButtonClick}
            >
              {altButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
