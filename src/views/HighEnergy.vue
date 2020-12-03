<template>
  <div>
    <div class="banner">
      <img src="http://img.polydt.com/hangbang/2.specContest/SpecialCompetition-banner5.png" alt />
    </div>
    <div class="bg-introduce">
      <div class="head">
        <div class="titleDiv">
          <p class="title">背景介绍</p>
          <p class="small-title">Background</p>
          <span class="titleBar"></span>
        </div>

        <div class="context">
          <p>自从工信部等四部委印发了《促进汽车动力电池产业发展行动方案》， 将提高电池比能量作为重点发展目标之一，在技术方向如此明显的政策引导下， 新能源整车企业和电池企业开始不遗余力地提高车用动力电池的能量密度。 存储设备的能量密度是决定在给定场景中使用哪个存储设备时需要考虑的重要因素。 如果一个存储设备比另一个具有更大的能量密度，这意味着它可以更小和/或更轻，同时包含相同数量的能量。 考虑到这一点，像手机这样的小型科技设备需要一个高能量密度的电池，因为它必须是轻巧和紧凑的。 然而，汽车可以牺牲质量的增加而使用能量密度较低的电池，因为与其他部件相比，它的电池质量并没有那么大。 储能装置既可用作系统的能源供应，也可用作储存发电机能量的装置。例如，铅酸电池可以为汽车提供电能， 而锂离子电池可以用来为手机储存能量。与燃料相比，储能器的优点是能够重新充电，而无需向系统中添加更多材料。 对于储能装置来说，具有高能量密度更为有用。这意味着该设备将能够在更长的时间内提供能量，这对于便携式电子设备或车辆来说是最理想的。 但是，如果存储设备具有较大的能量密度，则功率密度通常会受到影响。 当前，在大多数商业化的锂离子电池（LIBs）中，通常使用两种负极活性材料有两种。 一，最常见的是石墨，它的能量密度较高，配置石墨负极的LIBs可以供汽车行驶数百英里而无需充电。 但是快充过程中锂金属容易在负极一侧沉积产生锂枝晶，这带来了极其严重的安全隐患。 二，钛酸锂，一种较安全的替代品，可以实现快速充电，但通常会导致能量密度显著下降。 总而言之，高性能储能器件的开发对未来便携式电子设备、电动汽车及智能电网的快速发展有着至关重要的作用。</p>
          <div class="img">
            <div class="pic"></div>
            <img src="../assets/3.png" />
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
          <p class="col-list">2.超高能量密度之超级电容器</p>
          <p class="col-list">3.高能量密度之新型电极材料热管理模块整体解决方案。</p>
          <p class="col-list">4.高能量密度之全固态锂硫电池</p>
          <p class="col-list">5.碳基材料的高能量密度设计</p>
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
    height: 930px;

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
        top: 660px;
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
