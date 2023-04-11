<script lang ="ts">

    export default ({
      name : 'BlueBoard',
      data(){
        return{
          mainTemp:14,
          city:"Gotham",
          preasure:720,
          humidity:32,
          wind:12,
          state: "Mostly Clear",
          time:"00:32 PM"
        }
      }
    })

</script>

<template>
  <div>
    <div class="flex flex-row border-4 h-1/4 p-4 text-system-blue-500 my-10 border-system-blue-300 rounded-lg bg-system-blue-300 place-content-stretch">
      <div class="flex flex-col basis-1/2 pr-5">
        <div class="flex flex-row basis-1/4">
          <div class="flex items-start basis-1/2 font-semibold">
            <img src="../../public/Location.svg">
            <p>{{city}}</p>
          </div>
          <div class="flex items-start justify-end basis-1/2">
            <p>Today {{time}}</p>
          </div>    
        </div>
        <div class="basis-2/4 text-center font-Font1 font-medium">
          <h1 class="text-[100px]">{{mainTemp}}&deg;</h1>
          <p>{{state}}</p>
        </div>
        <div class="flex flex-row basis-1/4 font-semibold">
          <div class="basis-1/3 flex items-end justify-start">
            <img src="../../public/Preasure.svg">
            <p>{{preasure}}hpa</p>
          </div>
          <div class="basis-1/3 flex items-end justify-center">
            <img src="../../public/Humidity.svg">
            <p>{{humidity}}%</p>
          </div>
          <div class="basis-1/3 flex items-end justify-end">
            <img src="../../public/Wind.svg">
            <p>{{wind}}km/h</p>
          </div>
        </div>
      </div>
      
      <div class="basis-1/2 items-center">
        <img src="../../public/Diagram.svg" class="border-4 border-[#d5eaff] rounded-lg bg-[#d5eaff]"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
