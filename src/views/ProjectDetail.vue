<template>
  <div class="project-detail">
    <div class="banner"></div>
    <div class="project-header">
      <div class="title">2020年“创客中国”生物医药中小企业创新创业大赛</div>
      <div class="finance">
        <span>融资阶段：</span><span class="gold">洽谈中</span>
        <span class="money">融资金额：</span
        ><span class="gold bold">1000万</span>
      </div>
      <div class="tags">
        <span class="label">标签:</span>
        <span class="tag">筹款</span>
        <span class="tag">合同</span>
        <span class="tag">共同开发</span>
      </div>
    </div>
    <div class="project-detail">
      <div class="intro step">
        <div class="step-head">
          <div class="step-line"></div>
          <div class="step-icon"></div>
        </div>
        <div class="step-main">
          <div class="step-title">项目背景以及需求</div>
          <div class="step-text">
            为贯彻落实党中央、国务院关于“完善创业创新环境”，“充分发挥‘创客中国’大赛等品牌赛事活动作用，对各类赛事活动中涌现的优秀创新创业项目加强后续跟踪支持”等部署，进一步激发“双创”活力，引导增强市场信心，工业和信息化部信息中心（大赛秘书处办公室）将联合吉林省通化市人民政府共同举办2019年“创客中国”大健康中小企业创新创业大赛及配套活动。
            “创客中国”中小企业创新创业大赛是工业和信息化部“双创”工作的重要抓手，是落实制造强国和网络强国建设、推进“互联网+”行动实施、促进大中小企业融通发展的有力措施，是具有工业和信息化行业特色的“双创”活动品牌。苗圩部长亲自担任大赛组委会主席。
          </div>
        </div>
      </div>
      <div class="product step">
        <div class="step-head">
          <div class="step-line"></div>
          <div class="step-icon"></div>
        </div>
        <div class="step-main">
          <div class="step-title">夯邦加速服务成果</div>
          <div class="step-text">
            大健康赛领域包括但不限于：保健食品（保健食品、保健药品、保健化妆品、保健用品等）、创新型医疗器械（如家庭医疗器械、医用机器人、体外诊断器械、骨科植入物、医学影像、透析机等）、精准医疗（如基因测序、基因诊断、免疫诊断、基因治疗、干细胞治疗等）、互联网+医疗（如智能医疗硬件、医疗软件开发、医疗大数据、远程医疗、移动医疗平台、医药电商、医药供应链等）、生物制药（如基因工程、血液制品、单克隆抗体、疫苗、CRO、多肽和蛋白质等）等细分领域。
          </div>
        </div>
      </div>
      <div class="team step">
        <div class="step-head">
          <div class="step-line"></div>
          <div class="step-icon"></div>
        </div>
        <div class="step-main">
          <div class="step-title">夯帮服务过程</div>
          <div class="step-text">
            1.遵纪守法的个人或团队；<br />
            2.注册时间不满1年的中小微企业；<br />
            3.团队核心成员不超过5人；<br />
            4.参赛项目的创意、产品、技术及相关专利归属参赛团队，与其它单位或个人无知识产权纠纷。<br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.project-detail {
  margin-bottom: 32px;
  .banner {
    width: 100%;
    height: 175px;
    background: url(http://img.polydt.com/hangbang/1.index/ProjectContent-banner.png)
      100% 100%;
  }
  .project-header {
    padding: 20px;
    border-bottom: 1px solid #dcdde0;
    .title {
      font-size: 16px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .finance {
      margin-top: 4px;
      .money {
        margin-left: 16px;
      }
      .gold {
        color: #dd9f0b;
      }
      .bold {
        font-weight: bold;
      }
    }
    .tags {
      margin-top: 8px;
      .tag {
        display: inline-block;
        padding: 0 8px;
        height: 18px;
        line-height: 18px;
        border: 1px solid rgba(222, 155, 51, 1);
        color: rgba(222, 155, 51, 1);
        font-size: 13px;
        text-align: center;
        margin-left: 5px;
      }
      :nth-child(2) {
        margin-left: 8px;
      }
    }
  }
  .project-detail {
    padding: 24px;
    .step {
      display: flex;
      .step-head {
        position: relative;
        margin-top: 6px;
        margin-right: 16px;
        width: 8px;
        .step-icon {
          position: absolute;
          top: -1px;
          left: -3px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #3588c1;
          &::after {
            display: block;
            position: absolute;
            top: -2px;
            left: -2px;
            z-index: -1;
            content: " ";
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #9ac3e0;
          }
        }
        .step-line {
          position: absolute;
          top: 4px;
          width: 2px;
          height: 100%;
          background-color: #9ac3e0;
        }
      }
      .step-main {
        padding-bottom: 8px;
        .step-title {
          font-weight: bold;
        }
        .step-text {
          margin-top: 4px;
          margin-left: 4px;
          text-align: justify;
        }
      }
    }
  }
}
</style>
