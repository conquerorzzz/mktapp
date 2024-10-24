<template>
  <div class="rank">
    <div class="data">
      <div class="item">
        <div class="title">{{$t('myShare')}}</div>
        <div class="value">{{userInfo.share_count}}</div>
      </div>
      <div class="item">
        <div class="title">{{$t('registeredUsers')}}</div>
        <div class="value">{{userInfo.invitor_count}}</div>
      </div>
      <div class="item">
        <div class="title">{{$t('myEstimatedRewards')}}</div>
        <div class="value">{{userInfo.estimate_rewards}}</div>
      </div>
      <div v-if="userInfo.final_status === 1" class="status1 status"><span>{{$t('inProgress')}}</span></div>
      <div v-if="userInfo.final_status === 2" class="status2 status"><span>{{$t('pendingDistribution')}}</span></div>
      <div v-if="userInfo.final_status === 3" class="status3 status"><span>{{$t('distributed')}}</span></div>
    </div>
    <div class="table">
      <el-table :data="rankList" style="width: 100%" height="calc(100vh - 500px)">
        <el-table-column prop="rank" :label="$t('ranking')" width="30">
          <template #default="scope">
            <div v-if="scope.row.rank === 1" class="first">{{ scope.row.rank }}</div>
            <div v-if="scope.row.rank === 2" class="second">{{ scope.row.rank }}</div>
            <div v-if="scope.row.rank === 3" class="third">{{ scope.row.rank }}</div>
            <div v-if="scope.row.rank > 3" class="other">{{ scope.row.rank }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="user_address" :label="$t('Address')" width="85">
          <template #default="scope">{{ getAddress(scope.row.user_address) }}</template>
        </el-table-column>
        <el-table-column prop="share_count" :label="$t('numberOfShares')" width="50">
          <template #header>
            <div class="right">{{$t('numberOfShares')}}</div>
          </template>
          <template #default="scope">
            <div class="right">{{ scope.row.share_count }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="invitor_count" class="right" :label="$t('numberOfRegistrations')" width="85">
          <template #header>
            <div class="right">{{$t('numberOfRegistrations')}}</div>
          </template>
          <template #default="scope">
            <div class="right">{{ scope.row.invitor_count }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="estimate_rewards" :label="$t('estimatedRewards')" >
          <template #header>
            <div class="right">{{$t('estimatedRewards')}}</div>
          </template>
          <template #default="scope">
            <div class="right">${{ scope.row.estimate_rewards }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref, watch, onMounted, computed } from 'vue'
import axiosInstance from '@/utils/axios.ts'
import { useUserStore } from '@/store/userStore'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const userStore = useUserStore();
const props = defineProps({
  rank: Array
})
const rankList = ref([])
const lang = ref('en')
const userInfo = ref({
  share_count: 0,
  invitor_count: 0,
  final_status: -1,
  estimate_rewards: 0,
})


onMounted( async () => {
  if (route.query.lang && route.query.lang === 'zh') {
    lang.value = 'zh'
  } else {
    lang.value = 'en'
  }
  if (route.query.activity_id) {
    const { data } = await axiosInstance.get('/activity/rank/'+route.query.activity_id)
    rankList.value = data.data
    if (userStore.$state.address) {
      const { data } = await axiosInstance.get('/user/activity/'+route.query.activity_id + '/' + userStore.$state.address )
    }
  } else {
    alert('no activity_id')
    window._tw_.back()
  }
})
const getAddress = ($address) => {
  const addressHead = $address.substr(0, 5)
  const addressTail = $address.split('').reverse().join('').substr(0, 4).split('').reverse().join('').substr(0, 4).split('').join('')
  const showAddress = addressHead + '...' + addressTail
  return showAddress
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rank {
  .data {
    background: #F8F8F8;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    padding: 14px 20px;
    box-sizing: border-box;
    height: 68px;
    position: relative;
    .item {
      width: 33%;
      display: flex;
      flex-direction: column;
      .title {
        font-family: PingFangSC-Regular,sans-serif;
        font-size: 12px;
        color: #959A9F;
        line-height: 16px;
        font-weight: 400;
        margin-bottom: 4px;
        text-align: left;
      }
      .value {
        font-family: "HarmonyOS_Sans",sans-serif;
        font-size: 14px;
        color: #333333;
        line-height: 20px;
        font-weight: 400;
        text-align: left;
      }
    }
    .status {
      height: 14px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 0 4px 0 6px;
      font-family: PingFangSC-Regular,sans-serif;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 400;
      line-height: 14px;
      span{
        padding: 0 3px;
      }
    }
    .status1 {
      background: #286DFF;
    }
    .status2 {
      background: #FF9F18;
    }
    .status3 {
      background: #286DFF;
    }
  }
  .table {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-bottom: 90px;
    .first {
      width: 16px;
      height: 16px;
      background-image: linear-gradient(40deg, #F9F23D 0%, #FBBD1F 77%);
      border-radius: 8px;
      font-family: "HarmonyOS_Sans_Medium",sans-serif;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 16px;
      font-weight: 500;
    }
    .second {
      width: 16px;
      height: 16px;
      background-image: linear-gradient(38deg, #EBEBEB 0%, #CACACA 60%);
      border-radius: 8px;
      font-family: "HarmonyOS_Sans_Medium",sans-serif;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 16px;
      font-weight: 500;
    }
    .third {
      width: 16px;
      height: 16px;
      background-image: linear-gradient(205deg, #FBCF48 0%, #F27226 100%);
      border-radius: 8px;
      font-family: "HarmonyOS_Sans_Medium",sans-serif;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 16px;
      font-weight: 500;
    }
    .other {
      width: 16px;
      height: 16px;
      border-radius: 8px;
      font-family: "HarmonyOS_Sans",sans-serif;
      font-size: 14px;
      color: #959A9F;
      line-height: 16px;
      font-weight: 400;
      text-align: center;
    }
    .right {
      text-align: right;
    }
  }
}
</style>
