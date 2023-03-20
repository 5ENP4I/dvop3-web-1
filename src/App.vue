<script>
import BlueBoard from './components/BlueBoard.vue'
import Vyhledavac from './components/Vyhledavac.vue'

</script>


<template>
  <div class="flex flex-row">
    <div class="basis-2/12 bg-red-500 text-center">
      Pavel
    </div>
    
    
    <div class="flex flex-col basis-7/12 bg-violet-500">
      
      
      <div class="flex flex-col basis-8/15 bg-blue-500 text-center">
        <div class="basis-5/19 bg-blue-100">
          <Vyhledavac/>
        </div>
        <div class="basis-14/19 bg-blue-400">
          <BlueBoard />
        </div>
      </div>


      <div class="basis-7/15 bg-red-500 text-center">Pavel</div>
    </div>
    
    
    <div class="basis-3/12 flex flex-col text-center">
      <div class="basis-1/9 bg-blue-900">
          Nadpis
        </div>
        <div class="basis-8/9 bg-blue-400">
         Dny
        </div>
    </div>
  </div>
</template>

<style scoped></style>
