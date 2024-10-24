<template>
  <div class="home">
    <div class="info">
      <div class="title">
        <div class="img">
          <img alt="logo" :src="activityData.pic_url" @error="onImageError" />
        </div>
        <div class="right">
          <div class="name">
            <div class="text">{{activityData.title}}</div>
            <div class="time" v-if="activityData.start_time">{{formatDate(activityData.start_time, 'yyyy/MM/dd')}}-{{formatDate(activityData.end_time,'yyyy/MM/dd')}}</div>
          </div>
          <div class="phase">
            <div class="sp">{{basicInfo.Phase}}</div>
          </div>
        </div>
      </div>
      <div class="desc">{{activityData.desc}}</div>
      <div class="status">
        <div class="rewards item">
          <div class="title">{{$t('reward')}}</div>
          <div class="number">{{activityData.bonus}}</div>
        </div>
        <div class="line"></div>
        <div class="totalJoined item">
          <div class="title">{{$t('participants')}}</div>
          <div class="number">{{activityData.participants}}</div>
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
      <step-view v-if="switchFlag === 0" :steps="activityData.steps" :project="progectInfo" :isAve="isAve" @sendMessage="handleMessage"
        ></step-view>
      <rank-view v-if="switchFlag === 1" :rank="rankList"></rank-view>
      <div class="final" @click="verify()">
        <div class="desc">{{$t('verifyMsg')}}</div>
        <div class="verify btn" v-if="basicInfo.Status === 0">{{$t('verify')}}</div>
        <div class="finished btn" v-if="basicInfo.Status === 1">已参加</div>
      </div>
    </div>
  </div>
  <el-drawer
    v-model="downLoadFlag"
    direction="btt"
    size="40%"
    :with-header="false"
  >
    <div class="download">
      <div class="title">{{$t('downloadMsg')}}</div>
      <div class="desc">{{$t('downloadDesc')}}</div>
      <div class="btn" @click="open('https://ave.ai/download')">{{$t('downloadBtn')}}</div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref, watch, onMounted, computed } from 'vue'
import stepView from '@/components/stepView.vue' // @ is an alias to /src
import rankView from '@/components/rankView.vue' // @ is an alias to /src
import { basicInfo } from '@/utils/value.ts'
import { formatDate } from '@/utils/index.ts'
import axiosInstance from '@/utils/axios.ts'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const switchFlag = ref(0)
const downLoadFlag = ref(false)
const { t, locale } = useI18n()
const switchLanguage = (lang) => {
  locale.value = lang
}
const rankList = ref([])
const activityData = ref({})
const progectInfo = ref({})
const lang = ref('en')
const isAve = ref(true)
const onImageError = (event) => {
  event.target.src = "https://0ftrfsdb.xyz/mkt/iconbot.jpg"; // 如果加载失败，替换为默认图片
}
onMounted( async () => {
  //await axiosInstance.get('/user/getcode/0x0d29bb364c79965e18bf1d044099c50173ea4cfb')
  //await axiosInstance.get('/activity/1?lang=zh')
  const rankRes = await axiosInstance.get('/activity/rank/1')
  console.log(rankRes)
  rankList.value = rankRes.data.data
  if (route.query.lang && route.query.lang === 'zh') {
    switchLanguage('zh')
    lang.value = 'zh'
  } else {
    lang.value = 'en'
  }
  if (route.query.activity_id) {
    const { data } = await axiosInstance.get('/activity/'+route.query.activity_id+'?lang='+lang.value)
    activityData.value = data.data
  } else {
    alert('no activity_id')
    window._tw_.back()
  }
  progectInfo.value = {
    desc: 'project desc',
    x: activityData.value.twitter_url,
    dc: activityData.value.discord_url,
    tg: activityData.value.telegram_url
  }
  const userAgent = navigator.userAgent
  isAve.value = userAgent.indexOf('Ave.ai') > -1
  document.title = activityData.value.title
})

const verify = () => {
  if(!isAve.value) {
    downLoadFlag.value = true
    return
  }
}
const open = ($url) => {
  window.open($url,'_self')
}
const handleMessage = ($data) => {
  if($data.status = -1) {
    downLoadFlag.value = true
  }
}
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
      .right{
        display: flex;
        flex-direction: row;
        align-items: top;
        flex: 1;
        .name {
          display: flex;
          flex-direction: column;
          align-items: baseline;
          width: 235px;
          .text {
            font-family: "HarmonyOS_Sans_Bold",sans-serif;
            font-size: 22px;
            color: #333333;
            line-height: 24px;
            font-weight: 700;
            text-align: left;
          }
          .time {
            font-family: "HarmonyOS_Sans",sans-serif;
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
            margin: 4px 0;
            width: 36px;
            height: 16px;
            background: #286DFF;
            border-radius: 2px;
            font-family: PingFangSC-Regular,sans-serif;
            font-size: 10px;
            color: #FFFFFF;
            font-weight: 400;
            line-height: 16px;
            text-align: center;
          }
        }
      }
    }
    .desc {
      font-family: PingFangSC-Regular,sans-serif;
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
      align-items: center;
      background: #F8F8F8;
      border-radius: 4px;
      .line {
        background-color: #E9ECEC;
        width: 1px;
        height: 36px;
      }
      .item {
        width: 50%;
        height: 56px;
        background: #F8F8F8;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
          font-family: PingFangSC-Regular,sans-serif;
          font-size: 12px;
          color: #959A9F;
          line-height: 16px;
          font-weight: 400;
          margin-top: 0;
        }
        .number {
          font-family: PingFangSC-Medium,sans-serif;
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
        font-family: PingFangSC-Medium,sans-serif;
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
        font-family: PingFangSC-Medium,sans-serif;
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
      position: fixed;
      bottom: 0px;
      margin: auto;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      padding: 20px 16px 20px;
      box-sizing: border-box;
      background-color: #fff;
      z-index: 1;
      .desc {
        font-family: PingFangSC-Regular,sans-serif;
        font-size: 12px;
        color: #959A9F;
        letter-spacing: 0;
        text-align: center;
        font-weight: 400;
      }
      .btn {
        margin-top: 10px;
        height: 44px;
        width: 100%;
        border-radius: 88px;
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
.download {
  height: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 20px;
    line-height: 32px;
    color: rgba(14,14,14,1);
  }
  .desc {
    font-size: 15px;
    line-height: 21px;
    margin-top: 15px;
    color: rgba(89,89,94,1);
  }
  .btn {
    cursor: pointer;
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 48px;
    background: #000;
    color: #fff;
    margin-top: 40px;
    font-size: 14px;
    line-height: 24px;
    box-sizing: border-box;
  }
}
</style>
