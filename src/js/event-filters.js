var filterCollapseExpand = {
  el: {
    btnsToggleCollapse: null,
  },
  toggleCollapseExpand: function(toggleId) {
    var elToToggle = document.querySelector('[data-collapse-id="'+toggleId+'"]')
    elToToggle.classList.toggle("expanded")
  }, 
  addEventListeners: function() {
    var self = this
    for (var i = 0; i < this.el.btnsToggleCollapse.length; i++) {
      this.el.btnsToggleCollapse[i].addEventListener("click", function() {
        var toggleId = this.getAttribute("data-collapse-toggle-id");
        self.toggleCollapseExpand(toggleId)
      })
    }
  },
  init: function() {
    this.el.btnsToggleCollapse = document.getElementsByClassName("btnToggleCollapse")
    this.addEventListeners()
  }
}
window.addEventListener("load", filterCollapseExpand.init.bind(filterCollapseExpand))