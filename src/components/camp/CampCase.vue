<template>
  <div
    class="camp-case"
    id="case1"
    :style="{ background: 'url(' + data.img + ')' }"
  >
    <span class="title">{{ data.title }}</span
    ><br />
    <span class="text"><a href="#">【项目背景及需求】</a></span
    ><br />
    <span class="text"><a href="#">【夯邦加速服务成果】</a></span
    ><br />
    <span class="text"><a href="#">【夯邦服务过程】</a></span
    ><br />
  </div>
</template>
<script>
export default {
  components: {},
  props: ["data"]
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.camp-case {
  margin: 0 auto;
  width: 280px;
  height: 311px;
  box-sizing: border-box;
  text-align: center;
  background: no-repeat;
  .title {
    display: inline-block;
    height: 170px;
    width: 200px;
    box-sizing: border-box;
    padding-top: 12px;
    font-weight: 600;
    text-align: center;
    font-size: $font-size-medium-x;
    font-weight: bold;
  }
  .text {
    display: inline-block;
    height: 35px;
    width: 160px;
    line-height: 35px;
    a {
      color: $color-text;
    }
  }
}
</style>
