<script lang ="ts">

    export default ({
      name : 'Day',
      props:{
      }
    })
</script>

<template>
    <div class="flex flex-row items-center text-xl p-6">
        <div class="basis-1/3">
            <div class="items-start">Tomorrow</div>
            <div class="items-end text-[#999999]">12 Apr</div>
        </div>
        <div class="basis-1/3 text-center">16&deg;</div>
        <div class="basis-1/3 "><img class="float-right" src="../../public/RedSun.svg"></div>
    </div>
</template>