<script setup lang="ts">
interface Data {
  elements: { title: string, description: string, value: string, image: string}[]
}

const data: Data = {
  elements: [
    { title: 'Wind', description: 'Today wind speed', value: '12km/h', image: '/wind.png' },
    { title: 'Rain Chanse', description: 'Today rain chanse', value: '24%', image: '/rainChanse.png' },
    { title: 'Pressure', description: 'Today pressure', value: '720 hpa', image: '/pressure.png' },
    { title: 'UV Index', description: 'Today UV Index', value: '2', image: '/UVIndex.png' }
  ]
}
</script>

<template>
  <div class="grid grid-cols-2 gap-8 mt-8">
    <div v-for="(element, index) in data.elements" :key="index">
      <div class="flex flex-row h-40 border-4 border-[#ECF3F8] rounded-lg bg-[#ECF3F8] text-left">
        <div class="flex flex-col justify-center px-5">
          <div class="font-medium text-xl">{{ element.title }}</div>
          <div class="font-normal text-base text-[#999999] my-4">{{ element.description }}</div>
          <div class="font-medium text-xl">{{ element.value }}</div>
        </div>
        <img class="my-auto ml-auto mr-8" :src="element.image"/>
      </div>
    </div>
  </div>
</template>
