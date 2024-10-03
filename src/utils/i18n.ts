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
  },
  zh: {
    reward: '奖励',
    participants: '参与人数',
    step: '交互步骤',
    rank: '排行榜',
    interaction: '去交互',
    verify: '验证',
    verifyMsg: '*完成全部任务后，点击验证通过即可领取奖励',
  },
};

const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'en', 
  messages,
});

export default i18n;
