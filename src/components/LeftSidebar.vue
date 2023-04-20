<script setup lang="ts">
interface Data {
  elements: { title: string, image: string }[]
}

const data: Data = {
  elements: [
    { title: 'Saved Location', image: '/saved-location.png' },
    { title: 'Calendar', image: '/calendar.png' },
    { title: 'Settings', image: '/settings.png' }
  ]
}
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-full text-left pl-20">
      <div class="font-extrabold text-xl py-20 border-r-2">
        <img class="inline w-10" src="/cuacane-logo.png">
        Cuacane
      </div>
      
      <div class="pt-7"></div>
      <div class="font-semibold py-3 border-r-2 border-black">
        <img class="inline w-8 pb-1" src="/dashboard-logo.png">
        Dashboard
      </div>
      <div class="pt-7"></div>

      <div class="border-r-2 h-666">
        <div class="pt-6">
          <img class="inline w-8 pb-1" src="/map.png">
          Map
        </div>

        <div v-for="(element, index) in data.elements" :key="index">
          <div class="pt-16">
            <img class="inline w-8 pb-1" :src="element.image">
            {{ element.title }}
          </div>
        </div>

        <div class="pt-52">
          <img class="inline w-8 pb-1" src="/logout.png">
          Log Out
        </div>
      </div>
    </div>
  </div>
</template>