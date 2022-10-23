<template>
  <div class="content pt-sm-5 bg-custom">
    <div class="container-fluid pt-3">
      <div class="row p-5 text-light">
        <!-- Contact Title -->
        <!-- Column -->
        <div class="col-sm text-start mx-5">
          <div class="row">
            <!-- Contact Form -->
            <form @submit.prevent="valide">
              <!-- Full Name -->
              <h1 class="title text-start fw-bold">
                Upload your image check the result on our web and both on email
              </h1>
              <div class="col-sm-8 mb-3">
                <label for="exampleFormControlInput0" class="form-label"
                  >Your Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput0"
                  placeholder="Full Name"
                  v-model="fullname.fnvalue"
                />
              </div>
              <!-- Email Address -->
              <div class="col-sm-8 mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  v-model="email.emailvalue"
                />
                <small v-show="email.emailerror" class="form-text text-danger"
                  >Incorrect Email Address.</small
                >
              </div>
              <!-- Image -->
              <div class="row">
                <div class="mb-3 mx-1 col">
                  <label for="image" class="form-label"
                    >Your golden image</label
                  >

                  <input
                    type="file"
                    accept="image/*"
                    @change="previewImage($event, 2)"
                  />
                </div>
                <div class="mb-3 mx-1 col">
                  <label for="image" class="form-label"
                    >Your defect image&nbsp;
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    @change="previewImage($event, 1)"
                  />
                </div>
              </div>
              <!-- Message -->
              <div class="col-sm-8 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Message</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Message"
                  v-model="message.msgvalue"
                ></textarea>
              </div>
              <!-- Submit -->
              <button
                type="submit"
                class="btn btn-secondary"
                v-on:click="submit"
              >
                <fa :icon="['fas', 'save']" class="me-2" />Submit
              </button>
            </form>
          </div>
        </div>
        <!-- Column -->
        <div
          class="
            col-sm
            pb-1
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <!-- Location -->
          <div class="mb-3">
            <div>Golden Image</div>
            <img
              v-if="preview_golden"
              class="w-50 rounded shadow"
              :src="preview_golden"
            />
            <img
              v-else
              class="w-50 rounded shadow"
              src="https://dummyimage.com/1024x1024/9e969e/e2e4f5.png&text=your+golden+Image"
            />
          </div>

          <div>
            <div>Image with Defect</div>
            <img
              v-if="preview_origin"
              class="w-50 rounded shadow"
              :src="preview_origin"
            />
            <img
              v-else
              class="w-50 rounded shadow"
              src="https://dummyimage.com/1024x1024/9e969e/e2e4f5.png&text=your+Image+with+Defect"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { utils } from '../utils'
import { reactive, toRefs, watch } from 'vue'
import _ from 'lodash'
export default {
  name: 'Contact',
  data() {
    return {
      preview_origin: null,
      preview_golden: null,
      images: []
    }
  },
  methods: {
    previewImage: function (event, flag) {
      var input = event.target
      if (input.files) {
        var reader = new FileReader()

        reader.onload = (e) => {
          if (flag == 1) {
            this.preview_origin = e.target.result
          } else {
            this.preview_golden = e.target.result
          }
        }

        reader.readAsDataURL(input.files[0])
      }
    },

    submit: function () {
      // preprosessing for backend
      const base64_origin = this.preview_origin.split(',')[1]
      const base64_golden = this.preview_golden.split(',')[1]

      const { sendImage } = utils

      sendImage({
        origin_image: base64_origin,
        golden_image: base64_golden
      }).then((res) => {
        //console.log(res)
        //console.log('check:', res.data)
        const prefix = 'data:image/png;base64,'
        const resultObj = res.data
        // add prefix
        Object.keys(resultObj).forEach((key) => {
          resultObj[key] = `${prefix}${resultObj[key]}`
        })
        this.$router.push({
          name: 'Result',
          params: {
            golden_image: `${prefix}${base64_golden}`,
            defect_image: `${prefix}${base64_origin}`,
            sem_gds: resultObj['sem_gds'],
            sem_gds_r_rect: resultObj['sem_gds_r_rect'],
            sem_gds_g_rect: resultObj['sem_gds_g_rect'],
            sem_gds_rg_rect: resultObj['sem_gds_rg_rect'],
            sem_r_rect: resultObj['sem_r_rect'],
            sem_g_rect: resultObj['sem_g_rect'],
            sem_rg_rect: resultObj['sem_rg_rect']
          }
        })
      })
    }
  },
  setup() {
    //form values
    const formvalidation = reactive({
      fullname: {
        fnvalue: '',
        fnerror: false
      },
      images: {
        preview_origin: null,
        preview_golden: null
      },
      email: {
        emailvalue: '',
        emailerror: false
      },
      subjet: {
        sjvalue: '',
        sjerror: false
      },
      message: {
        msgvalue: '',
        msgerror: false
      }
    })
    //regex validation
    const mailformat = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    watch(
      () => _.cloneDeep(formvalidation.email),
      (newvalue) => {
        if (!mailformat.test(newvalue.emailvalue) && newvalue.emailvalue !== '')
          formvalidation.email.emailerror = true
        else formvalidation.email.emailerror = false
      },
      { deep: true }
    )
    //form submit
    function valide() {
      if (formvalidation.fullname.fnvalue === '') {
        formvalidation.fullname.fnerror = true
      } else {
        formvalidation.fullname.fnerror = false
      }
      if (formvalidation.email.emailvalue === '') {
        formvalidation.email.emailerror = true
      } else {
        formvalidation.email.emailerror = false
      }
      if (formvalidation.subjet.sjvalue === '') {
        formvalidation.subjet.sjerror = true
      } else {
        formvalidation.subjet.sjerror = false
      }
      if (formvalidation.message.msgvalue === '') {
        formvalidation.message.msgerror = true
      } else {
        formvalidation.message.msgerror = false
      }
    }
    return {
      ...toRefs(formvalidation),
      valide
    }
  }
}
</script>

<style scoped>
.bg-custom {
  background-image: linear-gradient(to right, rgb(177, 177, 215), #4d58d8);
}
</style>
