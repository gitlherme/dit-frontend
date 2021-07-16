<template>
  <nav class="navbar-default">
    <div class="container">
      <div class="navbar-default__logo">
        <img
          src="../../assets/images/logos/darkblue-dot-pink.svg"
          alt="Logo da DIT na cor azul escuro com um pontinho rosa."
        />
      </div>
      <ul class="navbar-default__list">
        <li><NuxtLink to="/"> Home </NuxtLink></li>
        <li><NuxtLink to="/#pricing"> Preços </NuxtLink></li>
        <li><NuxtLink to="/blog"> Dicas </NuxtLink></li>
      </ul>
      <div class="user">
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
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    .navbar-default__logo {
      img {
        height: 2.5rem;
      }
    }
    .user {
      button {
        &:first-child {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
