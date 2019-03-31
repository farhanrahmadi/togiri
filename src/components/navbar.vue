<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">

      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  }
}
</script>

<style scoped>
  nav {
    width: 100vw;
    height: 120px;
    background-color: #183650;
    padding-left: 10%;
    padding-right: 10%;
  }

  image {
    width: auto;
    height: auto;
  }

  .navbar-brand {
    width: 25%;
    background-image: url("../assets/image/togiri-logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  @media only screen and (max-width: 500px){
    nav{
      height: 80px;
    }
    .navbar-brand{
      width: 100%;
      height: 100%;
    }
  }
</style>
