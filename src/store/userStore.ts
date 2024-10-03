/* eslint-disable */
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    walletName: '',
    connected: false,
    netName: '',
    address: '',
    code: ''
  }),
  
  getters: {
  },
  
  actions: {
    setConnect(isConnected: boolean) {
      this.connected = isConnected;
    },
    setAddress(address: string) {
      this.address = address;
    },
    setWalletName(name: string) {
      this.walletName = name;
    },
    setNetName(name: string) {
      this.netName = name;
    },
    setCode(code: string) {
      this.code = code
    }
  },
});
