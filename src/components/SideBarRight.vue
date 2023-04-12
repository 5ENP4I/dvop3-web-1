<script lang ="ts">

    import Day from './Day.vue'
    import DaysData from '../assets/DaysData.json'

    export default ({
      name : 'SideBarRight',
      components: {
        Day
      },
      data(){
        return{
            DaysData
        };
      }
    })
</script>

<template>
    <div class="flex flex-col px-10 border-l-2 border-system-gray-border h-screen">
        <div class="basis-[11.2%] m-2 flex flex-row items-center">
            <div><img src="../../public/ArrowLeft.svg"/></div>
            <div class="flex-grow text-center text-xl"><p>This Week</p></div>
            <div><img src="../../public/ArrowRight.svg"/></div>
        </div>
        <div class="basis-[88.9%]">
            <Day v-for="record in DaysData"
            :key="record.id"
            :temp="record.temp"
            :day-of-week="record.dayOfWeek"
            :sun-state="record.sunState"
            :date="record.date"
            :is-shown-as-clicked="record.IsClicked"
            :first-hour="record.nearestHoursdata.first" :first-sun-state="record.nearestHoursdata.hour1SunState"
            :second-hour="record.nearestHoursdata.second" :second-sun-state="record.nearestHoursdata.hour2SunState"
            :third-hour="record.nearestHoursdata.third" :third-sun-state="record.nearestHoursdata.hour3SunState"/>
        </div>
    </div>
</template>