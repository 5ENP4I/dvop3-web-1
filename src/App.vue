<script setup lang="ts">
import Cuacane from './components/Cuacane.vue'
import Dashboard from './components/Dashboard.vue'
import Map from './components/Map.vue'
</script>

<template>
  <div class="flex flex-row text-center font-jakarta">
    <div class="basis-2/12">
      <Cuacane>Cuacane</Cuacane>
      <Dashboard>Dashboard</Dashboard>
      <Map>Map</Map>
    </div>
    <div class="flex flex-col basis-7/12 bg-blue-500">
      <div class="basis-8/15">
        Dimi
      </div>
      <div class="basis-7/15 bg-red-500">
        Pavel
      </div>
    </div>
    <div class="basis-3/12 bg-blue-500 ">
      Dimi
    </div>
  </div>
</template>

<style scoped></style>
