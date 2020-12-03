<template>
  <div class="advisor">
    <div class="banner"></div>
    <div class="team">
      <div class="titleDiv">
        <p class="title">导师顾问与团队</p>
        <p class="small-title">Mentors and advisory teams</p>
        <span class="titleBar"></span>
        <p class="team-description">
          由头部新材料及先进制造园区招商负责人、领域龙头企业投资负责人、专业投资机构高级经理、
          制造相关专家、市场准入认证专家等组成。为项目提供进入中国市场战略、发展计划、融资策略咨询，
          协助项目对接各类中国专业资源，帮助项目在找到中国合作伙伴、确定第一笔投资、明确落地发展城市和园区、
          组建中国运营团队等。
        </p>
      </div>
    </div>
    <div class="duty">
      <p class="duty-title">
        <img src="http://img.polydt.com/hangbang/5.advisor/Duty.png" alt />
      </p>
      <p class="duty-list">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Diamond.png"
          alt
        />为挑战赛优选项目提供进入中国市场战略、发展计划、融资策略咨询。
      </p>
      <p class="duty-list">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Diamond.png"
          alt
        />帮助项目找到中国合作伙伴、确定第一笔投资、明确落地发展城市和园区、组建中国运营团队等。
      </p>
      <p class="duty-list">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Diamond.png"
          alt
        />协助项目对接在中国发展所需核心专业资源。
      </p>
    </div>
    <div class="duty">
      <p class="duty-title">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Requirement.png"
          alt
        />
      </p>
      <p class="duty-list">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Diamond.png"
          alt
        />现任新材料及先进制造园区招商负责人、专业投资机构高级经理人、专项赛领域龙头企业投资负责人、制造相关专家、市场准入认证专家等。
      </p>
      <p class="duty-list">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Diamond.png"
          alt
        />在中国市场拥有深厚的园区、投资机构或企业等关键资源，
        能够高效地为项目对接资本、KOL、孵化园区等关键资源。
      </p>
      <p class="duty-list">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Diamond.png"
          alt
        />对项目跨境落地、投资合作、创业辅导拥有10年以上成功案例经验。
      </p>
      <p class="duty-list">
        <img
          src="http://img.polydt.com/hangbang/5.advisor/Diamond.png"
          alt
        />应具备良好的职业道德，认真负责、客观公正，并确保能投入足够的时间和精力。
      </p>
    </div>
    <div class="tick">
      <img
        class="pic"
        src="http://img.polydt.com/hangbang/5.advisor/legalRight.png"
        alt
      />
      <p class="list">
        <img src="http://img.polydt.com/hangbang/5.advisor/Right.png" alt />
        <span>1. 优先对接优质项目，获得投资和合作机会，引导项目中国落地。</span>
      </p>
      <p class="list">
        <img src="http://img.polydt.com/hangbang/5.advisor/Right.png" alt />
        <span
          >2. 能对接挑战赛全球优选项目资源，观看挑战赛100+项目线上路演。</span
        >
      </p>
      <p class="list">
        <img src="http://img.polydt.com/hangbang/5.advisor/Right.png" alt />
        <span>3. 大赛官网个人展示，活动推广中品牌曝光，提升个人品牌形象。</span>
      </p>
      <p class="list">
        <img src="http://img.polydt.com/hangbang/5.advisor/Right.png" alt />
        <span>4. 与众多行业企业界、投资界大咖建立人脉圈。</span>
      </p>
    </div>
    <div id="tutor">
      <div class="titleDiv">
        <p class="title">本期导师与顾问</p>
        <p class="small-title">Tutor and consultant</p>
        <span class="titleBar"></span>
      </div>
      <div id="imgDiv">
        <div class="professor" v-for="item in items" :key="item">
          <p class="proName">{{ item.name }}</p>
          <p class="proJob">{{ item.position }}</p>
          <p class="proWorkplace">{{ item.company }}</p>
        </div>
      </div>
      <div class="btnDiv" v-if="count1 < 2" @click="showMore">
        <button class="more" id="ent-more">更多&gt;&gt;</button>
      </div>
    </div>
    <div id="tutor-before">
      <div class="titleDiv">
        <p class="title">往期导师与顾问</p>
        <p class="small-title">Tutor and consultant</p>
        <span class="titleBar"></span>
      </div>
      <div id="imgDiv">
        <div class="professor" v-for="item in items2" :key="item">
          <p class="proName">{{ item.name }}</p>
          <p class="proJob">{{ item.position }}</p>
          <p class="proWorkplace">{{ item.company }}</p>
        </div>
      </div>
      <div class="btnDiv" v-if="count2 < 2" @click="showMore2">
        <button class="more" id="ent-more">更多&gt;&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        },
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        },
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        },
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        }
      ],
      items2: [
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        },
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        },
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        },
        {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        }
      ],
      count1: 0,
      count2: 0
    };
  },
  methods: {
    showMore() {
      if (this.count1 < 2) {
        const man = {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        };
        this.items.push(man);
        this.count1++;
        const box = document.getElementById("tutor");
        box.style.height = box.clientHeight + 85 + "px";
      }
    },
    showMore2() {
      if (this.count2 < 2) {
        const man = {
          name: "王小波",
          position: "商务经理",
          company: "宁波生态科技有限公司"
        };
        this.items2.push(man);
        this.count2++;
        const box = document.getElementById("tutor-before");
        box.style.height = box.clientHeight + 85 + "px";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../common/scss/variable.scss";
.advisor {
  width: 100%;
  height: 100%;
  .banner {
    height: 150px;
    background-image: url("http://img.polydt.com/hangbang/5.advisor/Mentors-banner.png");
    background-position: -175px;
    background-size: cover;
  }
  .team {
    height: 220px;

    .team-description {
      padding: 20px 24px 0 24px;
      text-align: justify;
    }
  }
  .duty {
    text-align: justify;

    font-size: $font-size-small;
    overflow: hidden;
    margin-bottom: 20px;
    p {
      padding: 10px 24px 0 24px;
      /*       margin-top: 10px; */
      text-align: left;
      img {
        margin-right: 10px;
      }
    }
  }
  .tick {
    height: 464px;
    background-image: url("http://img.polydt.com/hangbang/3.customContest/customContest-items.PNG");
    background-size: cover;
    text-align: center;

    .pic {
      width: 281px;
      padding-top: 35px;
      margin-bottom: 30px;
    }
    .list {
      text-align: justify;
      margin-bottom: 20px;
      padding: 0 24px 0 24px;

      img {
        width: 14px;
      }
      span {
        text-indent: 2em;
        margin-left: 10px;
      }
    }
  }
  #tutor,
  #tutor-before {
    height: 440px;
    #imgDiv {
      .professor {
        background: url(http://img.polydt.com/hangbang/5.advisor/HeadPortrait.png)
          no-repeat;
        background-size: 75px;
        height: 75px;
        margin-top: 12px;
        margin-left: 24px;
        font-size: $font-size-small;
        .proName {
          padding-left: 90px;
          padding-top: 12px;
        }
        .proJob {
          padding-left: 90px;
          color: #e49000;
        }
        .proWorkplace {
          padding-left: 90px;
          color: #666666;
        }
      }
    }
  }
}
</style>
