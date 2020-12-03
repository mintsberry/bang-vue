<template>
  <div class="footer">
    <div class="title">
      <span>赞助合作:</span>
    </div>
    <div class="box">
      <div class="left">
        <div class="internal">
          <p>联系人(中国)</p>
          <p>韩老师</p>
          <p>18958323273</p>
          <p>xiaoxiahan@polydt.com.com</p>
        </div>
        <div class="internationnal">
          <p>联系人（国际）</p>
          <p>LUNA</p>
          <p>18657495805</p>
          <p>luna@carbontchlobal.cn</p>
        </div>
      </div>
      <div class="right">
        <div class="net">
          <p>官网</p>
          <p>http://www.hangbangdt.com/</p>
        </div>
        <div class="code">
          <p>公众号</p>
          <img src="http://img.polydt.com/hangbang/二维码.png" alt="code" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="copyright">Copyri 2020 浙ICP备 10036275号 -2</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.footer {
  font-size: $font-size-medium-x;
  color: #b3b6dd;
  width: 100%;
  height: 264px;
  background-color: $color-background;
  position: relative;

  .title {
    font-size: $font-size-medium;
    padding: 25px 25px;
  }
  .box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    line-height: 1.8;
    margin-top: -60px;
    position: relative;
    .left {
      box-sizing: border-box;

      transform: scale(0.625);
      position: absolute;
      top: 0px;
      .internationnal {
        margin-top: 20px;
      }
    }
    .right {
      box-sizing: border-box;

      transform: scale(0.625);
      position: absolute;
      top: 10px;
      right: -25px;
      .code {
        margin-top: 20px;
        img {
          margin-top: 7px;
          width: 77px;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 40px;
    background-color: $color-background-d;
    position: absolute;
    bottom: 0;
    .copyright {
      font-size: $font-size-small;
      text-align: center;
      line-height: 40px;
      color: #777;
    }
  }
}
</style>
