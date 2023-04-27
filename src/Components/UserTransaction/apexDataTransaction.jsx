export const apexDataTransaction = {
  series: [
    {
      name: "Transaction In",
      data: [30, 40, 50, 60, 30, 80, 90, 100, 110, 120, 130, 140],
    },
    {
      name: "Transaction Out",
      data: [99, 76, 85, 101, 48, 87, 55, 91, 114, 94, 100, 50],
    },
    {
      name: "Total Transaction",
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
        // text: "$ Dollars",
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
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
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "8px",
      fontFamily: "Inter",
      offsetY: -10,
      markers: {
        width: 8,
        height: 8,
        offsetY: 0,
        offsetX: 0,
        radius: 5,
      },
      itemMargin: {
        horizontal: 3,
        vertical: 0,
      },
      labels: {
        useSeriesColors: false,
      },
    },
    title: {
      text: "Number of Transactions",
      align: "left",
      offsetY: 9,
      style: {
        fontSize: "15px",
        fontWeight: 900,
        color: "#263238",
        margin: "0",
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
          show: false,
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
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "8px",
      fontFamily: "Inter",
      offsetY: -10,
      markers: {
        width: 8,
        height: 8,
        offsetY: 0,
        offsetX: 0,
        radius: 5,
      },
      itemMargin: {
        horizontal: 3,
        vertical: 0,
      },
      labels: {
        useSeriesColors: false,
      },
    },
    title: {
      text: "Volume of Transactions",
      align: "left",
      offsetY: 9,
      style: {
        fontSize: "15px",
        fontWeight: 900,
        color: "#263238",
        margin: "0",
      },
    },
  },
};
