/* eslint-disable */
// src/i18n.js
import { createI18n } from 'vue-i18n';

// 语言包定义
const messages = {
  en: {
    reward: 'Rewards',
    participants: 'Participants',
    step: 'Steps',
    rank: 'Rank',
    interaction: 'Interaction',
    verify: 'Verify',
    verifyMsg: '*After completing all tasks, click Verify Pass to receive the reward',
    myShare: 'My Share',
    registeredUsers: 'Registered Users',
    myEstimatedRewards: 'My Est. Rewards',
    inProgress: 'In Progress',
    pendingDistribution: 'Pending Distribution',
    distributed: 'Distributed',
    ranking: 'Rank',
    Address: 'Address',
    numberOfShares: 'Shares',
    numberOfRegistrations: 'Registrations',
    estimatedRewards: 'Est. Rewards',
  },
  zh: {
    reward: '奖励',
    participants: '参与人数',
    step: '交互步骤',
    rank: '排行榜',
    interaction: '去交互',
    verify: '验证',
    verifyMsg: '*完成全部任务后，点击验证通过即可领取奖励',
    myShare: '我的分享',
    registeredUsers: '已注册人数',
    myEstimatedRewards: '我的预估奖励',
    inProgress: '进行中',
    pendingDistribution: '待发放',
    ranking: '排名',
    distributed: '已发放',
    Address: '地址',
    numberOfShares: '分享人数',
    numberOfRegistrations: '注册人数',
    estimatedRewards: '预估奖励',
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en', 
  fallbackLocale: 'en', 
  messages,
});
export default i18n;
