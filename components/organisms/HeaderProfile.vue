<template>
  <div class="header-profile col-span-12 grid grid-cols-12 gap-4">
    <div class="header-profile__avatar light-block col-span-3">
      <div class="header-profile__avatar_image">
        <ImageRounded
          :src="$user.avatar.url"
        />
      </div>
      <div class="header-profile__avatar-text p-6 flex flex-col">
        <span class="header-profile__avatar-role uppercase"
          >{{ $user.role }}</span
        >
        <p class="header-profile__avatar-name p-bold">{{ $user.name }}</p>
      </div>
    </div>
    <div class="header-profile__about col-span-6">
      <TitleWithMark text="Perfil" />
      <div class="header-profile__about-block light-block">
        <h4 class="uppercase">A minha biografia</h4>
        <hr />
        <p class="">
          {{ $user.bio }}
        </p>
      </div>
    </div>
    <div class="header-profile__social-media col-span-2">
      <h4 class="uppercase mb-3">Redes Sociais</h4>
      <hr />
      <ul class="header-profile__social-media-list mt-3">
        <SocialButton
          icon="linkedin"
          color="#0E72A3"
          :link="$user.socials.linkedin_url"
        />
        <SocialButton
          icon="twitter"
          color="#34B3F7"
          :link="$user.socials.twitter_url"
        />
        <SocialButton
          icon="github"
          161414
          color="#161414"
          :link="$user.socials.github_url"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users } from '@/store'
export default Vue.extend({
  computed: {
    $user() {
      return users.$single
    }
  }
})
</script>

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
