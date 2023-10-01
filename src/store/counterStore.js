import { defineStore } from "pinia";

export const useCounterStore = defineStore('count',{
    state: () => ({
        count: 16
    }),
    getters:{
        doubleCount: (state) => state.count*2
    },
    actions:{
        increment()
        {
            this.count++
        }
    }
})