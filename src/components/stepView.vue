<template>
  <div class="steps">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="item.title" class="item" v-for="(item,index) in steps" :key="index" :name="index">
        <template #title>
          <span class="no">{{item.id}}</span>
          <span class="stepName">{{item.title}}</span>
        </template>
        <div class="desc">{{item.desc}}</div>
        <div class="operate-btn" @click="connect()">{{$t('interaction')}}</div>
        </el-collapse-item>
    </el-collapse>
    <div class="project">
      <div class="desc">{{project.desc}}</div>
      <div class="social">
        <img src="@/assets/img/twitter.svg"/>
        <img src="@/assets/img/discord.svg"/>
        <img src="@/assets/img/telegram.svg"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref, watch, onMounted, computed } from 'vue'
import { connectMetaMask, connectTon } from '@/utils/index.ts'
import { useUserStore } from '@/store/userStore'
import { TonConnect } from '@tonconnect/sdk';
import axiosInstance from '@/utils/axios.ts'
const tonConnect = new TonConnect();
const userStore = useUserStore();
onMounted(async() => {
  await axiosInstance.get('/user/getcode/0x0d29bb364c79965e18bf1d044099c50173ea4cfb');
  await axiosInstance.get('/activity/1');
})
const props = defineProps({
  steps: Array,
  project: Object,
  status: Number
})
const activeNames = ref(['0'])
const connect = async ()=>{
  await connectMetaMask(userStore)
  console.log('userStore.$state.address',userStore.$state.address)
  try {
        const data = {
          user_address: userStore.$state.address,
          invite_code: "y1HuMg",
          project_id: 1
        }
        const dataV = {
          user_address: userStore.$state.address,
          project_id: 1
        }
        const dataTask  = {
          user_address: userStore.$state.address,
          project_id: 1,
          steps_status: [1,2]
        }
        const response = await axiosInstance.post('/user/jointask',data);
        const vRes = await axiosInstance.post('/user/verifytask',dataV);
        const tRes = await axiosInstance.post('/user/dotask',dataTask);
        const codeRes = await axiosInstance.get('/user/getcode/' + userStore.$state.address);
        if(codeRes.status === 1) {
          userStore.setCode(codeRes.data)
        }
        console.log('userStore',userStore)
        console.log(response.data);
      } catch (error) {
        console.error('Request failed:', error);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-collapse-item__header.is-active {
  background: #F8F8F8;
}
.el-collapse-item__wrap {
  background: #F8F8F8;
}
.steps {
  .item {
    background: #F8F8F8;
    border-radius: 4px;
    margin-top: 10px;
    position: relative;
    .no {
      width: 16px;
      height: 16px;
      background: #286DFF;
      border-radius: 8px;
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #FFFFFF;
      line-height: 16px;
      font-weight: 500;
      text-align: center;
      line-height: 16px;
      margin: 0 8px;
    }
    .desc {
      text-align: left;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #959A9F;
      line-height: 20px;
      font-weight: 400;
      margin-left: 32px;
    }
    .operate-btn {
      margin-top: 10px;
      width: 74px;
      height: 32px;
      text-align: center;
      background: #286DFF;
      border-radius: 17px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      line-height: 32px;
      margin-left: 32px;
    }
  }
  .project {
    margin-top:20px;
    .desc {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #959A9F;
      letter-spacing: 0;
      line-height: 16px;
      font-weight: 400;
      text-align: left;
    }
    .social {
      margin-top: 10px;
      display: flex;
      img {
        width: 16px;
        margin-right: 8px;
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
      text-align: center;
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
</style>
