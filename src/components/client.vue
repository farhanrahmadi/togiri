<template>
  <div class="wrapper">
    <div class="title">
      <h2>Our Client</h2>
    </div>
    <div class="container">
      <carousel :autoplay="true" :nav="false" :items="item">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/ba.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">Product Manager</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/ba.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">Product Manager</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/ba.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">Product Manager</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/ba.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">Product Manager</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/image/ba.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">Product Manager</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'client',
  components: { carousel },
  data () {
    return {
      item: 3
    }
  },
  created () {
    this.handleResize()
  },
  methods: {
    handleResize () {
      if (window.innerWidth < 501) {
        this.item = 1
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper{
    padding: calc(5% + 100px) 0;
  }
  .title {
    text-align: center;

    h2 {
      font-size: 3rem;
      font-weight: bold;
    }
  }

</style>
