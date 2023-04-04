<script lang="ts">
import BlueBoard from "./components/BlueBoard.vue"
import Vyhledavac from './components/Vyhledavac.vue';
import SideBarRight from './components/SideBarRight.vue';

export default({
  name : 'App',
  components: {
    BlueBoard,
    Vyhledavac,
    SideBarRight
    
  }
})
</script>


<template>
  <div class="place-items-stretch flex flex-row w-screen h-screen">
    
    <div class="flex flex-col basis-2/12 bg-red-800">
      Pavel
    </div>
    
    <div class=" flex flex-col basis-7/12 p-5">

      <div class="flex flex-col w-full">
        <div class="w-full">
          <Vyhledavac/>
        </div>
        <div class="w-full">
          <BlueBoard/>
        </div>
      </div>

      <div class="basis-[46.7%] bg-red-500">Pavel</div>

    </div>
    
    <div class="basis-3/12">
      <SideBarRight/>
    </div>
  </div>

</template>

<style scoped></style>
