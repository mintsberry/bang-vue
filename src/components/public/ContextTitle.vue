<template>
  <div class="context-title">
    <p class="title">{{ title }}</p>
    <p class="small-title">{{ smallTitle }}</p>
    <span class="under-line"></span>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["title", "smallTitle"]
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.context-title {
  text-align: center;
  .title {
    font-size: $font-size-large;
    font-weight: bold;
  }
  .small-title {
    color: #a1a4a9;
    transform: scale(0.6);
  }
  .under-line {
    display: block;
    height: 4px;
    width: 65px;
    background: #2680bf;
    border-radius: 4px;
    margin: 5px auto;
  }
}
</style>
