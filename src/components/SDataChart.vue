<template>
    <v-container>
        <v-row>
            <v-col v-for="(chart, i) in charts" :key="i">
                <s-chart :options="chart.options" :series="chart.series" :width="chart.width"></s-chart>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>

import SChart from "./SChart.vue";
// import funcs from "../utils/funcs";
export default {
    name: "SDataChhart",
    props: ["data", "headers", "chartType", "width", "height", "reverseData", "removeLast"],
    components: {
        SChart
    },
    data: () => ({
        pieChartType: 'pie',

    }),




    computed: {

        // chartWidth() { return this.width || (this.chartType === this.pieChartType ? 820 : 1200) },
        // chartHeight() { return this.height || 500 },

        // chartLabels() {
        //     let chartLabels = this.headers.filter(h => h.chartLabel === true);
        //     let labels = [];
        //     if (chartLabels.length > 0) {
        //         let lh = chartLabels[0];
        //         let value = lh.value;
        //         labels = this.data
        //             .map(item => item[value]);
        //     }

        //     return labels;
        // },

        // chartHeader() {
        //     let chartLabels = this.headers.filter(h => h.chartLabel === true);
        //     if (chartLabels.length > 0) {
        //         return chartLabels[0];
        //     }

        //     return {};
        // },



        // charts() {
        //     let labels = this.headers.filter(h => h.chartValue === true);
        //     let charts = [];
        //     labels.forEach(label => {
        //         charts.push(this.createChart(label));
        //     });
        //     return charts;
        // },


    },

    watch: {

        // data() {

        //     if (this.removeLast && this.data.length > 1) {
        //         this.data.pop();
        //     }

        //     if (this.reverseData)
        //         this.data.reverse();
        // },

    },

    methods: {



        // getChartData(header) {
        //     if (header.chartValue) {
        //         return this.data.map(f => f[header.value])


        //     }
        // },

    //     createChart(header) {

    //         if (this.chartType === this.pieChartType) {
    //             let options = {
    //                 chart: {
    //                     type: this.chartType,
    //                     title: header.text,
    //                     height: this.chartHeight,
    //                 },

    //                 chartOptions: {
    //                     labels: this.chartLabels
    //                 },
    //                 pie: {
    //                     dataLabels: {
    //                         offset: -5
    //                     }
    //                 },

    //                 dataLabels: {
    //                     formatter(val, opts) {
    //                         const name = opts.w.globals.labels[opts.seriesIndex]
    //                         return [name, val.toFixed(1) + '%']
    //                     }
    //                 },

    //                 legend: {
    //                     show: false
    //                 },




    //             };



    //             return {
    //                 width: this.chartWidth,
    //                 options: options,
    //                 series: this.getChartData(header)
    //             }

    //         }
    //         else {

    //             let opts = {
    //                 chart: {
    //                     id: `cht${header.value}`,
    //                     type: this.chartType,
    //                     height: this.chartHeight,
    //                 },
    //                 title: {
    //                     text: header.text
    //                 },
    //                 xaxis: {
    //                     categories: this.chartLabels,
    //                     labels: {
    //                     },
    //                 },

    //                 yaxis: {
    //                     labels: {

    //                         formatter: function (value) {
    //                             return funcs.formatData(header, value);
    //                         }
    //                     },
    //                 },



    //             }


    //             let serie = {
    //                 name: header.text,
    //                 data: this.getChartData(header)
    //             }
    //             return {
    //                 width: this.chartWidth,
    //                 options: opts,
    //                 series: [serie]
    //             }




    //         }
    //     }


    },
};
</script>
  
  
  