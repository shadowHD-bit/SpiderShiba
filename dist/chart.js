new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#0096F2", "#4E00FF","#FF850B","#1DBEE1","#133D81","#FF0000"],
          data: [15,19,5,30,10,6],
          borderWidth: 2,
          borderColor: '#101d3f',
        }
      ]
    },
    options: {
        plugins: {
            tooltip: {
              enabled: false,
            }
            
          },
          cutout: '80%',
    }
});