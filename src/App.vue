<script lang="ts">
import BlueBoard from "./components/BlueBoard.vue"
import Vyhledavac from './components/Vyhledavac.vue';

export default({
  name : 'App',
  components: {
    BlueBoard,
    Vyhledavac
  }
})
</script>


<template>
  <div class="place-items-stretch flex flex-row w-screen h-screen">
    
    <div class="flex flex-col basis-2/12 bg-red-800">
      Pavel
    </div>
    
    <div class=" flex flex-col basis-7/12">

      <div class="flex flex-col basis-[53.4%]">
        <div class="basis-[26.31%]">
          <Vyhledavac/>
        </div>
        <div class="basis-[73.68%] m-auto w-745 h-345">
          <BlueBoard/>
        </div>
      </div>

      <div class="basis-[46.7%] bg-red-500">Pavel</div>
    </div>
    
    <div class="flex flex-col basis-3/12 bg-red-800">
      
      <div class="basis-[11.2%] bg-blue-900">
        Nadpis
      </div>
      <div class="basis-[88.9%] bg-blue-400">
        Dny
      </div>

    </div>

  </div>

</template>

<style scoped></style>
