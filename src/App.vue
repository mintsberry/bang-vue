<template>
  <app-header></app-header>
  <router-view />
  <app-footer></app-footer>
</template>
<script>
import "@/assets/reset.css";
import AppHeader from "@/components/public/AppHeader.vue";
import AppFooter from "@/components/public/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
<style lang="scss">
body {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
}

a {
  color: #666;
  text-decoration: none;
}

a:hover,
a:active {
  color: #0ae;
  text-decoration: underline;
}
</style>
