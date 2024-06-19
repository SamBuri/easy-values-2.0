<template>
    <div>
      <s-data-table :title="title" :headers="headers" :items="data" dense
        :hide-default-footer="true"></s-data-table>
<!--     
      <v-container v-if="showChart">
        <v-row>
  
          <v-spacer></v-spacer>
          <v-radio-group row v-model="chartType">
            <v-radio label="Bar" value="bar"></v-radio>
            <v-radio label="Pie" value="pie"></v-radio>
          </v-radio-group>
        </v-row>
        <v-row>
          <v-col>
            <s-data-chart :data="data" :headers="headers" :chart-type="chartType" :width="width" :height="height"
              :remove-last="removeLast"></s-data-chart>
          </v-col>
  
        </v-row>
      </v-container> -->
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
  </script>