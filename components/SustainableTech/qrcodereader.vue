<template>
  <div>
    <p class="decode-result">Last result: <b>{{ result }}</b></p>
    <qrcode-stream :camera="camera" v-if="noStreamApiSupport" :track="lightbuggatiblue" :torch="torchActive" @decode="onDecode" @init="onInit">
      <div class="loading-indicator" v-if="loading">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="image"
        ></v-skeleton-loader>
      </div>
      <div v-if="validationSuccess" class="validation-success">
        This is a URL
      </div>

      <div v-if="validationFailure" class="validation-failure">
        This is NOT a URL!
      </div>

      <div v-if="validationPending" class="validation-pending">
        Long validation in progress...
      </div>
      <button @click="torchActive = !torchActive" :disabled="torchNotSupported">
        <img :src="icon" alt="toggle torch">
      </button>
    </qrcode-stream>
    <qrcode-drop-zone @decode="onDecode" @init="logErrors">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </qrcode-drop-zone>
  </div>
</template>

<script>
  import Vue from "vue";
  import VueQrcodeReader from "vue-qrcode-reader";

  Vue.use(VueQrcodeReader);

  export default {
    data () {
      return {
        loading: false,
        isValid: undefined,
        camera: 'auto',
        result: null,
        error: '',
        torchActive: false,
        torchNotSupported: false
      }
    },
    computed: {
      validationPending () {
        return this.isValid === undefined
          && this.camera === 'off'
      },

      validationSuccess () {
        return this.isValid === true
      },

      validationFailure () {
        return this.isValid === false
      },
      icon() {
        if (this.torchActive)
          return '/flash-off.svg'
        else
          return '/flash-on.svg'
      }
    },
    methods: {
      async onInit (promise) {
        this.loading = true
        try {
          const { capabilities } = await promise

          console.log(capabilities);

          this.torchNotSupported = !capabilities.torch
        } catch (error) {
          console.error(error)
        }
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permisson"
          } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
          } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
          } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
          }
        } finally {
        this.loading = false
        this.resetValidationState
      }
      },
      resetValidationState () {
        this.isValid = undefined
      },
      async onDecode (content) {
        this.result = content
        this.turnCameraOff()

        // pretend it's taking really long
        await this.timeout(3000)
        this.isValid = content.startsWith('https://www.warenghem.com')

        // some more delay, so users have time to read the message
        await this.timeout(2000)
        window.location.href = url

        this.turnCameraOn()
      },
      turnCameraOn () {
        this.camera = 'auto'
      },

      turnCameraOff () {
        this.camera = 'off'
      },

      timeout (ms) {
        return new Promise(resolve => {
          window.setTimeout(resolve, ms)
        })
      }
    },

    lightbuggatiblue (location, ctx) {
      const {
        topLeftFinderPattern,
        topRightFinderPattern,
        bottomLeftFinderPattern
      } = location
      const pointArray = [
        topLeftFinderPattern,
        topRightFinderPattern,
        bottomLeftFinderPattern
      ]
      ctx.fillStyle = '#007bff'
      pointArray.forEach(({ x, y }) => {
        ctx.fillRect(x - 5, y - 5, 10, 10)
      })
    }
  }
</script>

<style scoped>
.loading-indicator {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}
button {
  position: absolute;
  left: 10px;
  top: 10px;
}
.error {
  color: red;
  font-weight: bold;
}
.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>