<template>
  <div class="rank">
    <div class="data">
      <div class="item">
        <div class="title">我的分享</div>
        <div class="value">{{userInfo.me.share_count}}</div>
      </div>
      <div class="item">
        <div class="title">已注册人数</div>
        <div class="value">{{userInfo.me.invitor_count}}</div>
      </div>
      <div class="item">
        <div class="title">我的预估奖励</div>
        <div class="value">{{userInfo.me.estimate_rewards}}</div>
      </div>
      <div v-if="userInfo.me.final_status === 1" class="status1 status"><span>进行中</span></div>
      <div v-if="userInfo.me.final_status === 2" class="status2 status"><span>待发放</span></div>
      <div v-if="userInfo.me.final_status === 3" class="status3 status"><span>已发放</span></div>
    </div>
    <div class="table">
      <el-table :data="userInfo.rank" style="width: 100%">
        <el-table-column prop="rank" label="排名" width="30">
          <template #default="scope">
            <div v-if="scope.row.rank === 1" class="first">{{ scope.row.rank }}</div>
            <div v-if="scope.row.rank === 2" class="second">{{ scope.row.rank }}</div>
            <div v-if="scope.row.rank === 3" class="third">{{ scope.row.rank }}</div>
            <div v-if="scope.row.rank > 3" class="other">{{ scope.row.rank }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="user_address" label="地址" width="80">
          <template #default="scope">{{ getAddress(scope.row.user_address) }}</template>
        </el-table-column>
        <el-table-column prop="share_count" label="分享人数" width="65">
          <template #header>
            <div class="right">分享人数</div>
          </template>
          <template #default="scope">
            <div class="right">{{ scope.row.share_count }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="invitor_count" class="right" label="注册人数" width="65">
          <template #header>
            <div class="right">注册人数</div>
          </template>
          <template #default="scope">
            <div class="right">{{ scope.row.invitor_count }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="estimate_rewards" label="预估奖励" >
          <template #header>
            <div class="right">预估奖励</div>
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
import { ref, watch, onMounted, computed } from 'vue'
import { userInfo } from '@/utils/value.ts'
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
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #959A9F;
        line-height: 16px;
        font-weight: 400;
        margin-bottom: 4px;
        text-align: left;
      }
      .value {
        font-family: HarmonyOS_Sans;
        font-size: 14px;
        color: #333333;
        line-height: 20px;
        font-weight: 400;
        text-align: left;
      }
    }
    .status {
      width: 36px;
      height: 14px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 0 4px 0 6px;
      font-family: PingFangSC-Regular;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 400;
      line-height: 14px;
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
    .first {
      width: 16px;
      height: 16px;
      background-image: linear-gradient(40deg, #F9F23D 0%, #FBBD1F 77%);
      border-radius: 8px;
      font-family: HarmonyOS_Sans_Medium;
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
      font-family: HarmonyOS_Sans_Medium;
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
      font-family: HarmonyOS_Sans_Medium;
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
      font-family: HarmonyOS_Sans;
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
