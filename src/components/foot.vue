<template>
  <div
    class="
      footer
      d-flex
      flex-column
      pt-3
      justify-content-center
      align-items-center
    "
  >
    <div class="" style="color: #0b1a8c">
      交大資工宇宙戰艦 | 2022 新竹 X 梅竹黑客松
    </div>
    <div>
      <small>Hackathon Topic 2: Wafer Defect Inspection</small>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "foot",
  setup() {
    //Copyright Date
    const date = ref(new Date().getFullYear());
    return {
      date,
    };
  },
};
</script>

<style scoped>
.footer {
  height: 10rem;
}
</style>
