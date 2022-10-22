<template>
  <div class="content py-sm-5 bg-custom">
    <div class="container-fluid pt-5 mt-5">
      <div class="row p-5 text-light">
        <!-- About Title -->
        <h1 class="title text-start fw-bold">About Us</h1>
        <!-- Column -->
        <div class="col-sm px-5">
          <h4 class="text-capitalize text-start mt-5 mb-3 style fw-bold">
            What is MK template
          </h4>
          <img :src="this.golden_image" />
          <img :src="this.defect_image" />
          <img :src="this.sem_gds" />
          <img :src="this.sem_gds_r_rect" />
          <img :src="this.sem_gds_g_rect" />
          <img :src="this.sem_gds_rg_rect" />
          <img :src="this.sem_r_rect" />
          <img :src="this.sem_g_rect" />
          <img :src="this.sem_rg_rect" />
          <a
            href="https://github.com/mohammedmoutawakkil/MKTemplate"
            class="btn text-uppercase text-light fw-bold px-sm-4 py-sm-3 Stars"
            >Github Star</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Result',
  props: {
    golden_image: String,
    defect_image: String,
    sem_gds: String,
    sem_gds_r_rect: String,
    sem_gds_g_rect: String,
    sem_gds_rg_rect: String,
    sem_r_rect: String,
    sem_g_rect: String,
    sem_rg_rect: String
  },
  //props: {
  //  data: {
  //    type: Object,
  //    default: () => {}
  //  }
  //},
  setup() {
    // Image source
    let imgsrc

    try {
      //Check availability
      imgsrc = ref(require('@/assets/images/about.jpg'))
    } catch (error) {
      console.error(error)
    }
    return {
      imgsrc
    }
  },
  mounted() {
    console.log(this.data)
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

img {
  width: 200px;
  height: 200px;
}
</style>
