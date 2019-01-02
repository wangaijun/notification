<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
*{
  margin: 0px;
  padding: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
body {
  background-color: #eee;
}
</style>
