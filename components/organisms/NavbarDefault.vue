<template>
  <nav class="navbar-default">
    <div
      class="
        container
        flex
        justify-between
        items-center
        pt-3
        pb-3
        md:pt-5 md:pb-5
      "
    >
      <div class="navbar-default__logo col-span-1">
        <NuxtLink to="/">
          <img
            src="../../assets/images/logos/darkblue-dot-pink.svg"
            alt="Logo da DIT na cor azul escuro com um ponto rosa."
          />
        </NuxtLink>
      </div>
      <div class="navbar-default__items">
        <ul class="navbar-default__items--list flex gap-x-5">
          <li class="navbar-default__items--list-item">
            <NuxtLink to="/dashboard"> Meu dashboard </NuxtLink>
          </li>
          <li class="navbar-default__items--list-item has-">
            <NuxtLink to="/profile"> Meu perfil </NuxtLink>
            <ul class="navbar-default__items--list-submenu hidden">
              <li class="navbar-default__items--list-submenu-item">
                <NuxtLink to="/profile/edit"> Editar perfil </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
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
