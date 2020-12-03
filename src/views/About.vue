<template>
  <div class="about" id="about">
    <div class="banner"></div>
    <div class="introduce">
      <div class="titleDiv">
        <p class="title">夯邦介绍</p>
        <p class="small-title">introduce</p>
        <span class="titleBar"></span>
      </div>
      <div class="introContext">
        <img class="logo" src="../common/images/logo.png" alt />
        <p class="introText">
          夯邦（HANG
          BANG）致力于链接海内外新材料领域创新创业服务。夯邦以“让技术产品化，让产品商品化”为宗旨，分享全球新材料创新项目及前沿知识，提供中国资源与海内外创新项目的高效对接，帮助投资者洞悉全球最新发展态势，帮助创新企业及创业团队找到值得信赖的投资者和合作伙伴。
        </p>
      </div>
    </div>
    <div class="teamStyle">
      <div class="titleDiv">
        <p class="title">团队风采</p>
        <p class="small-title">Team style</p>
        <span class="titleBar"></span>
      </div>
      <div
        class="swiper-container swiper-container-initialized swiper-container-horizontal"
      >
        <div
          class="swiper-wrapper"
          style="transition-duration: 0ms; transform: translate3d(-517.333px, 0px, 0px);"
        >
          <div
            class="swiper-slide swiper-slide-duplicate"
            data-swiper-slide-index="0"
          >
            <img
              src="http://img.polydt.com/hangbang/1.index/TeamStyle-1.png"
              alt
            />
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate"
            data-swiper-slide-index="1"
          >
            <img
              src="http://img.polydt.com/hangbang/1.index/TeamStyle-1.png"
              alt
            />
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
            data-swiper-slide-index="2"
          >
            <img
              src="http://img.polydt.com/hangbang/1.index/TeamStyle-1.png"
              alt
            />
          </div>
          <div
            class="swiper-slide swiper-slide-active"
            data-swiper-slide-index="0"
          >
            <img
              src="http://img.polydt.com/hangbang/1.index/TeamStyle-1.png"
              alt
            />
          </div>
          <div
            class="swiper-slide swiper-slide-next"
            data-swiper-slide-index="1"
          >
            <img
              src="http://img.polydt.com/hangbang/1.index/TeamStyle-1.png"
              alt
            />
          </div>
          <div class="swiper-slide" data-swiper-slide-index="2">
            <img
              src="http://img.polydt.com/hangbang/1.index/TeamStyle-1.png"
              alt
            />
          </div>
        </div>
        <!-- Add Pagination -->

        <div
          class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
        ></div>

        <span
          class="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
      <div class="joinDiv">
        <button class="joinUs" @click="contact">加入我们</button>
      </div>
    </div>
    <div class="address">
      <div class="addressText">
        <p class="address">
          <img
            src="http://img.polydt.com/hangbang/1.index/Navigation.png"
            alt="icon"
          />
          公司地址：宁波市高新区新材料国际创新中心A1幢902室
        </p>
        <p class="address-sub">
          总 部：宁波市高新区新材料国际创新中心A1幢902室
        </p>
        <p class="address-sub">南京中心：高新区新材料国际创新中心XXXX</p>
        <p class="address-sub">上海中心：新材料国际创新中心AXXXX</p>
      </div>
      <div class="allmap"></div>
    </div>

    <div id="popBox">
      <div class="joinUs">
        <p>加入我们</p>
        <img
          src="http://img.polydt.com/hangbang/1.index/close.png"
          @click="closeBox"
        />
      </div>
      <div class="way">
        <div class="email-phone">
          <div class="icon">
            <img src="http://img.polydt.com/hangbang/1.index/E-mail.png" alt />
          </div>

          <div>
            <p>简历投递邮箱</p>
            <p class="number">95616616XXX@163.com</p>
          </div>
        </div>
        <div class="email-phone">
          <div class="icon">
            <img src="http://img.polydt.com/hangbang/1.index/Tel.png" alt />
          </div>

          <div>
            <p>HR投递邮箱</p>
            <p class="number">15215762303</p>
          </div>
        </div>
      </div>
    </div>
    <div id="popLayer"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";

export default {
  mounted() {
    this.$nextTick(() => {
      this._initSwiper();
    });
  },
  methods: {
    _initSwiper() {
      new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: -260,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    },

    contact() {
      var popBox = document.getElementById("popBox");
      var popLayer = document.getElementById("popLayer");
      popBox.style.display = "block";
      popLayer.style.display = "block";
    },
    closeBox() {
      var popBox = document.getElementById("popBox");
      var popLayer = document.getElementById("popLayer");
      popBox.style.display = "none";
      popLayer.style.display = "none";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../common/scss//variable.scss";

.about {
  width: 100%;
  height: 100%;
  .banner {
    height: 150px;
    background-image: url("http://img.polydt.com/hangbang/1.index/About-banner.png");
    background-position: -275px;
    background-size: cover;
  }
  .introduce {
    height: 240px;
    .introContext {
      margin-left: 24px;
      img {
        width: 98px;
      }
      .introText {
        margin-top: 25px;
        padding-right: 24px;
        text-indent: 2em;
        font-size: $font-size-medium;
      }
    }
  }
  .teamStyle {
    width: 100%;
    height: 330px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    .swiper-container {
      margin-top: 20px;
      .swiper-wrapper {
        box-sizing: border-box;
        width: 1000px;
        padding-top: 3px;

        .swiper-slide-active {
          z-index: 99;
          width: 256px;
          height: 153px;

          transform: scale(1) !important;
          filter: blur(0) !important;
        }
        .swiper-slide {
          filter: blur(1.5px);
          transform: scale(0.9);
        }
      }
      .swiper-pagination {
        z-index: 9999;

        position: absolute;
        left: 50%;
        top: 88%;
        transform: translate(-50%, -50%);
        .swiper-pagination-bullet {
          background-color: #fff !important;
        }
      }
    }
    .joinDiv {
      width: 97px;
      height: 30px;
      margin: 17px auto;

      .joinUs {
        width: 100%;
        height: 100%;
        font-size: $font-size-small;
        color: rgb(39, 127, 188);
        border: 1px solid rgb(39, 127, 188);
        background-color: #fff;
        font-weight: 600;
      }
    }
  }
  .address {
    height: 434px;
    background-color: #f2f4f9;
    font-size: $font-size-small;
    .addressText {
      width: 100%;
      padding-top: 32px;

      .address {
        padding-left: 24px;
        font-weight: 600;
        width: 350px;
        height: 30px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        img {
          width: 14px;
          margin-right: 5px;
        }
      }
      .address-sub {
        padding-left: 24px;
        margin-top: 10px;
      }
    }
    .allmap {
      height: 240px;
      margin: 20px auto;
      background-image: url("../common/images/map.png");
      background-size: cover;
    }
  }
  #popBox {
    display: none;
    background-color: #ffffff;
    z-index: 11;
    width: 333px;
    height: 204px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0 auto;
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    .joinUs {
      padding: 17px 0 0 23px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      position: relative;
      p {
        display: inline-block;
        border-bottom: #3588c1 solid 2px;
      }
      img {
        position: absolute;
        right: 10px;
      }
    }
    .way {
      padding-left: 28px;
      .email-phone {
        display: flex;
        margin-top: 24px;
        img {
          width: 44px;
          margin-right: 15px;
        }
        .number {
          color: #3588c1;
        }
      }
    }
  }
  #popLayer {
    display: none;
    background-color: #000;
    height: 1212px;
    z-index: 10;
    opacity: 0.6;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
