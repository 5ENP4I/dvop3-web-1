<script lang ="ts">

    export default ({
      name : 'BlueBoard'
    })

</script>

<template>
  <div>
    <div class="flex flex-row border-4  h-[15rem] w-[40rem] border-[#BADCFF] rounded-lg bg-[#BADCFF] place-content-stretch">
      <div class="flex flex-col basis-1/2 mx-4">
        <div class="flex flex-row basis-1/4">
          <div class="flex items-center basis-1/2 ">
            <img src="../../public/Location.svg">
            <p>Gotham</p>
          </div>
          <div class="flex items-center justify-end basis-1/2">
            <p>Today 00:32 PM</p>
          </div>    
        </div>
        <div class="basis-2/4 text-center">
          <h1 class="text-[60px]">14&deg;</h1>
          <p>Mostly Clear</p>
        </div>
        <div class="flex flex-row basis-1/4">
          <div class="basis-1/3 flex items-center justify-start">
            <img src="../../public/Preasure.svg">
            <p>720hpa</p>
          </div>
          <div class="basis-1/3 flex items-center justify-center">
            <img src="../../public/Humidity.svg">
            <p>32%</p>
          </div>
          <div class="basis-1/3 flex items-center justify-end">
            <img src="../../public/Wind.svg">
            <p>12km/h</p>
          </div>
        </div>
      </div>
      
      <div class="basis-1/2 border-4 border-[#C4E2FF] rounded-lg bg-[#C4E2FF] m-1.5">
        Stupid diagram
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
