<template>
  <div>
    <img :src="imgsrc" alt="header image" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'righthead',
  setup() {
    // Image source
    let imgsrc

    try {
      //Check availability
      imgsrc = ref(
        'https://wr-images.chinatimes.com/newsphoto/2022-10-19/1024/20221019900650.jpg'
      )
    } catch (error) {
      console.error(error)
    }
    return {
      imgsrc
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>