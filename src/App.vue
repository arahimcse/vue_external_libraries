<script  setup>
import { useCounterStore } from './store/counterStore'
const countStore = useCounterStore()
</script>

<template>
  <h3>Double Count: {{ countStore.doubleCount }}</h3>
  <button @click="countStore.increment()">count {{ countStore.count }}</button>
  <router-view></router-view>
</template>

<style  scoped>
  
</style>
