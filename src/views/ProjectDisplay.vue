<template>
  <div class="project-display">
    <div class="banner"></div>
    <!-- <div class="select-list">
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
    </div> -->
    <div class="project-list">
      <ProjectCard
        class="project-card"
        v-for="(item, index) in card"
        :key="index"
        :data="item"
        @click="clickCard"
      ></ProjectCard>
    </div>
    <div class="more">
      <span @click="clickMore" class="button">查看更多</span>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import router from "../router";
import ProjectCard from "../components/project/ProjectCard.vue";
export default {
  components: {
    ProjectCard
  },
  props: {},
  data() {
    return {};
  },
  setup() {
    const active = ref(1);
    function clickItem(index) {
      active.value = index;
    }

    const card = ref([
      {
        img: "http://img.polydt.com/hangbang/1.index/Project-1.png",
        title: "2020年“创客中国”生物医药中小企业创新创业大赛",
        time: "2020-09-05"
      },
      {
        img: "http://img.polydt.com/hangbang/1.index/Project-1.png",
        title: "2020年“创客中国”生物医药中小企业创新创业大赛",
        time: "2020-09-05"
      },
      {
        img: "http://img.polydt.com/hangbang/1.index/Project-1.png",
        title: "2020年“创客中国”生物医药中小企业创新创业大赛",
        time: "2020-09-05"
      },
      {
        img: "http://img.polydt.com/hangbang/1.index/Project-1.png",
        title: "2020年“创客中国”生物医药中小企业创新创业大赛",
        time: "2020-09-05"
      }
    ]);
    function clickMore() {
      for (let i = 0; i < 2; i++) {
        card.value.push({
          img: "http://img.polydt.com/hangbang/1.index/Project-1.png",
          title: "2020年“创客中国”生物医药中小企业创新创业大赛",
          time: "2020-09-05"
        });
      }
    }
    function clickCard() {
      router.push("/project-detail");
    }
    return {
      clickItem,
      active,
      card,
      clickCard,
      clickMore
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
  .project-list {
    margin: 24px 0;
    margin-top: 0;
    .project-card {
      padding: 12px 20px;
      border-bottom: 1px solid #dcdde0;
    }
  }
  .more {
    margin-bottom: 24px;
    text-align: center;
    .button {
      margin-top: 28px;
      box-sizing: border-box;
      border: 1px solid #999;
      width: 78px;
      height: 24px;
      padding: 6px 12px;
      border-radius: 4px;
      clear: both;
    }
  }
}
</style>
