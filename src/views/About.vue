<template>
  <div class="content py-sm-5 bg-custom">
    <div class="container-fluid pt-5 mt-5">
      <div class="row p-5 text-light">
        <!-- About Title -->
        <h1 class="title text-start fw-bold">About Us</h1>
        <!-- Column -->
        <div class="col-sm px-5">
          <h4 class="text-capitalize text-start mt-5 mb-3 style fw-bold">
            We are 5 senior students from NYCU CS.
          </h4>

          <a
            href="https://github.com/meichu2022-cs-battleship"
            class="btn text-uppercase text-light fw-bold px-sm-4 py-sm-3 Stars"
            >Github Star</a
          >
        </div>
        <!-- Column -->
        <div class="col-sm pb-3 slanted mt-5 mt-md-5 mt-lg-0">
          <img :src="imgsrc" class="w-100 rounded" alt="about image " />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'About',
  props: {
    data: {
      type: String
    }
  },
  setup() {
    // Image source
    let imgsrc

    try {
      //Check availability
      imgsrc = ref(require('@/assets/images/shoot.jpg'))
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
.bg-custom {
  background-image: linear-gradient(to right, #333, #667eea);
}
p:first-child {
  color: #667eea;
}

p {
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.6;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.Stars {
  background-color: #334155;
}

.slanted {
  transform: skewY(3deg);
  transform: skewX(-1deg);
}
.slanted > img {
  box-shadow: 10px 7px 10px black;
}
</style>
