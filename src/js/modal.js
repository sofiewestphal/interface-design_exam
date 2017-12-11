var modal = {
  el: {
    modalContainer: null,
    btnCloseModal: null
  },
  open: function() {
    modal.el.modalContainer.classList.remove("inactive");

    // Event-loop hack. The animation wont work if the two classes are removed and added 'simultaneously'.
    // Putting the add at the end of the event-loop fixes that therefor for the 0ms timeout
    setTimeout(function() {
      modal.el.modalContainer.classList.add("active");
    }, 0)
  },
  close: function() {
    modal.el.modalContainer.classList.remove("active");
    setTimeout(function() {
      modal.el.modalContainer.classList.add("inactive");
    }, 240)
  },
  init: function() {
    try {
      modal.el.modalContainer = document.getElementById("modal-container"); 
      modal.el.btnCloseModal = document.getElementsByClassName("btnCloseModal")[0];
      modal.el.btnCloseModal.addEventListener("click", modal.close)
    } catch (err) {
      console.log("Error in modal.js -> Could not find modal on current page.")
    }
  }
}
window.addEventListener("DOMContentLoaded", modal.init)