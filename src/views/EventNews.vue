<template>
  <div class="event-news">
    <div class="banner"></div>
    <ContextTitle
      class="title"
      :title="'赛事动态'"
      :smallTitle="'Event news'"
    />
    <div class="card">
      <EventCard
        class="event-card"
        v-for="(item, index) in card"
        :key="index"
        :data="item"
      />
    </div>
    <div class="more">
      <span @click="more" class="button">查看更多</span>
    </div>
  </div>
</template>
<script>
import ContextTitle from "../components/public/ContextTitle.vue";
import EventCard from "../components/event/EventCard.vue";
import { ref } from "vue";
export default {
  components: {
    ContextTitle,
    EventCard
  },
  setup() {
    const card = ref([
      {
        img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
        title: "2020年“创客中国”生物医药中小企业创新",
        text:
          "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
      },
      {
        img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
        title: "创客中国”江西省中小企业创新创业大赛",
        text:
          "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
      },
      {
        img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
        title: "2020年“创客中国”生物医药中小企业创新",
        text:
          "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
      },
      {
        img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
        title: "创客中国”江西省中小企业创新创业大赛",
        text:
          "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
      },
      {
        img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
        title: "2020年“创客中国”生物医药中小企业创新",
        text:
          "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
      },
      {
        img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
        title: "创客中国”江西省中小企业创新创业大赛",
        text:
          "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
      }
    ]);
    function more() {
      card.value = card.value.concat([
        {
          img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
          title: "2020年“创客中国”生物医药中小企业创新",
          text:
            "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
        },
        {
          img: "http://img.polydt.com/hangbang/6.contestNews/EventNews-1.png ",
          title: "创客中国”江西省中小企业创新创业大赛",
          text:
            "苏州市生物医药产业起步早且基础扎实，经过多年积累，目前，在国内认可度高，在行业评估中"
        }
      ]);
    }
    return {
      card,
      more
    };
  }
};
</script>
<style lang="scss" scoped>
.event-news {
  .banner {
    width: 100%;
    height: 175px;
    background: url(http://img.polydt.com/hangbang/6.contestNews/EventNews-banner.png)
      no-repeat;
    background-position-x: -450px;
    background-size: cover;
  }
  .title {
    margin: 16px 0;
  }
  .event-card {
    border-top: 1px solid #dcdde0;
    padding: 16px 24px;
    // margin: px 0;
    &:last-of-type {
      border-bottom: 1px solid #dcdde0;
      margin-bottom: 24px;
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
