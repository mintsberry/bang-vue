<template>
  <div>
    <div class="banner">
      <img src="../common/images/SpecialCompetition-banner1.png" alt />
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
            在复杂国际环境下，从业界到大众，围绕着一些企业“缺芯”问题展开了深入的思考，也看到了目前中国对于半导体芯片及材料国产替代的大量需求，然而中国半导体芯片技术和国外差距仍然巨大。但是由于目前摩尔定律的放缓，对于材料及技术的升级需求相对放缓，中国厂商具备了该赛道上追赶甚至超车的机会。
            虽然中国在芯片产业链建设上已经取得了一定的成果，但要推动芯片产业的长线发展，不仅仅是政策支持与走姿的问题。为了推动中国芯片产业发展，需进一步探索科研与企业联动的发展模式。
          </p>
          <p>先进半导体创新赛将以打造“中国芯”为重点方向，面向全球招募优秀项目与团队，协助国内优秀项目与投资对接，实现落地合作。</p>
          <div class="pic"></div>
          <img src="../assets/1.png" />
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
        <p class="col-title">1.半导体集成电路和半导体芯片的设计</p>
        <div class="col-listDiv">
          <p class="col-list">逻辑芯片设计</p>
          <p class="col-list">5G射频芯片设计</p>
          <p class="col-list">存储芯片设计</p>
          <p class="col-list">CPU芯片设计</p>
          <p class="col-list">系统架构设计</p>
          <p class="col-list">EDA等仿真工具和软件的开放</p>
        </div>
        <p class="col-title">2.泛半导体材料</p>
        <div class="col-listDiv">
          <p class="col-list">CMP抛光液，抛光垫，光刻胶，光掩膜，湿化学品，IC载板等。</p>
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
  }
}
.bg-introduce {
  width: 100%;
  height: 560px;

  position: relative;
  margin-top: 20px;
  .head {
    text-align: center;
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
    .pic {
      position: absolute;
      top: 290px;
      left: 37px;
      width: 273px;
      height: 130px;
      border: 1px solid $color-border-bottom;
      box-sizing: border-box;
    }
    img {
      position: absolute;
      left: 50%;
      top: 300px;
      transform: translateX(-50%);
      width: 283px;
    }
  }
}
.collect-direction {
  width: 100%;
  height: 375px;
  box-sizing: border-box;
  background-image: url('../common/images/Collection-direction1.png');
  padding-top: 1px;
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
  height: 415px;
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
