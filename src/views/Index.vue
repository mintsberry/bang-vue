<template>
  <div class="index">
    <div class="banner">
      <img class="img" src="http://img.polydt.com/hangbang/1.index/banner.png" />
    </div>

    <div class="introduce">
      <div class="text">
        <p class="title">挑战赛介绍</p>
        <p class="small-title">Introduction to the challenge</p>
        <span class="titleBar"></span>
        <p class="description">
          夯邦国际制造创新挑战赛(拟),基于夯邦国际服务团队,集智攻关中国制造关键材料与技术“卡脖子”问题，全球招募有意愿、有
          潜力在中国发展的创新项目，借助顾问甄选、路演对接、导师辅导等5个月加速服务，帮助中国新材料产业园区实现国际高水平项目
          和团队的落地招商、帮助中国制造企业、投资机构，一战获得优质项目合作和投资机会。
        </p>
      </div>
      <div class="video">
        <p class="title">大赛视频</p>
        <p class="small-title">Competition video</p>
        <span class="titleBar"></span>
        <div class="video-titleBar" @click="showVideo">
          <img class="video-skin" src="http://img.polydt.com/hangbang/视频封面.png" />
          <video id="descriptions" class="description" controls="controls">
            <source src="http://img.polydt.com/hangbang/video/hb.mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="context">
      <div class="titleDiv">
        <p class="title">专题挑战赛</p>
        <p class="small-title">Thematic Challenge</p>
        <span class="titleBar"></span>
      </div>
      <div class="iconDiv">
        <div class="box1">
          <a href="/frontStage/specContestLvsebaozhuang">
            <img id="lvse" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-1.png" />
            <p>绿色包装</p>
          </a>
          <a href="/frontStage/toSpecContestXianJin">
            <img id="xianjin" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-2.png" />
            <p>先进半导体</p>
          </a>
        </div>
        <div class="box2">
          <a href="/frontStage/specContestQinneng">
            <img id="qinneng" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-3.png" />
            <p>氢能及燃料电池</p>
          </a>
          <a href="/frontStage/toSpecContestDianZi">
            <img id="dianzi" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-4.png" />
            <p>电子产品热管理</p>
          </a>
          <a href="/frontStage/specContestGaonengliangmiducunchu">
            <img id="gaoneng" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-5.png" />
            <p>高能量密度储能</p>
          </a>
        </div>
        <div class="icon"></div>
      </div>
    </div>
    <div class="processes">
      <div class="titleDiv">
        <p class="title">赛事流程</p>
        <p class="small-title">Event flow</p>
        <span class="titleBar"></span>
      </div>
      <div class="wrap">
        <ul class="processImg" ref="picUl">
          <li class="process">
            <p class="pTitle">全球项目招募</p>
            <p class="pDate">全年</p>
          </li>
          <li class="process">
            <p class="pTitle">项目甄选</p>
            <p class="pDate">2020.10-2021.3</p>
          </li>
          <li class="process">
            <p class="pTitle">路演及走访</p>
            <p class="pDate">2020.10-2021.3</p>
          </li>
          <li class="process">
            <p class="pTitle">加速营</p>
            <p class="pDate">2021.4-2021.8</p>
          </li>
          <li class="process">
            <p class="pTitle">投资峰会暨总结赛</p>
            <p class="pDate">2021.9</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="institution">
      <div class="titleDiv">
        <p class="title">组织机构</p>
        <p class="small-title">Organization</p>
        <span class="titleBar"></span>
      </div>
      <p class="host">主办单位:</p>
      <div class="hostDiv">
        <img src="http://img.polydt.com/hangbang/1.index/Organization-1.1.png" />
        <img src="http://img.polydt.com/hangbang/1.index/Organization-1.2.png" />
      </div>
    </div>
    <div class="partner">
      <div class="titleDiv">
        <p class="title">合作伙伴(企业)</p>
        <p class="small-title">Partner(enterprise)</p>
        <span class="titleBar"></span>
      </div>
      <div id="logo">
        <span class="enterprise" v-for="logo in logos" :key="logo">
          <img :src="logo" />
        </span>
        <span class="enterprise show">
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.4.png" />
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.5.png" />
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.6.png" />
        </span>
        <span class="enterprise show">
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.1.png" />
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.2.png" />
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.3.png" />
        </span>
        <span class="enterprise show">
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.4.png" />
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.5.png" />
          <img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.6.png" />
        </span>
        <div class="btnDiv" @click="showMore">
          <button class="more" id="ent-more">更多&gt;&gt;</button>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="titleDiv">
        <p class="title">合作伙伴(平台)</p>
        <p class="small-title">Partner(platform)</p>
        <span class="titleBar"></span>
      </div>
      <div id="logo2">
        <span class="enterprise" v-for="logo in logos2" :key="logo">
          <img :src="logo" />
        </span>
        <span class="enterprise show2">
          <img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.5.png" />
          <img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.1.png" />
          <img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.2.png" />
        </span>
        <span class="enterprise show2">
          <img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.3.png" />
          <img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.4.png" />
          <img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.5.png" />
        </span>

        <div class="btnDiv2" @click="showMore2">
          <button class="more" id="ent-more">更多&gt;&gt;</button>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="titleDiv">
        <p class="title">投资机构</p>
        <p class="small-title">Investment institutions</p>
        <span class="titleBar"></span>
      </div>
      <div id="logo3">
        <span class="enterprise" v-for="company in companion" :key="company">
          <img :src="company" />
        </span>
        <span class="enterprise show3">
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.2.png"
          />
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.3.png"
          />
        </span>
        <span class="enterprise show3">
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.4.png"
          />
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.5.png"
          />
        </span>
        <span class="enterprise show3">
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.1.png"
          />
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.2.png"
          />
        </span>
        <span class="enterprise show3">
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.3.png"
          />
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.4.png"
          />
        </span>
        <span class="enterprise show3">
          <img
            src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.5.png"
          />
        </span>
        <div class="btnDiv3" @click="showMore3">
          <button class="more" id="ent-more">更多&gt;&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  components: {},
  props: {},
  data() {
    return {
      logos: [
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.1.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.2.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.3.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.4.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.5.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.6.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.1.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.2.png',
        'http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.3.png',
      ],
      logos2: [
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.1.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.2.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.3.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.4.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.5.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.1.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.2.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.3.png',
        'http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.4.png',
      ],
      companion: [
        'http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.1.png',
        'http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.2.png',
        'http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.3.png',
        'http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.4.png',
        'http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.5.png',
        'http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.1.png',
      ],
      index: 0,
      index1: 0,
      index2: 0,
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() {
      new BScroll('.wrap', {
        startX: 0,
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
      })
    },
    showVideo() {
      const video = document.getElementById('descriptions')
      video.style.display = 'block'
      video.play()
    },
    showMore() {
      const logo = document.getElementById('logo')
      const node = document.getElementsByClassName('show')
      const btn = document.getElementsByClassName('btnDiv')
      if (this.index < 3) {
        node[this.index++].style.display = 'block'

        logo.style.height = logo.clientHeight + 55 + 'px'
      }
      console.log(btn[0])
      if (this.index === 3) {
        btn[0].style.display = 'none'
      }
    },
    showMore2() {
      let logo = document.getElementById('logo2')
      const node = document.getElementsByClassName('show2')
      const btn = document.getElementsByClassName('btnDiv2')
      if (this.index1 < 3) {
        node[this.index1++].style.display = 'block'
        logo.style.height = logo.clientHeight + 55 + 'px'
      }
      console.log(btn[0].style)
      if (this.index1 === 2) {
        btn[0].style.display = 'none'
      }
    },
    showMore3() {
      let logo = document.getElementById('logo3')
      const node = document.getElementsByClassName('show3')
      const btn = document.getElementsByClassName('btnDiv3')
      if (this.index2 < 5) {
        node[this.index2++].style.display = 'block'
        logo.style.height = logo.clientHeight + 55 + 'px'
      }

      if (this.index2 === 5) {
        btn[0].style.display = 'none'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../common/scss//variable.scss';
.index {
  width: 100%;
  font-family: Microsoft YaHei;
  box-sizing: border-box;
  span.titleBar {
    display: block;
    height: 4px;
    width: 65px;
    background: #2680bf;
    border-radius: 4px;
    margin: 5px auto;
  }
  p.title {
    font-size: $font-size-large;
  }
  p.small-title {
    color: #a1a4a9;
    transform: scale(0.6);
    margin-top: 4px;
  }
  .titleDiv {
    margin-top: 18px;
    text-align: center;
  }

  .banner {
    box-sizing: border-box;
    .img {
      width: 100%;
    }
  }

  .introduce {
    width: 100%;
    height: 520px;
    .text {
      width: 100%;
      height: 225px;

      background-image: url(http://img.polydt.com/hangbang/1.index/CentralSection-bj.png);
      background-repeat: no-repeat;
      background-size: cover;

      .description {
        text-indent: 2em;
        text-align: justify;
        margin: 8px;
        line-height: 25px;
        font-size: $font-size-small;
      }
    }
    .small-title {
      width: 200px;
      font-size: smaller;
      color: #a1a4a9;

      margin-top: -10px;
      transform: scale(0.82);
      box-sizing: border-box;
    }
    .title {
      font-size: $font-size-medium-x;
      padding: 15px 18px;
    }
    .titleBar {
      margin-left: 18px;
    }

    .video {
      width: 100%;
      height: 250px;

      .video-titleBar {
        margin-top: 14px;
        width: 90%;
        margin: 10px auto;
        .description {
          margin-top: 14px;
          width: 100%;
          height: 265px;
          margin: 0 auto;
          position: relative;
          top: -265px;
          display: none;
        }
        .video-skin {
          width: 100%;
          height: 225px;
        }
      }
    }
  }
  .context {
    width: 100%;
    height: 380px;

    /*     .titleDiv {
      margin-top: 18px;
      text-align: center;
    } */

    .iconDiv {
      margin: 20px auto;
      width: 90%;
      .box1 {
        display: flex;
        justify-content: space-around;
        a {
          p {
            font-size: $font-size-small;
            text-align: center;
            margin-top: 26px;
          }
          img {
            width: 90px;
          }
        }
      }
      .box2 {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;

        width: 100%;
        a {
          p {
            font-size: $font-size-small;
            text-align: center;
            margin-top: 26px;
            font-weight: 700;
          }
          img {
            width: 90px;
          }
        }
      }
    }
  }
  .processes {
    height: 265px;

    .wrap {
      /*  position: absolute; */
      margin: 16px 12px;
      overflow: hidden;
      touch-action: none;
      .processImg {
        box-sizing: border-box;
        width: 680px;
        color: white;

        display: flex;
        .process {
          width: 129px;
          height: 202px;
          margin-left: 5px;
          text-align: center;
          .pTitle {
            font-weight: 600;
            padding-top: 139px;
            font-size: $font-size-small;
          }
          .pDate {
            margin-top: 12px;
            font-size: $font-size-small-s;
          }
        }
        .process:nth-child(1) {
          background: url(http://img.polydt.com/hangbang/1.index/EventFlow-1.png)
            no-repeat;
          background-size: cover;
        }
        .process:nth-child(2) {
          background: url(http://img.polydt.com/hangbang/1.index/EventFlow-2.png)
            no-repeat;
          background-size: cover;
        }
        .process:nth-child(3) {
          background: url(http://img.polydt.com/hangbang/1.index/EventFlow-3.png)
            no-repeat;
          background-size: cover;
        }
        .process:nth-child(4) {
          background: url(http://img.polydt.com/hangbang/1.index/EventFlow-4.png)
            no-repeat;
          background-size: cover;
        }
        .process:nth-child(5) {
          background: url(http://img.polydt.com/hangbang/1.index/EventFlow-5.png)
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .institution {
    width: 100%;
    height: 125px;
    .host {
      width: 85%;
      /* min-width: 875px; */
      text-align: start;
      font-size: $font-size-medium;
      margin: 12px auto;
    }
    .hostDiv {
      margin: 0 auto;
      box-sizing: border-box;
      text-align: center;

      img {
        position: relative;
        left: 15px;
        width: 145px;
        margin-right: 29px;
        vertical-align: middle;
      }
    }
  }
  .partner {
    width: 100%;
    text-align: center;
    margin: 30px auto;
    #logo,
    #logo2,
    #logo3 {
      width: 100%;
      height: 250px;

      .enterprise {
        img {
          position: relative;
          left: 10px;
          width: 92px;
          margin-right: 20px;
          margin-top: 20px;
        }
      }
      .show,
      .show2,
      .show3 {
        display: none;
      }
      .btnDiv,
      .btnDiv2,
      .btnDiv3 {
        width: 77px;
        height: 22px;

        margin: 15px auto;
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
    #logo3 {
      .enterprise {
        img {
          width: 155px;
          position: relative;
        }
      }
    }
  }
  .invest {
    margin-top: -20px;
  }
}
</style>
