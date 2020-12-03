<template>
  <div class="contest">
    <div class="banner">
      <img src="../common/images/customContest.png" alt />
    </div>
    <div class="bannerText">
      <p>
        夯邦国际碳材料+制造创新大赛由夯邦国际联盟和Carbontech Global联合主办，
        以“凝智创新，夯邦产业”为主题，以推动碳材料产业发展为使命，借助Carbontech国际先进碳材料大会的集聚效应，
        建立起国际碳材料领域优质创新项目链接中国“政产学研金用介”创业资源，成就碳材料行业内层次最高、规模最大、
        专业性最强的赛事品牌.
      </p>
    </div>
    <div class="item">
      <div class="btn-group">
        <!--         <button
          :class="activeClass == index ? 'active':''"
          v-for="(btn,index) in btns"
          :key="index"
          @click="getBtn(index)"
        >{{btn.itemList}}</button>-->
        <div
          :class="activeClass == index ? 'active' : ''"
          v-for="(btn, index) in btns"
          :key="index"
          @click="getBtn(index)"
        >
          {{ btn.itemList }}
        </div>
        <div
          class="content"
          :class="activeClass == index ? 'show-text' : ''"
          v-for="(btn, index) in btns"
          :key="index"
        >
          <p class="Content-title">{{ btn.content }}</p>

          <p>{{ btn.text }}</p>
          <p>1.组委会</p>

          <p>
            组委会下设秘书处和专家委员会。秘书处负责本次活动的日常联系和协调事物、整理文件、协助组委会工作。
            专家委员会咨询和答疑，并指导各参赛团队高质量完成大比 武的过程。
          </p>
          <p>组委会:</p>
          <p>主任：李俊生</p>
          <p>副主任：刘元园、李武</p>
          <p>
            委员：李林详、王昆来、李庆、杨祥、周务农、程新文、马宗艳、龙和平
          </p>
          <p>2. 专家委员会</p>
          <p>
            大赛设立专家委员会，由大赛组委会邀请大学联盟的专家组成，负责咨询和答疑，并指导各参赛团队高质量完成大比武的过程。
          </p>
          <p>专家委员会：</p>
          <p>主任：张耀荔（燕京理工学院）</p>
          <p>
            副主任：郭建礼（大学联盟国际交流处）张子林（重庆大学城市科技学院）
            赵宗泽（云南师范大学商学院）
          </p>
          <p>委员：</p>
          <p>
            方小林（珠江学院） 周翔（博文管理学院） 姚凯（哈尔滨广厦学院）
            徐畅（中南林业科技大学涉外学院）
            胡晓峰（武汉工程科技学院）曲福海（银川学院）
          </p>
          <p>3．秘书处</p>
          <p>负责本次活动的日常联系和协调事物、整理文件、协助组委会工作。</p>
          <p>秘书长：张春雷</p>
          <p>副秘书长：唐成林</p>
          <p>工作组：刘雯 贾思博</p>
        </div>
      </div>
    </div>
    <Project></Project>
  </div>
</template>

<script>
import Project from "@/components/public/Project";
export default {
  data() {
    return {
      activeClass: 0,
      btns: [
        { itemList: "组织机构", content: "一、大赛组织机构" },
        { itemList: "赛事流程", content: "二、大赛组织机构" },
        { itemList: "项目要求", content: "三、大赛组织机构" },
        { itemList: "奖励政策", content: "四、大赛组织机构" }
      ]
    };
  },
  methods: {
    getBtn(index) {
      this.activeClass = index;
    }
  },
  components: {
    Project
  }
};
</script>

<style lang="scss" scoped>
@import "../common/scss/variable.scss";
.contest {
  width: 100%;
  height: 100%;
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .bannerText {
    text-align: justify;
    padding: 24px;

    p {
      font-weight: 600;
      text-indent: 2em;
    }
  }
  .item {
    width: 100%;
    position: relative;
    height: 750px;
    overflow: hidden;
    .btn-group {
      box-sizing: border-box;
      margin: 25px auto;
      text-align: center;
      outline: none;
      div {
        display: inline-block;
        height: 36px;
        line-height: 36px;
        padding: 0 15px 0 15px;
        background: none;
        border: 1px transparent;
        border-radius: 10px;
      }
      .content {
        display: none;
        width: 100%;

        position: absolute;
        text-align: left;
        left: 50%;
        transform: translateX(-50%);
        top: 67px;
        height: 690px;
        background-image: url("http://img.polydt.com/hangbang/3.customContest/customContest-items.PNG");
        background-size: cover;
        .Content-title {
          margin: 15px 0 0 -20px;
          text-align: left;
          font-weight: 600;
        }
        p {
          line-height: 1.5;
          padding: 0 24px 0 24px;
          text-indent: 2em;
        }
      }
    }
    .active {
      background: #3588c1 !important;
      color: white;
    }
    .show-text {
      display: block !important;
    }
  }
}
</style>
