<template>
  <!-- View More -->
  <div class="my-5">
    <a
      href="https://2022.meichuhackathon.org/ASML.pdf"
      class="text-center text-decoration-none text-pin fw-bold"
      >Official Document</a
    >
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  name: 'Section',
  setup() {
    let profiles

    try {
      //Check availability
      //profiles = reactive({
      //  p1: require('@/assets/images/p1.jpg'),
      //  //p2: require('@/assets/images/p2.jpg'),
      //  p3: require('@/assets/images/p3.jpg'),
      //  //p4: require('@/assets/images/p4.jpg'),
      //  //Computer: require('@/assets/images/Computer.jpg'),
      //  grid: require('@/assets/images/grid.jpg')
      //})
    } catch (error) {
      console.error(error)
    }
    return {
      ...toRefs(profiles)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Festive&family=Varela+Round&display=swap');
.up {
  cursor: pointer;
}
.up img:hover {
  opacity: 0.4;
}
.up:hover {
  padding-top: 0px;
}

.Computercard {
  width: 40%;
  margin-left: 19%;
  box-shadow: 5px 4px 3px rgb(180, 180, 180);
}
.card-p {
  font-family: 'Festive', cursive;
  font-family: 'Varela Round', sans-serif;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.text-pin {
  color: #334155;
}
.text-other {
  color: #7952b3;
}
.bg-other {
  background-color: #7952b3;
}
.Computercardbody {
  background-color: #5f79ec;
}
.bg-pink {
  background-color: #a1366a;
}
.bg-pink > h3 {
  font-family: 'Festive', cursive;
  text-shadow: 2px 2px 4px #000000;
}
</style>