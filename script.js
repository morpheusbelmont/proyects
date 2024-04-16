document.addEventListener("DOMContentLoaded", function() {
    // Crear el primer gráfico (porcentaje de hablantes de español por país)
    var ctx1 = document.getElementById("chart1").getContext("2d");
    var chart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: data.countries,
            datasets: [{
                label: "% de Hablantes de Español",
                data: data.spanishSpeakers,
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "% de Hablantes de Español"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Países"
                    }
                }
            }
        }
    });

    // Crear el segundo gráfico (relación entre la población total y el número de hablantes de español)
    var ctx2 = document.getElementById("chart2").getContext("2d");
    var chart2 = new Chart(ctx2, {
        type: "scatter",
        data: {
            labels: data.countries,
            datasets: [{
                label: "Relación Población vs Hablantes de Español",
                data: data.countries.map((country, index) => ({
                    x: data.population[index],
                    y: data.spanishSpeakers[index]
                })),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                pointRadius: 5
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "% de Hablantes de Español"
                    }
                },
                x: {
                    type: "linear",
                    position: "bottom",
                    title: {
                        display: true,
                        text: "Población Total"
                    }
                }
            }
        }
    });
});
