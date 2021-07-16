<template>
  <div class="footer-default">
    <div class="footer-default__logo">
      <img
        src="../../assets/images/logos/white-dot-pink.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="footer-default__text">
      <strong>2021.</strong> Todos os direitos reservados.
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.footer-default {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: color('light', 'lightest');
  background: color('primaryDark', 'darkest');
  height: 72px;
  .footer-default__logo {
    img {
      height: 1.5rem;
    }
  }
  .footer-default__text {
    margin-left: 1rem;
  }
}
</style>
