import configDB from "../../Config/ThemeConfig";
import { Danger } from "../../Constant";

const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const secondary =
  localStorage.getItem("secondary_color") ||
  configDB.data.color.secondary_color;

export const apexDataTransaction = {
  series: [
    {
      name: "Average Daily Sent",
      data: [60, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    },
    {
      name: "Per Month Revenue",
      data: [99, 76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 50],
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
        columnWidth: "100%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: [primary, secondary],
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
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
        text: "$ Dollars",
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " Dollars";
        },
      },
    },
  },
};

// -----
export const areaSpalineTransaction = {
  series: [
    {
      name: "Amount Sent",
      data: [31, 40, 200, 28, 51, 42, 109, 100, 31, 40, 200, 55],
    },
    {
      name: "Amount Recieved",
      data: [11, 32, 45, 150, 32, 34, 52, 41, 55, 100, 62, 34],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: [primary, secondary],
    stroke: {
      curve: "smooth",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-01-10",
        "2023-02-20",
        "2023-03-10",
        "2023-04-20",
        "2023-05-10",
        "2023-06-20",
        "2023-07-15",
        "2023-08-20",
        "2023-09-10",
        "2023-10-21",
        "2023-11-10",
        "2023-12-20",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
