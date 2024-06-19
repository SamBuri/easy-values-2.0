<template>
  <div>
    <p>
      <s-chart :width="width" :options="options" :series="series"></s-chart>
    </p>


    <p>
      <s-chart :width="width" :options="optionsx" :series="seriesx"></s-chart>
    </p>

    <p>
      <apexchart :width="width" :options="options1" :series="series1"></apexchart>
    </p>

    <p>
      <s-chart :width="width" :options="options1" :series="series1"></s-chart>
    </p>

    <p>
      <s-chart :width="width" :options="options1" :series="series1"></s-chart>
    </p>

    <p>
      <s-chart :width="width" :options="pieoptions" :series="series1"></s-chart>
    </p>
  </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'
import SChart from './SChart.vue';

export default {
  components: { SChart },
  data: () => ({
    width: 800,

     pieoptions: {
          series: [25, 15, 44, 55, 41, 170],
          chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        // theme: {
        //   monochrome: {
        //     enabled: true
        //   }
        // },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        title: {
          text: "Monochrome Pie"
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          }
        },
        legend: {
          show: false
        }
        },


    options: {
      chart: {
        id: 'firstChart',
        type: "line"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: 'series-1',
        data: [30, 55, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'series-2',
        data: [30, 55, 45, 50, 65, 60, 70, 98]
      }
    ],

    optionsx: {
      chart: {
        id: 'secondChart',
        type: "bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    seriesx: [
      {
        name: 'series-1',
        data: [30, 55, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'series-2',
        data: [30, 55, 45, 50, 65, 60, 70, 98]
      }
    ],

    series1: [44, 55, 41, 17, 15],


    options1: {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut'
      },

      chartOptions: {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
      },

      plotOptions: {
        pie: {
          customScale: 1.0,
          donut: {
            size: '0%'

          }
        }
      }

    }

  }),
}

</script>