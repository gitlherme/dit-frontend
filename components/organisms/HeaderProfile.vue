<template>
  <div
    class="
      header-profile
      col-span-12
      row-start-1 row-end-4
      grid grid-cols-12
      gap-4
      mt-5
    "
  >
    <div class="header-profile__avatar rounded-3xl col-span-3 h-full">
      <img
        src="../../assets/images/avatar.png"
        class="header-profile__avatar-img rounded-t-3xl"
      />
      <div class="header-profile__avatar-text p-6 flex flex-col">
        <span class="header-profile__avatar-role uppercase"
          >Front-end Developer</span
        >
        <span class="header-profile__avatar-name">Fernando Costa Marinho</span>
        <span class="header-profile__avatar-save-cv">+ Salvar Currículo</span>
      </div>
    </div>
    <div class="header-profile__about col-span-7 h-full">
      <h1>Perfil</h1>
      <div class="header-profile__about-block rounded-3xl p-6">
        <h4 class="uppercase mb-3">A minha biografia</h4>
        <hr />
        <p class="mt-3 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat
          lorem consectetur et interdum dui, aliquet. Auctor amet ornare commodo
          magnis nullam facilisis. In posuere pellentesque a consequat. Aliquam
          neque in odio quam. Eget vitae ultricies vitae arcu, est diam tellus,
          sit. Pellentesque amet urna bibendum lacus, a, adipiscing et felis
          laoreet. Tempor viverra vehicula amet, vivamus vitae lacus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat lorem
          consectetur et interdum dui, aliquet. Auctor amet ornare commodo
          magnis nullam facilisis. In posuere pellentesque a consequat. Aliquam
          neque in odio quam. Eget vitae ultricies vitae arcu, est diam tellus,
          sit. Pellentesque amet urna bibendum lacus, a, adipiscing et felis
          laoreet. Tempor viverra vehicula amet, vivamus vitae lacus.
        </p>
      </div>
      <ul class="tag-list">
        <TagItem />
        <TagItem />
        <TagItem />
      </ul>
    </div>
    <div class="header-profile__social-media rounded-3xl p-6 col-span-2 h-full">
      <h4 class="uppercase mb-3">Redes Sociais</h4>
      <hr />
      <ul class="header-profile__social-media-list mt-3">
        <SocialButton icon="linkedIn" link="https://google.com/" />
        <SocialButton icon="twitter" link="https://google.com/" />
        <SocialButton icon="github" link="https://google.com/" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
h1 {
  font-size: 80px;
  margin: 0;
  padding: 0;
}
.header-profile__avatar {
  .header-profile__avatar-img {
    width: 100%;
  }
  .header-profile__avatar-role {
    font-size: 1rem;
    font-weight: 300;
  }
}

.header-profile__about-block,
.header-profile__social-media {
  h4 {
    font-weight: 300;
    font-size: 1.15rem;
  }
}

.header-profile__social-media {
  background-color: color('secondaryLight', 'base');
}

.header-profile__avatar,
.header-profile__about-block {
  background: color('secondaryLight', 'lightest');
}
</style>
