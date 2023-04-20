<script lang="ts">
import BlueBoard from "./components/BlueBoard.vue"
import Vyhledavac from './components/Vyhledavac.vue'
import SideBarRight from './components/SideBarRight.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import Properties from './components/Properties.vue'

export default({
  name : 'App',
  components: {
    BlueBoard,
    Vyhledavac,
    SideBarRight,
    LeftSidebar,
    Properties
}
})
</script>


<template>
  <div class="place-items-stretch flex flex-row w-screen h-screen text-center font-Font1">
    
    <div class="basis-2/12">
      <LeftSidebar/>
    </div>
    
    <div class=" flex flex-col basis-7/12 px-10 py-3">

      <div class="flex flex-col w-full">
        <div class="w-full">
          <Vyhledavac/>
        </div>
        <div class="w-full">
          <BlueBoard/>
        </div>
      </div>

      <div class="basis-7/15">
        <Properties/>
      </div>

    </div>
    
    <div class="basis-3/12">
      <SideBarRight/>
    </div>
  </div>

</template>

<style scoped></style>
