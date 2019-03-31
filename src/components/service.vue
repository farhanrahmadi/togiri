<template>
  <div class="wrapper">
    <div class="container">
      <div v-if="window.width > 500" class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/image/underwater.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <font-awesome-icon class="fa-3x" icon="globe-asia"/>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Underwater</p>
                </div>
              </div>

              <div class="content">
                TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning
                system
                throughout the world. Our aim is to maintain direct communication with our equipment
                users to help them with our techniques, as well as our extensive business knowledge
                in
                the field.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/image/stevedoring.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <font-awesome-icon class="fa-3x" icon="globe-asia"/>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Stevedoring</p>
                </div>
              </div>

              <div class="content">
                TOGIRI MARITIM WIJAYA provides stevedoring services which is unload goods from ships
                to dock, barge or truck and load the goods on the dock, barge or truck to board the
                ship to be arranged in the hold of the ship using a crane or derrick boat
                ashore.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/image/underwater.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <font-awesome-icon class="fa-3x" icon="box-open"/>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Ship management</p>
                </div>
              </div>

              <div class="content">
                TOGIRI MARITIM WIJAYA is committed to operate and maintain all vessels under its
                management to the highest standard of international practices and meeting the
                quality requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
      <carousel v-else :autoplay="true" :nav="false" :items="1">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/underwater.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <font-awesome-icon class="fa-3x" icon="globe-asia"/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Underwater</p>
              </div>
            </div>

            <div class="content">
              TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning
              system
              throughout the world. Our aim is to maintain direct communication with our equipment
              users to help them with our techniques, as well as our extensive business knowledge
              in
              the field.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/underwater.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <font-awesome-icon class="fa-3x" icon="globe-asia"/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Underwater</p>
              </div>
            </div>

            <div class="content">
              TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning
              system
              throughout the world. Our aim is to maintain direct communication with our equipment
              users to help them with our techniques, as well as our extensive business knowledge
              in
              the field.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/underwater.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <font-awesome-icon class="fa-3x" icon="globe-asia"/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Underwater</p>
              </div>
            </div>

            <div class="content">
              TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning
              system
              throughout the world. Our aim is to maintain direct communication with our equipment
              users to help them with our techniques, as well as our extensive business knowledge
              in
              the field.
            </div>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import Carousel from 'vue-owl-carousel'

export default {
  name: 'service',
  components: {
    Carousel
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

<style scoped lang="scss">
  .container {
    padding: 7% 0;
  }

  .columns {
    height: 100%;
    align-items: center;
  }

  .wrapper {
    background-color: #ececec;
    width: 100%;
  }

  .media {
    align-items: center;
  }

  .content {
    height: 150px;
  }
</style>
