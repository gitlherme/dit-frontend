<template>
  <div class="home-header grid grid-cols-12 gap-4">
    <div class="home-header--text col-span-12 md:col-span-6 flex flex-column justify-center">
      <h1>Tecnologia & diversidade.</h1>
      <div class="home-header--text__buttons">
        <NuxtLink to="/" class="secondary-link">Para empresas</NuxtLink>
        <NuxtLink to="/" class="tertiary-link">Para pessoas</NuxtLink>
      </div>
    </div>
    <div class="home-header--image hidden md:flex col-span-6  justify-end">
      <img src="@/assets/images/home-header-image.png" />
    </div>
  </div>
</template>