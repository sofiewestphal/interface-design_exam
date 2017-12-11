(function () {
  document.addEventListener("DOMContentLoaded", init)
  function init() {
    
    /**
     * Attendants chart
     * 
     */
    var chartNewAttendantsContext = document.getElementById('chartNewAttendants').getContext('2d');
    var chartNewAttendants = new Chart(chartNewAttendantsContext, {
      type: 'line',
      data: {
        labels: ["11/8-17", "12/8-17", "13/8-17", "14/8-17", "15/8-17", "16/8-17", "17/8-17"],
        datasets: [{
          label: "Event attendants",
          borderColor: 'rgb(11, 106, 214)',
          backgroundColor: 'rgba(11, 106, 214,.1)',
          data: [12, 18, 22, 22, 23, 30, 53],
        }]
      },
      options: {}
    });

    /**
     * User routes chart
     * 
     */
    var chartEventRoutesContext = document.getElementById('chartEventRoutes').getContext('2d');
    var chartEventRoutes = new Chart(chartEventRoutesContext, {
      type: 'bar',
      data: {
        labels: ["On site", "Newsletter", "Facebook", "Google", "LinkedIn", "Other"],
        datasets: [{
          label: "User routecs to event",
          backgroundColor: 'rgb(11, 106, 214)',
          data: [30, 24, 21, 12, 8, 5],
        }]
      },
    });
  }
})();