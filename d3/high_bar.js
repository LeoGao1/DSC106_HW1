
Highcharts.chart("bar", {
  chart: {
    type: "column"
  },
  data: {
    csvURL:
      ""

  },
  title: {
    text: "UC San Diego Admissions"
  },
  xAxis: {
    title: {
      text: "Year"
    },
    step: 1,
    visible: true
  },
  yAxis: {
    title: {
      text: "Count in Thousands"
    }
  },
  plotOptions: {
    enableMouseTracking: false
  }
});
