<template>
  <div class="project">
    <div class="enroll-project">
      <img
        src="http://img.polydt.com/hangbang/2.specContest/已报名项目.PNG"
        alt="enroll"
      />
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">高效节能型布袋除尘器-亿利洁能</span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">筹款</span>
        <span class="tag">合同</span>
        <span class="tag">共同开发</span>
      </div>
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">高效节能型布袋除尘器-亿利洁能</span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">筹款</span>
        <span class="tag">合同</span>
        <span class="tag">共同开发</span>
      </div>
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">
          <a href="/backStage/toProjectContent?projectId=67"
            >高效节能型布袋除尘器-亿利洁能</a
          >
        </span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">筹款</span>
        <span class="tag">合同</span>
        <span class="tag">共同开发</span>
      </div>
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">
          <a href="/backStage/toProjectContent?projectId=67"
            >高效节能型布袋除尘器-亿利洁能</a
          >
        </span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">筹款</span>
        <span class="tag">合同</span>
        <span class="tag">共同开发</span>
      </div>
    </div>
    <div class="btnDiv" @click="showMore">
      <button @click="toDetail" class="more" id="ent-more">更多&gt;&gt;</button>
    </div>
  </div>
  <div class="project">
    <div class="enroll-project" @click="clickItem">
      <img
        src="http://img.polydt.com/hangbang/2.specContest/企业需求.PNG"
        alt="enroll"
      />
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">高效节能型布袋除尘器-亿利洁能</span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">已完成</span>
      </div>
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">高效节能型布袋除尘器-亿利洁能</span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">已完成</span>
      </div>
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">高效节能型布袋除尘器-亿利洁能</span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">已完成</span>
      </div>
    </div>
    <div class="projectlist" @click="clickItem">
      <div class="projectDetail">
        <span class="projectName">高效节能型布袋除尘器-亿利洁能</span>
        <span class="projectTime">2017-06-07</span>
      </div>
      <div class="tagDiv">
        <span class="tag">已完成</span>
      </div>
    </div>
    <div class="btnDiv" @click="showMore">
      <button @click="toDetail" class="more" id="ent-more">更多&gt;&gt;</button>
    </div>
  </div>
</template>

<script>
import router from "../../router";
export default {
  setup() {
    function clickItem() {
      router.push("/project-detail");
    }
    function toDetail() {
      router.push("/project-display");
    }
    return {
      toDetail,
      clickItem
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
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
    font-size: $font-size-medium;
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
