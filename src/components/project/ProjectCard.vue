<template>
  <div class="project-card">
    <div
      class="card-left"
      :style="{ backgroundImage: 'url(' + data.img + ')' }"
    ></div>
    <div class="card-center">
      <p class="title">
        <a>{{ data.title }} </a>
      </p>
      <p class="timeLine">
        <span class="time">{{ data.time }}</span>
      </p>
    </div>
    <div class="card-right">
      <p>
        <button class="btn">战略联盟</button>
      </p>
      <p>
        <button class="btn">项目初期</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["data"]
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.project-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  .card-left {
    flex: 0 0 80px;
    width: 80px;
    height: 60px;
    background: url(http://img.polydt.com/hangbang/1.index/Project-1.png)
      no-repeat 100% 100%;
    background-size: cover;
  }
  .card-center {
    flex: 1;
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: space-between;
    .title {
      line-height: 1.2;
      text-align: justify;
      a {
        font-weight: bold;
      }
    }
    .time {
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
  .card-right {
    flex: 0 0 76px;
    box-sizing: border-box;
    display: flex;
    // align-items: flex-end;
    // padding: 2px 0;
    width: 76px;
    height: 70px;
    flex-direction: column;
    justify-content: space-between;
    .btn {
      font-size: 12px;
      border: 1px solid #3588c1;
      color: #3588c1;
      background: white;
      height: 28px;
      border-radius: 4px;
    }
  }
}
</style>
