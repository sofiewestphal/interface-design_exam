var modal = {
  el: {
    modalContainer: null,
    btnCloseModal: null
  },
  open: function() {
    modal.el.modalContainer.classList.add("active");
  },
  close: function() {
    modal.el.modalContainer.classList.remove("active");
  },
  init: function() {
    try {
      modal.el.modalContainer = document.getElementById("modal-container");
      modal.el.btnCloseModal = document.getElementsByClassName("btnCloseModal")[0];
      modal.el.btnCloseModal.addEventListener("click", modal.close)
    } catch (err) {
      console.log("Error in 'modal.js'. Could not find modal on current page.")
    }
  }
}
window.addEventListener("DOMContentLoaded", modal.init)