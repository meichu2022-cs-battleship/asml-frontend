<template>
  <div class="container-fluid p-more"></div>
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
  padding-top: 200px;
}
.btn-pink {
  background-color: #667eea;
}
.btn-pink:hover {
  background-color: #ed64a6;
}
.tw {
  color: rgb(0, 162, 255);
}
</style>