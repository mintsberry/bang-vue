<template>
  <div class="project-display">
    <div class="banner"></div>
    <div class="select-list">
      <div
        class="item"
        :class="active === 1 ? 'active' : ' '"
        @click="clickItem(1)"
      >
        <span>阶段</span>
        <i class="iconfont icon-down"></i>
      </div>
      <div
        class="item"
        :class="active === 2 ? 'active' : ' '"
        @click="clickItem(2)"
      >
        <span>地域</span>
        <i class="iconfont icon-down"></i>
      </div>
      <div
        class="item"
        :class="active === 3 ? 'active' : ' '"
        @click="clickItem(3)"
      >
        <span>材料</span>
        <i class="iconfont icon-down"></i>
      </div>
      <div
        class="item"
        :class="active === 4 ? 'active' : ' '"
        @click="clickItem(4)"
      >
        <span>应用</span>
        <i class="iconfont icon-down"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  setup() {
    const active = ref(1);
    function clickItem(index) {
      active.value = index;
    }
    return {
      clickItem,
      active
    };
  }
};
</script>
<style lang="scss" scoped>
.project-display {
  margin-bottom: 32px;
  .banner {
    width: 100%;
    height: 175px;
    background: url(http://img.polydt.com/hangbang/1.index/ProjectContent-banner.png)
      no-repeat;
    background-size: cover;
  }
  .select-list {
    display: flex;
    height: 40px;
    .item {
      box-sizing: border-box;
      flex: 1;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #dfdfdf;
      border-top: 0;
      border-left: 0;
      &:last-child {
        border-right: 0;
      }
      &.active {
        color: #3588c1;
        background-color: #f2f4f9;
        border-bottom: 2px solid #3588c1;
      }
      span {
        font-weight: bold;
      }
      .iconfont {
        position: absolute;
        left: 70px;
        top: 8px;
      }
    }
  }
}
</style>
