<template>
  <div class="landing">
    <div class="divider"></div>
    <div class="logo-holder"></div>
    <div class="about-us">
      <h2>TOGIRI MARITIM WIJAYA</h2>
      <p> іѕ a Shipping agency, chartering and stevedorong company, Our team leading by professional
        individual which is knowledge in shipping industry more than 15 years. We handling conventional
        vessels, dry cargo, bags / bulk cargoes, general cargo vessels for All Indonesian Ports. We have
        good cooperation with Port Authority / Harbour Master and arranging dispatch vessels when calling
        toeach Indonesian Ports as well as vessel loading and or unloading cargo. We have relationship with
        liner owning strenght local agent at each Indonesian Ports. We having relationship directly to
        Shipowner. Our obligation as ship agent to protect Shipowner/Principal/vessel’s interest.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped lang="scss">

  .columns {
    align-self: center;
  }

  .svg-inline--fa {
    color: white;
  }

  .section {
    padding: 0;
    margin: 0;
  }

  .divider {
    height: 80px;
  }

  .logo-holder {
    width: 100%;
    height: 100px;
    background-image: url("../assets/image/togiri-only-logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .about-us {
    position: absolute;
    z-index: 3;

    h2 {
      padding: 2% 10%;
      font-size: 2rem;
      font-weight: bold;
      color: white;
    }

    h3 {
      font-size: 1.3rem;
      color: white;
    }

    p {
      padding: 2% 20%;
      color: white;
      font-size: 1.2rem;
    }

    .adventage {
      position: absolute;
      z-index: 3;

      p {
        padding: 0;
      }
      .column{
        align-self: center;
      }
    }
  }

  .landing {
    background-image: url("../assets/image/about.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .landing::before {
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    z-index: 2;
  }

  @media (max-width: 500px) {
    .logo-holder{
      height: 50px;
    }
    .landing{
      background-size: cover;
    }
    .divider{
      height: 30px;
    }

    .about-us{
      margin-top: 20px;
      h2{
        font-size: 1.2rem;
      }
      p{
        padding: 2% 10%;
        font-size: 0.9rem;
      }
    }
  }
</style>
