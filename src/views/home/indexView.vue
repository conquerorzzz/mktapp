<template>
  <div class="home">
    <div class="info">
      <div class="title">
        <div class="img">
          <img alt="Vue logo" src="@/assets/logow.png">
        </div>
        <div class="name">
          <div class="text">{{basicInfo.Title}}</div>
          <div class="time">{{formatDate(basicInfo.StartTime, 'yyyy/MM/dd')}}-{{formatDate(basicInfo.EndTime,'yyyy/MM/dd')}}</div>
        </div>
        <div class="phase">
          <div class="sp">{{basicInfo.Phase}}</div>
        </div>
      </div>
      <div class="desc">{{basicInfo.Desc}}</div>
      <div class="status">
        <div class="rewards item">
          <div class="title">{{$t('reward')}}</div>
          <div class="number">{{basicInfo.Bonus}}</div>
        </div>
        <div class="totalJoined item">
          <div class="title">{{$t('participants')}}</div>
          <div class="number">{{basicInfo.Participants}}</div>
        </div>
      </div>
    </div>
    <div class="data">
      <div class="switch-btn">
        <div @click="switchFlag = 0" :class="switchFlag==0 ? 'item active': 'item'">
          <div>{{$t('step')}}</div>
          <div class="line"></div>
        </div>
        <div @click="switchFlag = 1" :class="switchFlag==1 ? 'item active': 'item'">
          <div>{{$t('rank')}}</div>
          <div class="line"></div>
        </div>
      </div>
      <step-view v-if="switchFlag === 0" :steps="basicInfo.Steps" :project="basicInfo.project" :status="basicInfo.Status"></step-view>
      <rank-view v-if="switchFlag === 1"></rank-view>
      <div class="final">
        <div class="desc">{{$t('verifyMsg')}}</div>
        <div class="verify btn" v-if="basicInfo.Status === 0">{{$t('verify')}}</div>
        <div class="finished btn" v-if="basicInfo.Status === 1">已参加</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, computed } from 'vue'
import stepView from '@/components/stepView.vue' // @ is an alias to /src
import rankView from '@/components/rankView.vue' // @ is an alias to /src
import { basicInfo } from '@/utils/value.ts'
import { formatDate } from '@/utils/index.ts'
const switchFlag = ref(0)
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  .info {
    display: flex;
    flex-direction: column;
    .title {
      margin-top: 21px;
      display: flex;
      flex-direction: row;
      align-items: center;
      ustify-content: space-between;
      .img {
        margin-right: 8px;
        img {
          width: 48px;
        }
      }
      .name {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        width: 235px;
        .text {
          font-family: HarmonyOS_Sans_Bold;
          font-size: 22px;
          color: #333333;
          line-height: 24px;
          font-weight: 700;
          text-align: left;
        }
        .time {
          font-family: HarmonyOS_Sans;
          font-size: 12px;
          color: #959A9F;
          font-weight: 400;
        }
      }
      .phase {
        flex: 1;
        display: flex;
        justify-content: end;
        .sp {
          width: 36px;
          height: 16px;
          background: #286DFF;
          border-radius: 2px;
          font-family: PingFangSC-Regular;
          font-size: 10px;
          color: #FFFFFF;
          font-weight: 400;
          line-height: 16px;
          text-align: center;
        }
      }
    }
    .desc {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #959A9F;
      line-height: 20px;
      font-weight: 400;
      margin-top: 10px;
      margin-bottom: 20px;
      text-align: left;
    }
    .status {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .item {
        width: 166px;
        height: 56px;
        background: #F8F8F8;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #959A9F;
          line-height: 16px;
          font-weight: 400;
          margin-top: 0;
        }
        .number {
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #333333;
          line-height: 20px;
          font-weight: 500;
        }
      }
    }
  }
  .data {
    margin-top: 20px;
    .switch-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
      .item {
        display: flex;
        flex-direction: column;
        align-items:center;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #959A9F;
        font-weight: 500;
        margin-right: 20px;
        .line {
          margin-top: 2px;
          transition: all ease 0.3s;
          width: 20px;
          height: 3px;
        }
      }
      .active {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        font-weight: 500;
        .line {
          margin-top: 2px;
          transition: all ease 0.3s;
          background: #286DFF;
          border-radius: 1.5px;
          width: 20px;
          height: 3px;
        }
      }
    }
    .final {
      margin-top: 20px;
      margin-bottom: 35px;
      .desc {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #959A9F;
        letter-spacing: 0;
        text-align: left;
        font-weight: 400;
      }
      .btn {
        margin-top: 10px;
        height: 44px;
        width: 100%;
        border-radius: 22px;
        line-height: 44px;
        cursor: pointer;
      }
      .verify {
        border: 1px solid #286DFF;
      }
      .finished {
        border: 1px solid #959A9F;
      }
    }
  }
}
</style>
