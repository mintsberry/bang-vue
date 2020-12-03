<template>
  <div>
    <div class="banner">
      <img src="http://img.polydt.com/hangbang/2.specContest/SpecialCompetition-banner4.png" alt />
    </div>
    <div class="bg-introduce">
      <div class="head">
        <div class="titleDiv">
          <p class="title">背景介绍</p>
          <p class="small-title">Background</p>
          <span class="titleBar"></span>
        </div>

        <div class="context">
          <p>作为来源广泛、清洁无碳、灵活高效、应用场景丰富的二次能源载体，氢能源被誉为人类的“终极能源”。 氢能是推动传统化石能源清洁高效利用和支撑可再生能源大规模发展的理想互联媒介， 也是实现交通，运输，工业和建筑等领域大规模深度脱碳的最佳选择。氢能及燃料电池逐步成为全球能源技术革命的重要方向。 加快发展氢能及燃料电池产业，是应对全球气候变化、保障国家能源供应安全和实现可持续发展的战略选择， 是探索以能源变革带动区域经济高质量发展的重要实践。</p>
          <div class="img">
            <div class="pic"></div>
            <img src="../assets/4.png" />
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
          <p class="col-list">1.储氢 （未来：有机液态储氢和固态储氢）</p>
          <p class="col-list">2.氢输运 （高压、液态氢罐和管道输运相结合）</p>
          <p class="col-list">3.加氢站（外供氢加氢站）</p>
          <p class="col-list">4.燃料电池堆（催化剂、质子交换膜、气体扩散层）等。</p>
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
    height: 508px;

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
        top: 222px;
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
