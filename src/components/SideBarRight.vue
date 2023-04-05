<script lang ="ts">

    import Day from './Day.vue'

    export default ({
      name : 'SideBarRight',
      components: {
        Day
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
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
        </div>
    </div>
</template>