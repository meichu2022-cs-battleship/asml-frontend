<template>
  <div>
    <div>
      <!-- navbar -->
      <navbar />
    </div>

    <div>
      <!-- body -->
      <router-view />
    </div>
  </div>
  <!--footer  -->
  <foot class="" />
</template>

<script>
import navbar from "../components/navbar.vue";
import foot from "../components/foot.vue";
export default {
  name: "index",
  setup() {
    return {};
  },
  components: {
    navbar,
    foot,
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
