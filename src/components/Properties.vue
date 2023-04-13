<script lang="ts">

export default ({
  name: 'Folder',
  props: {
    id: Number,
    name: String,
    today: String,
    number: String,
    image: String
  },
  data() {
    return {
      imageSource: ""
    };
  },
  mounted() {
    if (this.image == "wind") {
      this.imageSource = "/wind.png"
    }
    else if (this.image == "pressure") {
      this.imageSource = "/pressure.png"
    }
    else if (this.image == "rainChanse") {
      this.imageSource = "/rainChanse.png"
    }
    else if (this.image == "UVIndex") {
      this.imageSource = "/UVIndex.png"
    }
  }
})
</script>

<template></template>