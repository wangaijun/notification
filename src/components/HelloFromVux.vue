<template>
  <div>
    <x-header :left-options="{showBack:false,}">
      <span>通知列表</span>
      <i slot="right" @click="on_plus_btn_click" class="iconfont  icon-jiahao"></i>
    </x-header>
  </div>
</template>

<script>
import {  } from 'vux'

export default {
  components: {
    
  },
  data () {
    return {
    }
  },
  methods:{
    on_plus_btn_click(){
      console.log("on click");
      this.$router.push('/AddNotification')
    },
  }
}
</script>

<style>
</style>
