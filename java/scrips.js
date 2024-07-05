//clientes por pais
fetch("/distribucionclientesporpais.json")
  .then((response) => response.json())
  .then((data) => {
    const region = Object.keys(data.Region);
    const numeroClientes = Object.values(data["Numero de clientes"]);

    const configVentas = {
      type: "bar",
      data: {
        labels: region,
        datasets: [
          {
            label: "region",
            data: numeroClientes,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
          },
        },
      },
    };

    const ventastotales = new Chart(
      document.getElementById("ventastotales"),
      configVentas
    );
  })
  .catch((error) => console.error("Error al cargar datos:", error));

const ctxf = document.getElementById("featuresChart");

new Chart(ctxf, {
  type: "polarArea",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "nwe",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//valor de ingresos
fetch("/ingresosppais.json")
  .then((response) => response.json())
  .then((data) => {
    const Pais = Object.keys(data.Pais);
    const montoTotal = Object.values(data["Monto Total"]);

    const configingresos = {
      type: "radar",
      data: {
        labels: Pais,
        datasets: [
          {
            label: "Número de Clientes",
            data: montoTotal,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const ingresospais = new Chart(
      document.getElementById("ingresospais"),
      configingresos
    );
  })
  .catch((error) => console.error("Error al cargar datos:", error));

//
const data = {
  "Recencia Promedio": {
    "Clientes Activos y Leales": 39.62,
    "Clientes VIP": 3.0,
    "Clientes en Riesgo": 244.57,
  },
  "Recencia Conteo": {
    "Clientes Activos y Leales": 3217,
    "Clientes VIP": 13,
    "Clientes en Riesgo": 1037,
  },
  "Frecuencia Promedio": {
    "Clientes Activos y Leales": 102.6,
    "Clientes VIP": 2536.62,
    "Clientes en Riesgo": 28.56,
  },
  "Frecuencia Conteo": {
    "Clientes Activos y Leales": 3217,
    "Clientes VIP": 13,
    "Clientes en Riesgo": 1037,
  },
  "Monetario Promedio": {
    "Clientes Activos y Leales": 2036.79,
    "Clientes VIP": 125981.34,
    "Clientes en Riesgo": 577.76,
  },
  "Monetario Conteo": {
    "Clientes Activos y Leales": 3217,
    "Clientes VIP": 13,
    "Clientes en Riesgo": 1037,
  },
};

// Configuración de los gráficos
const config = {
  type: "bar",
  data: {
    labels: Object.keys(data["Recencia Promedio"]),
    datasets: [
      {
        label: "Clientes Activos y Leales",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: Object.values(data["Recencia Promedio"]),
      },
      {
        label: "Clientes VIP",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: Object.values(data["Frecuencia Promedio"]),
      },
      {
        label: "Clientes en Riesgo",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
        data: Object.values(data["Monetario Promedio"]),
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Crear los gráficos
window.onload = function () {
  const ctxRecenciaPromedio = document
    .getElementById("recenciaPromedio")
    .getContext("2d");
  new Chart(ctxRecenciaPromedio, config);

  const ctxRecenciaConteo = document
    .getElementById("recenciaConteo")
    .getContext("2d");
  config.data.datasets.forEach((dataset) => {
    dataset.data = Object.values(data["Recencia Conteo"]);
  });
  new Chart(ctxRecenciaConteo, config);

  const ctxFrecuenciaPromedio = document
    .getElementById("frecuenciaPromedio")
    .getContext("2d");
  config.data.datasets.forEach((dataset) => {
    dataset.data = Object.values(data["Frecuencia Promedio"]);
  });
  new Chart(ctxFrecuenciaPromedio, config);

  const ctxFrecuenciaConteo = document
    .getElementById("frecuenciaConteo")
    .getContext("2d");
  config.data.datasets.forEach((dataset) => {
    dataset.data = Object.values(data["Frecuencia Conteo"]);
  });
  new Chart(ctxFrecuenciaConteo, config);

  const ctxMonetarioPromedio = document
    .getElementById("monetarioPromedio")
    .getContext("2d");
  config.data.datasets.forEach((dataset) => {
    dataset.data = Object.values(data["Monetario Promedio"]);
  });
  new Chart(ctxMonetarioPromedio, config);

  const ctxMonetarioConteo = document
    .getElementById("monetarioConteo")
    .getContext("2d");
  config.data.datasets.forEach((dataset) => {
    dataset.data = Object.values(data["Monetario Conteo"]);
  });
  new Chart(ctxMonetarioConteo, config);
};

//

const datad = {
  0: {
    1575158400000: 644.55,
    1577836800000: 701.12,
    1580515200000: 415.0,
    1583020800000: 441.64,
    1585699200000: 406.03,
    1588291200000: 435.7,
    1590969600000: 559.57,
    1593561600000: 392.87,
    1596240000000: 471.01,
    1598918400000: 517.51,
    1601510400000: 484.43,
    1604188800000: 417.07,
    1606780800000: 658.67,
  },
  1: {
    1575158400000: 956.11,
    1577836800000: 833.0,
    1580515200000: 491.15,
    1583020800000: 508.1,
    1585699200000: 504.03,
    1588291200000: 501.34,
    1590969600000: 620.47,
    1593561600000: 455.59,
    1596240000000: 594.88,
    1598918400000: 613.5,
    1601510400000: 595.3,
    1604188800000: 464.06,
    1606780800000: null,
  },
  2: {
    1575158400000: 1219.83,
    1577836800000: 984.45,
    1580515200000: 598.95,
    1583020800000: 638.54,
    1585699200000: 587.45,
    1588291200000: 572.31,
    1590969600000: 678.75,
    1593561600000: 537.97,
    1596240000000: 804.69,
    1598918400000: 736.9,
    1601510400000: 630.4,
    1604188800000: null,
    1606780800000: null,
  },
  3: {
    1575158400000: 1561.49,
    1577836800000: 1155.98,
    1580515200000: 725.68,
    1583020800000: 733.09,
    1585699200000: 668.4,
    1588291200000: 639.78,
    1590969600000: 806.43,
    1593561600000: 630.48,
    1596240000000: 1067.94,
    1598918400000: 778.04,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  4: {
    1575158400000: 1792.03,
    1577836800000: 1350.2,
    1580515200000: 831.18,
    1583020800000: 846.79,
    1585699200000: 755.91,
    1588291200000: 737.51,
    1590969600000: 916.64,
    1593561600000: 732.38,
    1596240000000: 1158.38,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  5: {
    1575158400000: 2171.82,
    1577836800000: 1552.75,
    1580515200000: 921.06,
    1583020800000: 935.2,
    1585699200000: 856.25,
    1588291200000: 853.26,
    1590969600000: 1092.39,
    1593561600000: 764.51,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  6: {
    1575158400000: 2526.25,
    1577836800000: 1720.79,
    1580515200000: 1051.78,
    1583020800000: 1078.62,
    1585699200000: 951.27,
    1588291200000: 970.05,
    1590969600000: 1126.03,
    1593561600000: null,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  7: {
    1575158400000: 2876.88,
    1577836800000: 1894.66,
    1580515200000: 1215.71,
    1583020800000: 1234.65,
    1585699200000: 1064.64,
    1588291200000: 1600.98,
    1590969600000: null,
    1593561600000: null,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  8: {
    1575158400000: 3250.89,
    1577836800000: 2067.02,
    1580515200000: 1361.08,
    1583020800000: 1391.39,
    1585699200000: 1085.74,
    1588291200000: null,
    1590969600000: null,
    1593561600000: null,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  9: {
    1575158400000: 3783.99,
    1577836800000: 2334.09,
    1580515200000: 1531.31,
    1583020800000: 1419.62,
    1585699200000: null,
    1588291200000: null,
    1590969600000: null,
    1593561600000: null,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  10: {
    1575158400000: 4298.65,
    1577836800000: 2629.66,
    1580515200000: 1559.21,
    1583020800000: null,
    1585699200000: null,
    1588291200000: null,
    1590969600000: null,
    1593561600000: null,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  11: {
    1575158400000: 4877.57,
    1577836800000: 2692.94,
    1580515200000: null,
    1583020800000: null,
    1585699200000: null,
    1588291200000: null,
    1590969600000: null,
    1593561600000: null,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
  12: {
    1575158400000: 5087.02,
    1577836800000: null,
    1580515200000: null,
    1583020800000: null,
    1585699200000: null,
    1588291200000: null,
    1590969600000: null,
    1593561600000: null,
    1596240000000: null,
    1598918400000: null,
    1601510400000: null,
    1604188800000: null,
    1606780800000: null,
  },
};

// Preparar datos para Chart.js
const labels = Object.keys(datad["0"]);
const datasets = [];

for (let key in datad) {
  datasets.push({
    label: `Dataset ${key}`,
    data: Object.values(datad[key]),
    fill: false,
    borderColor: getRandomColor(),
    tension: 0.4,
  });
}

// Configuración de Chart.js
const configh = {
  type: "line",
  data: {
    labels: labels.map((timestamp) =>
      new Date(parseInt(timestamp)).toLocaleDateString()
    ),
    datasets: datasets,
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Fecha",
        },
      },
      y: {
        title: {
          display: true,
          text: "Valor",
        },
      },
    },
  },
};

// Generar gráfico
window.onload = function () {
  const ctxheatmap = document.getElementById("heatmap").getContext("2d");
  new Chart(ctxheatmap, configh);
};

// Función para generar colores aleatorios
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const datat = {
  Mes: {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 9,
    9: 10,
    10: 11,
    11: 12,
  },
  "Monto Total de Ventas": {
    0: 568101.3100000001,
    1: 446084.92,
    2: 594081.76,
    3: 468374.331,
    4: 677355.15,
    5: 660046.05,
    6: 598962.901,
    7: 644051.04,
    8: 950690.202,
    9: 1035642.45,
    10: 1156205.6100000001,
    11: 1087613.1699999999,
  },
};

// Convertir los datos en arreglos utilizables por Chart.js
const meses = Object.values(datat["Mes"]);
const ventas = Object.values(datat["Monto Total de Ventas"]);

const configf = {
  type: "line",
  data: {
    labels: meses,
    datasets: [
      {
        label: "Monto Total de Ventas",
        data: ventas,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)", // Color de la línea
        tension: 0.1, // Curvatura de la línea (0 = líneas rectas)
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Mes",
        },
      },
      y: {
        title: {
          display: true,
          text: "Monto Total de Ventas ($)",
        },
      },
    },
  },
};

// Crear el gráfico
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("graficoVentas").getContext("2d");
  new Chart(ctx, configf);
});
