<template>
  <nav class="navbar-default">
    <div class="container grid grid-cols-12">
      <div class="navbar-default__logo col-span-1">
        <img
          src="../../assets/images/logos/darkblue-dot-pink.svg"
          alt="Logo da DIT na cor azul escuro com um pontinho rosa."
        />
      </div>
      <ul class="navbar-default__list col-span-9 flex justify-center">
        <li><NuxtLink to="/"> Home </NuxtLink></li>
        <li><NuxtLink to="/#pricing"> Preços </NuxtLink></li>
        <li><NuxtLink to="/blog"> Dicas </NuxtLink></li>
      </ul>
      <div class="user col-span-2 flex justify-around">
        <NuxtLink to="/login">
          <Button type="submit" value="Entrar" buttonClass="secondary" />
        </NuxtLink>
        <NuxtLink to="/register">
          <Button type="submit" value="Registrar" buttonClass="tertiary" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
.navbar-default {
  width: 100%;
  background: color('secondaryLight', 'lightest');
  .container {
    padding: 1rem 0;
    align-items: center;
    .navbar-default__logo {
      img {
        height: 1.5rem;
      }
    }
    .navbar-default__list {
      display: flex;
      li {
        margin-right: 2rem;
        &:last-child {
          margin-right: 0;
        }
        a {
          color: color('dark', 'lightest');
          &:hover {
            color: color('dark', 'darkest');
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
