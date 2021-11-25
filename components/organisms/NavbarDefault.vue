<template>
  <nav class="navbar-default">
    <div class="container flex justify-between items-center">
      <div class="navbar-default__logo col-span-1">
        <img
          src="../../assets/images/logos/darkblue-dot-pink.svg"
          alt="Logo da DIT na cor azul escuro com um ponto rosa."
        />
      </div>
      <div class="user">
        <div class="flex">
          <NuxtLink to="/login">
            <Button type="submit" value="Entrar" variant="secondary" />
          </NuxtLink>
          <NuxtLink to="/register">
            <Button type="submit" value="Registrar" variant="tertiary" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
.navbar-default {
  background: color('secondaryLight', 'lightest');
  .container {
    .navbar-default__logo {
      img {
        height: 1.5rem;
      }
    }
  }
}
</style>
