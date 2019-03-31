<template>
  <div class="home">
    <navbar></navbar>
    <div class="fullpage-container page-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <landing></landing>
        <about></about>
        <service></service>
        <client></client>
        <contact></contact>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Landing from '../components/landing'
import About from '../components/about'
import Service from '../components/service'
import Client from '../components/client'
import Contact from '../components/contact'

export default {
  name: 'home',
  components: {
    Client,
    Navbar,
    Landing,
    About,
    Service,
    Contact
  },
  data () {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (currentSlideEl, currenIndex, nextIndex) {
        },
        afterChange: function (currentSlideEl, currenIndex, nextIndex) {
        }
      }
    }
  }
}
</script>
<style>
  .home{
    height: 100%;
  }
  .page-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
