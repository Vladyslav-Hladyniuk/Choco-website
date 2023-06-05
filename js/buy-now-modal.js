(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtn.forEach((btn) => {
       btn.addEventListener("click", toggleModal);
  })
  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();