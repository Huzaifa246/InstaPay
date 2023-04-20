import configDB from "../../Config/ThemeConfig";

const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const secondary =
  localStorage.getItem("secondary_color") ||
  configDB.data.color.secondary_color;

export const apexDataTransaction = {
  series: [
    {
      name: "Average Daily Sent",
      data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    },
    {
      name: "Per Month Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 50],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [primary, secondary],
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
};

export const areaSpalineTransaction = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [primary, secondary],
    stroke: {
      curve: "smooth",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-09-19T00:00:00.000Z",
        "2023-09-19T01:30:00.000Z",
        "2023-09-19T02:30:00.000Z",
        "2023-09-19T03:30:00.000Z",
        "2023-09-19T04:30:00.000Z",
        "2023-09-19T05:30:00.000Z",
        "2023-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

// Apex Basic Area chart

const series = {
  monthDataSeries1: {
    prices: [
      8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
      8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25,
      8600.65, 8881.1, 9340.85,
    ],
    dates: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017",
    ],
  },
};
