import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.count * 2000000,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })