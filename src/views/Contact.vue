<template>
  <div class="content pt-sm-5 bg-custom">
    <div class="overlay" v-if="loading">
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <br/>
    </div>
    <div class="container-fluid pt-3">
      <div class="row p-5 text-light">
        <!-- Contact Title -->
        <!-- Column -->
        <div class="col-sm text-start mx-5">
          <div class="row justify-content-center">
            <!-- Contact Form -->
            <form class="w-75" @submit.prevent="valide">
              <!-- Full Name -->
              <h1 class="title text-start fw-bold">
                Semiconductor Inspect Detection
              </h1>

              <div>
                <p>Please upload the image of semiconductors for defect inspection.</p>
                <p><b>TWO</b> images have to be provided.
                  <ul>
                    <li>The image that contains defect</li>
                    <li>The corresponding golden image</li>
                    
                  </ul>
                </p>
                <p>
                  The defects will be highlighted in the result.
                </p>
              </div>
              <!-- Image -->
              <div class="row">
                <div class="mb-3 mx-1 col">
                  <label for="image" class="form-label"
                    ><b>Your golden image:</b></label
                  >

                  <input
                    type="file"
                    accept="image/*"
                    @change="previewImage($event, 2)"
                  />
                </div>
                <div class="mb-3 mx-1 col">
                  <label for="image" class="form-label"
                    ><b>Your defect image:</b>&nbsp;
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    @change="previewImage($event, 1)"
                  />
                </div>
              </div>
              <!-- Email Address -->
              <div>
                <h3>Email Summary</h3>
                <p>If you would like to recieve an email summary of the inspection, please fill in your info below.</p>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput0" class="form-label"
                  >Your Name <small>(optional)</small>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput0"
                  placeholder="Full Name"
                  v-model="fullname.fnvalue"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email address <small>(optional)</small></label
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
              <!-- Message -->
              <div class="col-sm-8 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Message</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Message"
                  v-model="message.msgvalue"
                ></textarea>
              </div>
              <!-- Submit -->
              <div class="d-flex justify-content-center">
                <button
                type="submit"
                class="btn btn-primary px-5 py-2"
                v-on:click="submit"
              >
                Detect!
              </button>
              </div>
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
      images: [],
      loading: false
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
      const base64_origin = this.preview_origin.split(',')[1]
      const base64_golden = this.preview_golden.split(',')[1]
      const name = this.fullname.fnvalue
      const email = this.email.emailvalue
      const comment = this.message.msgvalue
      const { sendImage } = utils
      this.loading = true
      sendImage({
        origin_image: base64_origin,
        golden_image: base64_golden,
        user_name: name,
        user_email: email,
        user_comment: comment
      }).then((res) => {
        //console.log(res)
        //console.log('check:', res.data)
        const prefix = 'data:image/png;base64,'
        const resultObj = res.data
        // add prefix
        Object.keys(resultObj).forEach((key) => {
          resultObj[key] = `${prefix}${resultObj[key]}`
        })
        this.loading = false
        this.$router
          .push({
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
          .catch((error) => {
            this.loading = false
            console.error(error)
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
.btn-asml {
  background-color: #0f238c;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 150vh;
  background-color: black;
  opacity: 0.5;
}
</style>
