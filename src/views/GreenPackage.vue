<template>
  <div>
    <div class="banner">
      <img src="http://img.polydt.com/hangbang/2.specContest/SpecialCompetition-banner3.png" alt />
    </div>
    <div class="bg-introduce">
      <div class="head">
        <div class="titleDiv">
          <p class="title">背景介绍</p>
          <p class="small-title">Background</p>
          <span class="titleBar"></span>
        </div>

        <div class="context">
          <p>包装产业作为“朝阳产业”，必将对全球制造业发展及其产品的国际间流通产生不可低估的作用。 据估算，我国快递业每年消耗的纸类废弃物超过900万吨、塑料废弃物约180万吨，并呈快速增长趋势， 对环境造成的影响不容忽视。加强快递包装污染治理已受到政府和产业界的高度关注。绿色包装是指以环境友好、 资源节约为核心要素，在包装设计、研发、生产、使用和再生循环的全生命周期中，对生态环境和人类健康无害或危害小， 并且能够节能降耗，符合可持续发展的包装产品及相关技术。要实现快递包装的绿色化、减量化和可循环，还需要标准予以支撑。 目前，我国在快递包装上已出台一系列标准，涉及快递封套、包装袋、包装箱、生物降解胶带、电子运单等诸多方面， 为支撑快递业绿色发展发挥了积极作用。但随着快递业转型发展，与交通运输业、制造业等深度融合，在快递绿色包装新材料、 新技术、新产品，以及快递包装一体化运作等方面，还需要继续改善。</p>
          <div class="img">
            <div class="pic"></div>
            <img src="../assets/2.png" />
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
          <p class="col-list" style="font-weight: 600;font-size: 14px;">1.包装减量设计</p>
          <p class="col-list">绿色设计原则</p>
          <p class="col-list">包装减量设计</p>
          <p class="col-list">视觉色彩减量化设计</p>
          <p class="col-list">减量型包装的优化功能</p>
          <p class="col-list" style="font-weight: 600;font-size: 14px;">2.包装回收</p>
          <p class="col-list">有效快递包装回收体系建立</p>
          <p class="col-list">包装回收宣传与推广</p>
          <p class="col-list">包装回收的法律法规解读</p>
          <p class="col-list" style="font-weight: 600;font-size: 14px;">3.可降解包装</p>
          <p class="col-list">
            禁塑条件下，可降解包装材料与纸质包装材料/可食性包装材料竞争
            主要降解材料PLA、PHA、PBS、PBAT、淀粉基塑料在包装中的应用
          </p>
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
    height: 638px;

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
        top: 370px;
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
