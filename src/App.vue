<template>
  <app-header></app-header>
  <keep-alive>
    <router-view />
  </keep-alive>
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

#app {
  overflow: hidden;
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
p.small-title {
  color: 12px;
  font-size: 12px;
  transform: scale(0.5);
  margin-top: -5px;
}
span.titleBar {
  display: block;
  height: 4px;
  width: 33px;
  background: #2680bf;
  border-radius: 4px;
  margin: 0 auto;
}
p.title {
  font-size: 16px;
  font-weight: 600;
}
.titleDiv {
  margin-top: 15px;
  text-align: center;
}
.btnDiv {
  width: 77px;
  height: 22px;

  margin: 15px auto;
  .more {
    width: 100%;
    height: 100%;
    outline: none;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
