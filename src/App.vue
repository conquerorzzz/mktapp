<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.steps .el-collapse-item__header.is-active {
  background: #F8F8F8;
}
.steps .el-collapse-item__wrap {
  background: #F8F8F8;
}
.steps .el-collapse-item__header {
  background: #F8F8F8;
}
.rank .el-table .cell {
  padding: 0;
}
.rank .el-table td.el-table__cell,.rank .el-table th.el-table__cell.is-leaf {
  border-bottom: none;
}.rank .el-table td.el-table__cell {
  padding: 0 0 18px 0;
}
.rank .el-table th.el-table__cell {
  padding: 0 0 11px 0;
}
.rank .el-table th.el-table__cell {
  font-family: PingFangSC-Regular,sans-serif;
  font-size: 12px;
  color: #959A9F;
  line-height: 16px;
  font-weight: 400;
}
@font-face {
  font-family: 'HarmonyOS_Sans';
  src: url('@/assets/fonts/HarmonyOS_Sans/HarmonyOS_Sans_Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'HarmonyOS_Sans_Medium';
  src: url('@/assets/fonts/HarmonyOS_Sans/HarmonyOS_Sans_Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'HarmonyOS_Sans_Bold';
  src: url('@/assets/fonts/HarmonyOS_Sans/HarmonyOS_Sans_Bold.ttf') format('truetype');
}
</style>
