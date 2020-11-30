<template>
  <div>
    <div class="banner">
      <img src="../common/images/SpecialCompetition-banner1.png" alt />
    </div>
    <div class="bg-introduce">
      <div class="head">
        <h1>背景介绍</h1>
        <span>Background</span>
        <div class="context">
          <p>
            在复杂国际环境下，从业界到大众，围绕着一些企业“缺芯”问题展开了深入的思考，也看到了目前中国对于半导体芯片及材料国产替代的大量需求，然而中国半导体芯片技术和国外差距仍然巨大。但是由于目前摩尔定律的放缓，对于材料及技术的升级需求相对放缓，中国厂商具备了该赛道上追赶甚至超车的机会。
            虽然中国在芯片产业链建设上已经取得了一定的成果，但要推动芯片产业的长线发展，不仅仅是政策支持与走姿的问题。为了推动中国芯片产业发展，需进一步探索科研与企业联动的发展模式。
          </p>
          <p style="margin-top:-10px">先进半导体创新赛将以打造“中国芯”为重点方向，面向全球招募优秀项目与团队，协助国内优秀项目与投资对接，实现落地合作。</p>
          <div class="pic"></div>
          <img src="../assets/1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../common/scss//variable.scss';
.banner {
  width: 100%;
  img {
    width: 100%;
    height: 150px;
  }
}
.bg-introduce {
  width: 100%;
  height: 1110px;
  font-size: $font-size-large-x;
  position: relative;

  .head {
    font-size: $font-size-small-s;
    text-align: center;

    h1 {
      font-size: $font-size-large;
      margin-bottom: 5px;
    }
    span {
      margin: 0 auto;
      font-size: $font-size-small;
      display: block;
      width: 75px;
      height: 25px;
      border-bottom: 2px solid $color-border-bottom;
    }
    .context {
      text-indent: 1.5em;
      text-align: justify;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      font-size: $font-size-medium;
      line-height: 25px;
      width: 95%;
      height: 500px;
    }
    .pic {
      position: absolute;
      top: 365px;
      width: 75%;
      margin: 28px;
      height: 164px;
      border: 1px solid $color-border-bottom;
    }
    img {
      position: absolute;
      left: 50%;
      top: 400px;
      transform: translateX(-50%);
      width: 80%;
    }
  }
}
</style>
