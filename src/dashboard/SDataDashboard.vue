<!-- <template>
    <div>
      <s-data-table :title="title" :headers="headers" :items="data" dense
        :hide-default-footer="true"></s-data-table>

    </div>
  </template>
  
  <script>
  
  export default {
    name: 'SDataDashboard',
    props: ["title", 'data', 'headers', 'chartWidth', 'chartHeight'],
    data: () => ({
  
      chartType: 'bar',
      removeLast: true,
  
    }),

    computed:{
        width(){
            return this.chartWidth||350;
        },

        height(){
            return this.chartHeight||350;
        },

        showChart(){
            return this.data.length>1;
        }
    }
  
  };
  </script> -->

<template>
  <div>
    <s-data-table :title="title" :headers="headers" :items="data" dense :hide-default-footer="true"></s-data-table>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Define props with default values
const props = defineProps({
  title: String,
  data: {
    type: Array,
    required: true,
  },
  headers: Array,
  chartWidth: {
    type: Number,
    default: 350,
  },
  chartHeight: {
    type: Number,
    default: 350,
  },
});

// Define reactive data
const chartType = 'bar';
const removeLast = true;

// Computed property for showChart
const showChart = computed(() => props.data.length > 1);
</script>