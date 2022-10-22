<template>
  <div class="container-fluid p-more">
    <p class="text-center text-capitalize" style="color: #0b1a8c">
      交大資工宇宙戰艦
    </p>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'foot',
  setup() {
    //Copyright Date
    const date = ref(new Date().getFullYear())
    return {
      date
    }
  }
}
</script>

<style scoped>
.p-more {
  padding-top: 50px;
}
</style>