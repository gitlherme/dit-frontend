<template>
  <FinishRegisterTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '@/store'
export default Vue.extend({
  middleware: 'guest',
  layout: 'two-columns',
  async asyncData({ params, redirect}) {
    try {
      const key = params.key as string
      await userRegister.show({ key })
    } catch {
      return redirect('/404')
    }
  }
})
</script>