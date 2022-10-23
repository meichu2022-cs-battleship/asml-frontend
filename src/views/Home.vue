<template>
  <div class="container-fluid mt-5 py-5 bg-custom h-100">
    <!-- Header -->
    <div class="row mb-5">
      <lefthead class="lefthead col-sm ps-4" />
      <righthead class="righthead col-sm d-none d-md-block" />
    </div>
    <!-- Section -->
    <Section
      class="row Section-bg"
      :style="{ backgroundImage: 'url(' + imgsrc + ')' }"
    />
  </div>
</template>
<script>
import righthead from "../layouts/header/righthead.vue";
import lefthead from "../layouts/header/lefthead.vue";
import Section from "../components/Section.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    righthead,
    lefthead,
    Section,
  },
  setup() {
    let imgsrc;
    try {
      //Check availability
      imgsrc = ref(require("@/assets/images/slanted-background.png"));
    } catch (error) {
      console.error(error);
    }
    return {
      imgsrc,
    };
  },
};
</script>
<style scoped>
.Section-bg {
  height: auto;
  background-size: cover;
}
.lefthead {
  padding-top: 9%;
}
.bg-custom {
  background-image: linear-gradient(to right, rgb(237, 234, 234), #8b93eb);
}
@media screen and (max-width: 850px) {
  .lefthead {
    padding-top: 9%;
  }
}
</style>
