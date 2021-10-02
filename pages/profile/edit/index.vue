<template>
  <EditProfileTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { userMain } from '@/store'
export default Vue.extend({
  middleware: 'auth',
  async asyncData() {
    try {
      await userMain.show()
    } catch {
      return alert('ops, ocorreu um eror')
    }
  }
})
</script>