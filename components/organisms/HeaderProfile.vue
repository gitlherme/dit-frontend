<template>
  <div class="header-profile col-span-12 grid grid-cols-12 gap-4">
    <div class="header-profile__avatar light-block col-span-4">
      <div class="header-profile__avatar_image">
        <ImageRounded
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      </div>
      <div class="header-profile__avatar-text p-6 flex flex-col">
        <span class="header-profile__avatar-role uppercase"
          >Front-end Developer</span
        >
        <p class="header-profile__avatar-name p-bold">Ana Beatriz Carvalho</p>
        <p class="header-profile__avatar-save-cv p-bold">+ Salvar Currículo</p>
      </div>
    </div>
    <div class="header-profile__about col-span-6">
      <TitleWithMark text="Perfil" />
      <div class="header-profile__about-block light-block">
        <h4 class="uppercase">A minha biografia</h4>
        <hr />
        <p class="">
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
        <ul class="tag-list flex gap-4">
          <TagItem label="TechLover" color="#E3AB3E" />
          <TagItem label="Pai de Pet" color="#30ADF3" />
        </ul>
      </div>
    </div>
    <div class="header-profile__social-media col-span-2">
      <h4 class="uppercase mb-3">Redes Sociais</h4>
      <hr />
      <ul class="header-profile__social-media-list mt-3">
        <SocialButton
          icon="linkedin"
          color="#0E72A3"
          link="https://google.com/"
        />
        <SocialButton
          icon="twitter"
          color="#161414"
          link="https://google.com/"
        />
        <SocialButton
          icon="github"
          color="#34B3F7"
          link="https://google.com/"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.header-profile {
  .header-profile__avatar {
    padding: 0;
  }
  .header-profile__about {
    .header-profile__about-block {
      h4,
      hr,
      ul,
      p {
        margin-bottom: 1rem;
      }
    }
  }
  .header-profile__social-media {
    background-color: color('secondaryLight', 'base');
    padding: 1rem;
    border-radius: 0.5rem;
  }
}
</style>
