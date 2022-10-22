<template>
  <div class="content py-sm-5 bg-custom">
    <div class="container-fluid mt-5 width-limit">
      <!-- Top Row -->
      <div class="row p-5 text-light">
        <h1 class="title fw-bold">Defect Inspection Results</h1>
      </div>
      <div class="row text-light mb-5">
        <div class="col-sm-4 d-flex flex-column justify-content-center">
          <div class="">
            <div>Golden Image</div>
            <div class="image-reference">
              <img :src="images[0]" class="w-50" />
            </div>
          </div>
          <div class="">
            <div>Image with Defect</div>
            <div class="image-reference">
              <img :src="images[0]" class="w-50" />
            </div>
          </div>
        </div>
        <div class="col-sm-4 d-flex justify-content-end main-col">
          <img v-if="imageStatus == 1" class="main-image" :src="images[1]" />
          <img
            v-else-if="imageStatus == 2"
            class="main-image"
            :src="images[2]"
          />
          <img
            v-else-if="imageStatus == 3"
            class="main-image"
            :src="images[3]"
          />
          <img
            v-else-if="imageStatus == 4"
            class="main-image"
            :src="images[4]"
          />
          <img
            v-else-if="imageStatus == 5"
            class="main-image"
            :src="images[5]"
          />
          <img
            v-else-if="imageStatus == 6"
            class="main-image"
            :src="images[6]"
          />
          <img
            v-else-if="imageStatus == 7"
            class="main-image"
            :src="images[7]"
          />
          <img v-else class="main-image" :src="images[0]" />
        </div>
        <div
          class="
            col-sm-4
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <div class="text-start">選擇要檢視的內容標記</div>
          <div class="form-container w-50 ml-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="goldenImageSelected"
                id="goldenImage"
              />
              <label class="form-check-label" for="goldenImage">
                Golden Image
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="boundingBox1Selected"
                id="boundingBox1"
              />
              <label class="form-check-label" for="boundingBox1">
                BoundingBox1
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="boundingBox2Selected"
                id="boundingBox2"
              />
              <label class="form-check-label" for="boundingBox2">
                BoundingBox2
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Result",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      goldenImageSelected: true,
      boundingBox1Selected: false,
      boundingBox2Selected: false,
    };
  },
  computed: {
    imageStatus() {
      console.log("called");
      if (
        this.goldenImageSelected &&
        !this.boundingBox1Selected &&
        !this.boundingBox2Selected
      ) {
        return 1;
      } else if (
        !this.goldenImageSelected &&
        this.boundingBox1Selected &&
        !this.boundingBox2Selected
      ) {
        return 2;
      } else if (
        this.goldenImageSelected &&
        this.boundingBox1Selected &&
        !this.boundingBox2Selected
      )
        return 3;
      else if (
        !this.goldenImageSelected &&
        !this.boundingBox1Selected &&
        this.boundingBox2Selected
      )
        return 4;
      else if (
        this.goldenImageSelected &&
        !this.boundingBox1Selected &&
        this.boundingBox2Selected
      )
        return 5;
      else if (
        !this.goldenImageSelected &&
        this.boundingBox1Selected &&
        this.boundingBox2Selected
      )
        return 6;
      else if (
        this.goldenImageSelected &&
        this.boundingBox1Selected &&
        this.boundingBox2Selected
      )
        return 7;
      else return 0;
    },
  },
  setup() {
    // Image source
    let imgsrc;
    const images = [];
    try {
      //Check availability
      imgsrc = ref(require("@/assets/images/about.jpg"));
    } catch (error) {
      console.error(error);
    }
    const templateString =
      "https://dummyimage.com/1024x1024/000000/ffffff.png&text=Test";
    for (let i = 0; i < 12; i++) {
      images.push(templateString + i);
    }
    return {
      imgsrc,
      images,
    };
  },
  mounted() {
    console.log("images debug:", this.images);
  },
};
</script>

<style scoped>
.bg-custom {
  background-image: linear-gradient(to right, #333, #667eea);
}
p:first-child {
  color: #667eea;
}

p {
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

.main-col {
  flex-basis: 1 !important;
}

.main-image {
  width: 100%;
  object-fit: contain;
}
</style>
