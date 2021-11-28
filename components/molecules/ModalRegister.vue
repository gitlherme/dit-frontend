<template>
  <div
    v-show="visible"
    class="modal-register flex flex-col justify-center items-center"
  >
    <div
      class="
        modal-register__wrapper
        bg-white
        rounded-lg
        mx-5
        flex flex-col
        justify-center
        items-center
      "
    >
      <button
        class="close-modal cursor-pointer self-end mr-3 mt-1"
        @click="close()"
      ></button>
      <div
        class="
          modal-register__container
          p-20
          flex flex-col
          justify-center
          items-center
          gap-3
        "
      >
        <div class="modal-register__icon">
          <font-awesome-icon :icon="['fas', icon]" />
        </div>
        <div class="modal-register__title font-bold">
          {{ title }}
        </div>
        <div class="modal-register__content">
          {{ content }}
        </div>
        <NuxtLink
          :to="redirectTo"
          class="cursor-pointer font-bold primary-link"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'E-mail enviado',
    },
    content: {
      type: String,
      default: 'Por favor, verifique seu e-mail para confirmar seu registro.',
    },
    redirectTo: {
      type: String,
      default: '/login',
    },
    icon: {
      type: String,
      required: false,
      default: 'envelope-open-text',
    },
    buttonText: {
      type: String,
      default: 'Ok! =)',
    },
  },
  data() {
    return {
      modal: {
        visible: this.visible,
      },
    }
  },
  methods: {
    close() {
      this.modal.visible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-register {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  button {
    padding: .5rem .8rem;
  }
  .modal-register__wrapper {
    .close-modal {
      right: 0;
      top: 0;
      &::after {
        display: inline-block;
        content: '+';
        font-size: 2rem;
        font-weight: bold;
        transform: rotate(-45deg);
        color: color('secondary', 'dark');
      }
    }
    .modal-register__icon {
      font-size: 3rem;
      color: color('tertiary', 'lightest');
    }
  }
}
</style>
