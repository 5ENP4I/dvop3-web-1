<script setup lang="ts">
import LeftSidebar from './components/LeftSidebar.vue'
import Properties from './components/Properties.vue'
</script>

<template>
  <div class="flex flex-row text-center font-jakarta">
    <div class="basis-2/12">
      <LeftSidebar>LeftSidebar</LeftSidebar>
    </div>
    <div class="flex flex-col basis-7/12">
      <div class="basis-8/15 bg-blue-500">
        Dimi
      </div>
      <div class="basis-7/15">
        <Properties>Properties</Properties>
      </div>
    </div>
    <div class="basis-3/12 bg-blue-500 ">
      Dimi
    </div>
  </div>
</template>

<style scoped></style>
