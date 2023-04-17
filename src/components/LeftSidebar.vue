<script setup lang="ts">
interface Data {
  elements: { title: string, image: string }[]
}

const data: Data = {
  elements: [
    { title: 'Map', image: '/map.png' },
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

      <div class="font-semibold border-r-2 border-black h-42">
        <img class="inline w-8 pb-1" src="/dashboard-logo.png">
        Dashboard
      </div>

      <div class="font-jakarta border-r-2">
        <div v-for="(element, index) in data.elements" :key="index">
          <div class=" pt-16">
            <img class="inline w-8 pb-1" :src="element.image">
            {{ element.title }}
          </div>
        </div>

        <div class="pt-96">
          <img class="inline w-8 pb-1" src="/logout.png">
          Log Out
        </div>
        <div class="pt-8"></div>
      </div>
    </div>
  </div>
</template>