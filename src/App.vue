<template>
  <app-header></app-header>
  <router-view />
  <app-footer></app-footer>
</template>
<script>
import '@/assets/reset.css'
import AppHeader from '@/components/public/AppHeader.vue'
import AppFooter from '@/components/public/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
