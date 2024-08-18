import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import measureGroupNav from "./MeasureGroupNav";
   export const defineMeasureGroupStore = defineStore("measureGroup", {
 
state: () => ({
    mini: [],
    miniLoading: false,
  }),
actions: {
getMini() {
      if (this.mini.length > 0) {
        return;
      }
      this.miniLoading = true;
      httpMethods
        .get(`${measureGroupNav.menu.path}/mini`)
        .then((response) => {
          this.mini = response.data;
          this.miniLoading = false;
        })
        .catch((e) => {
          this.mini = [];
          console.log(e);
          this.miniLoading = false;
        });
    },

}});

