<template>
  <div class="acceleration-camp">
    <img
      class="banner"
      src="http://img.polydt.com/hangbang/4.accelerationCamp/AccelerationCamp-banner.png"
      height="175"
    />
    <div class="introduction">
      <ContextTitle
        class="title"
        :title="'加速营简介'"
        :small-title="'Introduction to the camp'"
      ></ContextTitle>
      <div class="text">
        夯邦加速营，是夯邦国际制造创新挑战赛的核心服务。加速营服务宗旨是帮助中国园区吸引全球优选创新项目落地招商，帮助中国制造企业、投资机构、高效对接优质项目合作机会和投资机会，最终实现全球优质项目中国市场落地。
      </div>
      <div class="img"></div>
      <div class="text-list">
        <i class="iconfont icon-diamond"></i>
        <div class="context">
          <span class="summary">中国落地资讯:</span>
          <span class="words"
            >提供中国市场战略和中国发展计划资讯，帮助项目完善和打磨融资商业计划书。</span
          >
        </div>
      </div>
      <div class="text-list">
        <i class="iconfont icon-diamond"></i>
        <div class="context">
          <span class="summary">投资机会合作:</span
          ><span class="words"
            >为中国园区、企业和投资者提供项目对接服务，实现与项目方投资合作。</span
          >
        </div>
      </div>
      <div class="text-list">
        <i class="iconfont icon-diamond"></i>
        <div class="context">
          <span class="summary">投资机会合作:</span
          ><span class="words"
            >为中国园区、企业和投资者提供项目对接服务，实现与项目方投资合作。</span
          >
        </div>
      </div>
      <div class="text-list">
        <i class="iconfont icon-diamond"></i>
        <div class="context">
          <span class="summary">项目注册落地:</span
          ><span class="words"
            >帮助协助项目在目标中国园区注册落地，组建中国运营团队，实现落地转化。</span
          >
        </div>
      </div>
      <div class="text-list">
        <i class="iconfont icon-diamond"></i>
        <div class="context">
          <span class="summary">深度资源对接:</span
          ><span class="words"
            >为项目对接发展所需的检测平台、专业孵化平台、市场渠道、产品认证等资源。</span
          >
        </div>
      </div>
    </div>
    <div class="support">
      <ContextTitle
        class="title"
        :title="'加速营资源保障'"
        :small-title="'Accelerating camp resource support'"
      ></ContextTitle>
      <img src="../common/images/fund.png" width="200" height="200" alt="" />
      <div class="context" v-for="(item, index) in support" :key="index">
        <div class="text-title">
          <span class="num">{{ "0" + (index + 1) }}</span>
          <span class="title">{{ item.title }}</span>
        </div>
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
    <div class="classic">
      <ContextTitle
        class="title"
        :title="'经典案例'"
        :small-title="'Classic cases'"
      ></ContextTitle>
      <CampCase
        class="camp-case"
        v-for="(item, index) in classic"
        :key="index"
        :data="item"
      ></CampCase>
      <div class="more">
        <span class="button">查看更多</span>
      </div>
    </div>
  </div>
</template>
<script>
import ContextTitle from "../components/public/ContextTitle.vue";
import CampCase from "../components/camp/CampCase.vue";
export default {
  components: {
    ContextTitle,
    CampCase
  },
  setup() {
    const support = [
      {
        title: "中外服务团队",
        text:
          "由中国、国际专业团队组成，拥有多个跨境成功案例服务经验，与全球项目团队建立了紧密的协同合作关系，能够根据中国园区、投资机构和企业的具体需求，高效链接全球优质项目。"
      },
      {
        title: "夯邦基金",
        text:
          "夯邦拥有自己的早期投资基金，对于进入跨境加速营的优质项目，美柏基金将在投资方面发挥引导作用，组织引导其他中方投资者投资项目。"
      },
      {
        title: "产业加速营地",
        text:
          "夯邦在中国的上海、南京、宁波等建立了产业加速营地，可协助全国各地专业园区建立联合工作团队，协助合作企业和投资机构高效合作，帮助项目对接落地。"
      },
      {
        title: "专业导师团队",
        text:
          "为每跨境加速项目配备1名责任导师，2-3名辅导导师，为项目提供进入中国市场战略、发展计划、融资策略咨询，协助中国园区、投资机构和企业与项目对接落地。"
      },
      {
        title: "专业顾问团队",
        text:
          "由园区招商负责人、企业、投资机构负责人等组成。将基于自身的实际招引、投资、合作的需求，对项目进行评估、推荐，并可与意向项目进行实质商务洽谈、对接合作。"
      }
    ];
    const classic = [
      {
        img:
          "http://img.polydt.com/hangbang/4.accelerationCamp/ClassicCsaes-1.png",
        title: "案例一",
        text: ["项目背景及需求", "夯邦加速服务成果", "夯邦服务过程"]
      },
      {
        img:
          "http://img.polydt.com/hangbang/4.accelerationCamp/ClassicCsaes-2.png",
        title: "案例二",
        text: ["项目背景及需求", "夯邦加速服务成果", "夯邦服务过程"]
      },
      {
        img:
          "http://img.polydt.com/hangbang/4.accelerationCamp/ClassicCsaes-3.png",
        title: "案例三",
        text: ["项目背景及需求", "夯邦加速服务成果", "夯邦服务过程"]
      }
    ];
    return {
      support,
      classic
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../common/scss/variable.scss";
.acceleration-camp {
  .banner {
    height: 175px;
    width: 100%;
    object-fit: cover;
  }
  .title {
    padding-top: 16px;
  }
  .introduction {
    margin: 0 32px 32px;
    .text {
      margin: 16px 0px;
      text-indent: 2em;
    }
    .img {
      margin: 0 auto 24px;
      width: 250px;
      height: 150px;
      background: url(http://img.polydt.com/hangbang/4.accelerationCamp/Introduction.png)
        no-repeat 100% 100%;
    }
    .text-list {
      display: flex;
      margin-bottom: 16px;
      .iconfont {
        margin: 2px;
        color: #699ec5;
        font-size: $font-size-small;
      }
      .summary {
        margin-left: 10px;
        font-weight: bold;
      }
      .words {
        margin-left: 6px;
      }
    }
  }
  .support {
    padding: 0 24px 32px;
    // text-align: center;
    background: url(../common/images/fund-bg.png) no-repeat 100% 100%;
    background-position-y: -310px;
    img {
      display: block;
      margin: 16px auto 32px;
      width: 200;
      height: 200;
    }
    .context {
      margin-bottom: 16px;
      .text-title {
        margin-bottom: 8px;
        .num {
          font-size: $font-size-large;
          color: #eca428;
          font-weight: bold;
        }
        .title {
          margin-left: 4px;
          font-size: $font-size-medium-x;
          font-weight: bold;
          color: $color-text;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .classic {
    margin: 0 32px 32px;
    text-align: center;
    .camp-case {
      margin-top: 16px;
    }
    .more {
      margin-top: 24px;
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
}
</style>
