<template>
  <div class="event-card">
    <div class="intro">
      <div class="title">{{ data.title }}</div>
      <div class="text">
        {{ data.text }}
      </div>
    </div>
    <img :src="data.img" alt="" width="100" height="70" />
  </div>
</template>
<script>
export default {
  components: {},
  props: ["data"],
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.event-card {
  display: flex;
  img {
    display: block;
    height: 70px;
    width: 100px;
    flex: 100px;
  }
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 12px;
    padding: 4px 0;
    min-width: 0;
    .title {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .text {
      display: -webkit-box;
      font-size: $font-size-small;
      text-align: justify;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
