<template>
  <video-bg v-if="window.width > 800" :sources="['http://pespantelis.github.io/vue-videobg/demo/assets/timelapse.mp4']">
    <div class="msg">
      <h1 class="headline" v-animate-css="'fadeIn'" >WE ARE LOGISTIC & SHIPPING COMPANY</h1>
    </div>
  </video-bg>
</template>

<script>
import VideoBg from 'vue-videobg'

export default {
  name: 'landing',
  components: {
    VideoBg
  },
  data () {
    return {
      window: {
        width: 0
      }
    }
  },
  created () {
    this.handleResize()
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
    }
  }
}
</script>

<style scoped>
  .msg {
    position: absolute;
    width: 100%;
    top: calc(35% + 100px);
    color: white;
    z-index: 3;
    font-family: 'PT Sans', sans-serif;
  }

  .headline {
    font-size: 3rem;
  }
</style>
