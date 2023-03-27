<script lang ="ts">

    export default ({
      name : 'BlueBoard'
    })

</script>

<template>
  <div>
    <div class="flex flex-row border-4 h-1/4 p-5 text-system-blue-500 my-10 border-system-blue-300 rounded-lg bg-system-blue-300 place-content-stretch">
      <div class="flex flex-col basis-1/2 pr-5">
        <div class="flex flex-row basis-1/4">
          <div class="flex items-center basis-1/2 font-semibold">
            <img src="../../public/Location.svg">
            <p>Gotham</p>
          </div>
          <div class="flex items-center justify-end basis-1/2">
            <p>Today 00:32 PM</p>
          </div>    
        </div>
        <div class="basis-2/4 text-center font-Font1 font-medium">
          <h1 class="text-[100px]">14&deg;</h1>
          <p>Mostly Clear</p>
        </div>
        <div class="flex flex-row basis-1/4 font-semibold">
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
      
      <div class="basis-1/2 border-4 border-[#d5eaff] rounded-lg bg-[#C4E2FF] m-1.5">
        <img src="../../public/Diagram.PNG"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
