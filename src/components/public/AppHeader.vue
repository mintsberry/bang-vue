<template>
  <div class="header">
    <div class="top">
      <div class="header-left">
        <i class="iconfont icon-list" @click="switchNav"></i>
      </div>
      <div class="header-center">
        <img class="logo" src="../../common/images/logo.png" alt />
      </div>
      <div class="header-right">
        <div class="language">
          <span class="active">中</span>
          /
          <span>EN</span>
        </div>
        <i class="iconfont icon-index"></i>
      </div>
    </div>
    <nav class="nav" v-show="showNav" @click="switchNav">
      <template v-for="(item, index) in routers" :key="index">
        <router-link
          tag="div"
          :to="item.path"
          class="nav-item"
          active-class="active"
          >{{ item.name }}</router-link
        >
      </template>
    </nav>
    <div class="mask" v-show="showMask" @click="switchNav"></div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      showNav: false,
      showMask: false,
      routers: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "专题赛",
          path: "/spec-contest"
        },
        {
          name: "定制赛",
          path: "/custom-contest"
        },
        {
          name: "加速赛",
          path: "/acceleration-camp"
        },
        {
          name: "导师与顾问",
          path: "/advisor"
        },
        {
          name: '赛事动态',
          path: "/event-news"
        },
        {
          name: '关于夯邦',
          path: '/about',
        },
      ],
    }
  },
  computed: {},
  methods: {
    switchNav() {
      this.showNav = !this.showNav
      this.showMask = !this.showMask
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.header {
  .top {
    display: flex;
    margin: 0 16px;
    height: 50px;
    line-height: 50px;
    align-items: center;
    justify-content: space-between;
    .iconfont {
      color: $color-text-d;
      font-size: $font-size-large-x;
      font-weight: bold;
    }
    .header-left {
      flex: 1;
    }
    .header-center {
      flex: 1;
      text-align: center;
      .logo {
        height: 28px;
        vertical-align: middle;
      }
    }
    .header-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      font-size: $font-size-small;
      color: $color-text-ll;
      .language {
        margin-right: 12px;
        .active {
          color: $color-text;
        }
      }
    }
  }
  .nav {
    position: absolute;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    text-align: center;
    .nav-item {
      display: block;
      height: 50px;
      line-height: 50px;
      border-top: 1px solid #d2d2d2;
      font-size: $font-size-medium;
      font-weight: bold;
      color: $color-text;
      text-decoration: none;
      &.active {
        color: #277fbc;
      }
      &:last-child {
        border-bottom: 1px solid #d2d2d2;
      }
    }
  }
  .mask {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>
