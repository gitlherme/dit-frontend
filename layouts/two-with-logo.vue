<template>
  <div class="two-with-logo-layout">
    <div class="left-side">
      <img
        src="../assets/images/logos/pink-dot-white.svg"
        alt="Logo da DIT na cor pink com branco"
      />
    </div>
    <div class="right-side">
      <img
        src="../assets/images/logos/full-darkest-blue.svg"
        alt="Logo da DIT totalmente azul"
        class="logo-darkest-blue"
      />
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.two-with-logo-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  .left-side {
    width: 60%;
    height: 100%;
    background-color: color('primaryDark');
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 400px;
    }
  }
  .right-side {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .logo-darkest-blue {
      width: 100px;
    }
  }
}
</style>
