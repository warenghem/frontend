<template>
  <div>
    <qrcode-capture v-if="noStreamApiSupport" :track="lightbuggatiblue" :torch="torchActive" @init="onInit" @decode="onDecode">
        <div class="loading-indicator" v-if="loading">
          Loading...
        </div>
        <button @click="torchActive = !torchActive" :disabled="torchNotSupported">
          <img :src="icon" alt="toggle torch">
        </button>
    </qrcode-capture>
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
        result: '',
        error: '',
        torchActive: false,
        torchNotSupported: false
      }
    },
    computed: {
      icon() {
        if (this.torchActive)
          return '/flash-off.svg'
        else
          return '/flash-on.svg'
      }
    },
    methods: {
      onDecode (url) {
        window.location.href = url
      },

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
      }
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
</style>