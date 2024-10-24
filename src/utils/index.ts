/* eslint-disable */
import { ethers } from 'ethers';
import { TonConnect } from '@tonconnect/sdk';


export function formatDate(time: Date | number | string | undefined, format: string = "yyyy-MM-dd HH:mm:ss"): string | number {
    let date: Date;
    let separator: string | undefined;
  
    if (time === 'now') {
      date = new Date();
    } else if (typeof time === 'string' && time.length === 1) {
      date = new Date();
      separator = time;
      format = `yyyy${separator}MM${separator}dd HH:mm:ss`;
    } else if (time === undefined && format.length === 1) {
      date = new Date();
      separator = format;
      format = `yyyy${separator}MM${separator}dd HH:mm:ss`;
    } else {
      date = time instanceof Date ? time : new Date(time!);
      if (isNaN(date.getTime())) throw new Error("Invalid date");
    }
  
    if (format === 'timestamp') {
      return date.getTime(); 
    }
    if (format === 'timestamp-seconds') {
      return Math.floor(date.getTime() / 1000);
    }
  
    const pad = (num: number): string => String(num).padStart(2, "0");
    const formats: Record<string, string> = {
      yyyy: date.getFullYear().toString(),
      MM: pad(date.getMonth() + 1),
      dd: pad(date.getDate()),
      HH: pad(date.getHours()),
      mm: pad(date.getMinutes()),
      ss: pad(date.getSeconds()),
    };
  
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => formats[match]);
  }

  declare global {
    interface Window {
      ethereum?: any;
    }
  }
  const checkMetaMask = () => {
    if (typeof window.ethereum === 'undefined') {
      alert('请安装 MetaMask 钱包!');
    }
  }
export const connectMetaMask = async (userStore:any) => {
  console.log("window",window)
  console.log("window tw",window._tw_)
  // console.log("window tw gotoConnectWallet",window._tw_.gotoConnectWallet)
  // let address
  // if (window._tw_ && typeof window._tw_.gotoConnectWallet === 'function') {
  //   address =  window._tw_.gotoConnectWallet()
  // }
  try {
    const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    alert(selectedAccount)
    userStore.setAddress(selectedAccount);
    userStore.setConnect(true);

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      console.log("accountsChanged",accounts[0])
      userStore.setAddress(accounts[0]);
    });
    window.ethereum.on('chainChanged', () => {
      console.log("chainChanged")
      window.location.reload();
    });

  } catch (error) {
    console.error('connect MetaMask failed:', error);
  }
};

export const uploadToFile = async (file:any) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('https://api.imgur.com/3/upload', {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID f3fca3dbe570bfc',  // 替换为你的Client ID
    },
    body: formData,
  });

  const data = await response.json();
  console.log('Imgur URL:', data.data.link);
}

// export const connectTon = async(userStore:any) => {
//   const tonConnect = new TonConnect();
//   try {
//     await tonConnect.connectWallet();

//     const wallet = tonConnect.wallet;
//     if (wallet) {
//       userStore.setAddress(wallet.account.address)
//       userStore.setConnect(true);
//     } else {
//       alert('failed');
//     }
//     tonConnect.on('statusChange', (status:any) => {
//       if (status === 'connected') {
//         console.log('已连接');
//       } else if (status === 'disconnected') {
//         console.log('已断开连接');
//       }
//     });
//   } catch (error) {
//     console.error('failed:', error);
//   }
// }