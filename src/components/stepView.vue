<template>
  <div class="steps">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="item.title" :icon="ArrowRightBold" class="item" v-for="(item,index) in steps" :key="index" :name="index">
        <template #title>
          <span class="no">{{item.id}}</span>
          <span class="stepName">{{item.title}}</span>
        </template>
        <div class="desc">{{item.desc}}</div>
        <div class="operate-btn" @click="step(item)">{{$t('interaction')}}</div>
      </el-collapse-item>
    </el-collapse>
    <div class="project">
      <div class="desc">{{project.desc}}</div>
      <div class="social">
        <img v-if="project.x" src="@/assets/img/twitter.svg" @click="open(project.x)"/>
        <img v-if="project.dc" src="@/assets/img/discord.svg" @click="open(project.dc)"/>
        <img v-if="project.tg" src="@/assets/img/telegram.svg" @click="open(project.tg)"/>
      </div>
    </div>
  </div>
  <canvas id="qrcode"></canvas>
  <el-drawer
    v-model="shareFlag"
    title="Share"
    direction="btt"
    size="50%"
  >
  <shareView />
  </el-drawer>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref, watch, onMounted, computed } from 'vue'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { connectMetaMask, connectTon, uploadToFile } from '@/utils/index.ts'
import shareView from './shareView.vue'
import { useUserStore } from '@/store/userStore'
import { TonConnect } from '@tonconnect/sdk';
import axiosInstance from '@/utils/axios.ts'
import { defineComponent } from 'vue';
const tonConnect = new TonConnect();
const userStore = useUserStore();
import QRCode from 'qrcode'
onMounted(async() => {
})
const props = defineProps({
  steps: Array,
  project: Object,
  isAve: Boolean
})
const emit = defineEmits(['sendMessage']);

// 触发事件并传递参数
const sendDataToParent = ($type) => {
  if($type < 0) {
    emit('sendMessage', { status: -1 });
  }
};
const open = ($url) => {
  window.open($url)
}
const activeNames = ref([0,1])
const step = async ($item)=>{
  if(!props.isAve) {
    sendDataToParent(-1)
  }
  if($item.title.indexOf('链接钱包') > -1) {
    await connect()
  }
  if($item.title.indexOf('分享') > -1) {
    share()
  }
}
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
        const codeRes = await axiosInstance.get('/user/getcode/' + userStore.$state.address);
        if(codeRes.data && codeRes.data.status === 1) {
          console.log('codeRes',codeRes)
          setQR(codeRes.data.data)
          userStore.setCode(codeRes.data.data)
        }
        console.log('userStore',userStore)
        console.log(response.data);
      } catch (error) {
        console.error('Request failed:', error);
  }
}

const setQR = ($code) =>{
  const qrData = "https://conquerorzzz.github.io/mktapp/?lang=zh"
  QRCode.toCanvas(document.getElementById('qrcode'), $code, {
    width: 200,
    color: {
      dark: '#000000',  // 二维码颜色
      light: '#FFFFFF'  // 背景颜色
    }
    }, function (error) {
      if (error) console.error(error);
  })
  const canvas = document.getElementById('qrcode')
  canvas.toBlob(blob => {
    if (blob) {
        // 3. 将 Blob 转换为 File 对象
        const file = new File([blob], "qrcode.png", { type: "image/png" });
        uploadToFile(file)
    } else {
        console.log('failed to blob')
    }
  }, "image/png");
}
const shareFlag = ref(false)
const share = () => {
  shareFlag.value = true
  setQR(userStore.$state.code)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-collapse-item__header.is-active {
  background: #F8F8F8;
}
#qrcode {
  display: none;
}
.steps {
  padding-bottom: 120px;
  .el-collapse {
    border: none !important;
  }
  .item {
    background: #F8F8F8;
    border-radius: 8px;
    margin-top: 10px;
    position: relative;
    overflow: hidden;
    border-bottom: none solid rgba(0,0,0,0) !important;
    .no {
      width: 16px;
      height: 16px;
      background: #286DFF;
      border-radius: 8px;
      font-family: PingFangSC-Medium,sans-serif;
      font-size: 12px;
      color: #FFFFFF;
      line-height: 16px;
      font-weight: 300;
      text-align: center;
      line-height: 16px;
      margin: 0 8px;
    }
    .stepName {
      height: 16px;
      font-family: PingFangSC-Medium,sans-serif;
      font-size: 16px;
      color: #000;
      line-height: 16px;
      font-weight: 500;
      text-align: center;
      line-height: 16px;
    }
    .desc {
      text-align: left;
      font-family: PingFangSC-Regular,sans-serif;
      font-size: 14px;
      color: #959A9F;
      line-height: 20px;
      font-weight: 400;
      margin-left: 32px;
    }
    .operate-btn {
      margin-top: 10px;
      width: fit-content;
      padding: 0 16px;
      height: 32px;
      text-align: center;
      background: #286DFF;
      border-radius: 17px;
      font-family: PingFangSC-Regular,sans-serif;
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
      font-family: PingFangSC-Regular,sans-serif;
      font-size: 12px;
      color: #959A9F;
      letter-spacing: 0;
      line-height: 16px;
      font-weight: 400;
      text-align: left;
      line-height: 20px;
    }
    .social {
      margin-top: 10px;
      display: flex;
      img {
        cursor: pointer;
        width: 16px;
        margin-right: 8px;
      }
    }
  }
}
</style>
