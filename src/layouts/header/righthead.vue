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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ASML_Holding_N.V._logo.svg/1200px-ASML_Holding_N.V._logo.svg.png'
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
  width: 93%;
  margin-top: 160px;
}
</style>