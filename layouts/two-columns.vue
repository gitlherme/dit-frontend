<template>
  <div>
    <div class="grid grid-cols-12">
      <div
        class="
          h-screen
          col-span-5
          hidden
          md:flex
          items-center
          justify-center
          left-side
        "
      >
        <img
          src="../assets/images/logos/white-dot-darkblue.svg"
          alt="Logo da DIT branco com um ponto azul escuro."
        />
      </div>
      <div class="col-span-12 md:col-span-7">
        <div class="container">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-side {
  background-color: color('primaryLight', 'lightest');
}
</style>
