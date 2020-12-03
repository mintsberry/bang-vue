<template>
  <div>
    <div class="banner">
      <img src="http://img.polydt.com/hangbang/2.specContest/SpecialCompetition-banner2.png" alt />
    </div>
    <div class="bg-introduce">
      <div class="head">
        <div class="titleDiv">
          <p class="title">背景介绍</p>
          <p class="small-title">Background</p>
          <span class="titleBar"></span>
        </div>

        <div class="context">
          <p>
            在电子设备高性能、小型化发展趋势下，散热设计在电子设备开发中重要性越来越大。在消费电子领域，硬件设备的泛智能化时代到来，高精密度的智能手机、 笔记本电脑等产品对导热\散热等需求迫切。特别是5G的建设将会带来大量的基站建设投入，导热产品在通信领域同样有着广泛应用；而在新兴领域中，汽车电子、 数据中心等领域，都对及时散热需求越来越强烈；长期看，物联网车联网等驱动数据中心需求新增长，AR/VR等新应用终端兴起，带来散热市场广阔的长期增长空间。
            对于国内研究单位和企业而言，一旦自主的技术和品牌通过市场验证和终端厂家认证，凭借技术和成本优势，下游主流国内模切件的制造商将很有动力采用国产品牌材料， 从而会迅速优化产品迭代，提高产品市场份额，实现国内热管理材料的快速发展。
            以5G为例，热管/均热板将从笔点、服务器领域向智能手机渗透，随着5G手机换机潮和基站建设高峰到来，全球5G智能手机和国内基站散热市场规模有望在2020-2022 年间分别达到360亿和59亿元。
          </p>
          <div class="img">
            <div class="pic"></div>
            <img src="../assets/5.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="collect-direction">
      <div class="titleDiv">
        <p class="title">征集方向</p>
        <p class="small-title">Collection direction</p>
        <span class="titleBar"></span>
      </div>
      <div class="colContent">
        <p class="col-title">包括但不限于</p>
        <div class="col-listDiv">
          <p class="col-list">1.热设计软件模块开发，热设计方案</p>
          <p class="col-list">
            2.高导热\散热材料:石墨/石墨烯散热片，热界面材料，热管/均热板，相变材料,
            液态金属，导热填料等。
          </p>
          <p class="col-list">3.热管理模块整体解决方案。</p>
        </div>
      </div>
    </div>
    <Project></Project>
  </div>
</template>

<script>
import Project from '@/components/public/Project'
export default {
  methods: {
    showMore() {},
  },
  components: {
    Project,
  },
}
</script>

<style lang="scss" scoped>
@import '../common/scss//variable.scss';

.banner {
  width: 100%;
  img {
    width: 100%;
    height: 175px;
  }
}
.bg-introduce {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 20px;
  .head {
    text-align: center;
    height: 680px;

    .context {
      text-indent: 1.5em;
      text-align: justify;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;

      width: 327px;

      margin-top: 20px;
      padding-left: 24px;
      padding-right: 24px;
    }
    .img {
      text-align: center;
      height: 130px;
      margin-top: 15px;
      .pic {
        position: absolute;
        top: 410px;
        left: 47px;
        width: 273px;
        height: 150px;
        border: 1px solid $color-border-bottom;
        box-sizing: border-box;
        z-index: -1;
      }
      img {
        margin: 10px auto;
        height: 175px;
        width: 283px;
      }
    }
  }
}
.collect-direction {
  width: 100%;

  box-sizing: border-box;
  background-image: url('../common/images/Collection-direction1.png');
  padding-top: 1px;
  padding-bottom: 20px;
  .colContent {
    .col-title {
      width: 268px;
      height: 29px;
      line-height: 29px;
      text-align: left;

      background: rgba(181, 219, 242, 1);
      font-weight: 600;
      box-sizing: border-box;
      padding-left: 16px;
      margin: 17px;
    }
    .col-listDiv {
      font-size: $font-size-small;
      color: #666666;
      width: 90%;
      .col-list {
        line-height: 20px;
        margin-left: 28px;
      }
    }
  }
}
.project {
  width: 100%;

  .enroll-project {
    margin-top: 17px;
    position: relative;
    left: 9px;
    img {
      width: 101px;
      margin-bottom: -12px;
    }
  }
  .projectlist {
    width: 353px;
    height: 73px;
    margin: 12px auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 10px;
    font-size: $font-size-small;
    position: relative;
    .projectTime {
      position: absolute;
      right: 15px;
      top: 7px;
      font-size: $font-size-medium-x;
      transform: scale(0.5);
    }
    .tagDiv {
      position: absolute;
      top: 31px;
      .tag {
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        height: 22px;
        line-height: 22px;
        border: 1px solid rgba(222, 155, 51, 1);
        color: rgba(222, 155, 51, 1);
        font-size: $font-size-small;
        text-align: center;
        margin-right: 6px;
        margin-top: 10px;
      }
    }
  }
  .btnDiv {
    width: 77px;
    height: 22px;
    margin: 10px auto;
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
}
</style>
