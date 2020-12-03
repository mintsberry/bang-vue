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
    font-size: 12px;
    transform: scale(0.5);
    margin-top: -5px;
  }
  .under-line {
    display: block;
    height: 4px;
    width: 33px;
    background: #2680bf;
    border-radius: 4px;
    margin: 0 auto;
  }
}
</style>
