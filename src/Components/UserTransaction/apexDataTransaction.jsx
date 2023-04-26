export const apexDataTransaction = {
  series: [
    {
      name: "Sent Amount",
      data: [30, 40, 50, 60, 30, 80, 90, 100, 110, 120, 130, 140],
    },
    {
      name: "Recieved Amount",
      data: [99, 76, 85, 101, 48, 87, 55, 91, 114, 94, 100, 50],
    },
    {
      name: "Total Amount",
      data: [120, 100, 185, 200, 98, 99, 105, 91, 114, 210, 100, 150],
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
        columnWidth: "70%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#E64067", "#5926F0", "#4828A0"],
    stroke: {
      show: false,
      width: 3,
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
      data: [31, 40, 28, 51, 42, 90, 100, 28, 51, 42, 90, 70],
    },
    {
      name: "Amount Recieved",
      data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 52, 41],
    },
    {
      name: "Total Amount",
      data: [120, 100, 185, 200, 98, 99, 105, 91, 114, 210, 100, 150],
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
    colors: ["#E64067", "#5926F0", "#4828A0"],
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
