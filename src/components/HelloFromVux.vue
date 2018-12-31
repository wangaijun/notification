<template>
  <div>
    {{info}}
    <x-header :left-options="{showBack:false,backText:'',}">
      <span>通知列表</span>
      <i slot="right" @click="on_plus_btn_click" class="iconfont  icon-jiahao"></i>
    </x-header>
    <div >
      <child :obj = "item" v-for="item in list" :key="item.id"/>
    </div>
  </div>
</template>

<script>
import child from '@/components/child.vue'

export default {
  components: {
    child,
  },
  data () {
    return {
      list:[],
      info: null,
    }
  },
  methods:{
    on_plus_btn_click(){
      console.log("on click");
      this.$router.push('/AddNotification')
    },
  },
  mounted:function(){
    let s = '[{"noticeId":1583100951398439,"content":"通知内容","noticeType":1,"status":0,"createDate":1545997022000,"resourceId":null,"updateDate":null,"creatorId":"6458251148183884119","responsibleId":"6458251148183884119","subcontractorId":"1581062192135033","participants":"6298842148508439286,6225576885289685719","remark":"备注","noticeDate":1545996992000,"isToAllMember":0,"isAdd":1,"creatorName":"罗少帅","responsibleName":"罗少帅","finishRead":0}]'
    this.list = JSON.parse(s)

    this.$axios
      .post('api/v1/projects/1579013294676606/notice/list'
      ,{isFilterCurrentUserRelatedRecord:1,pageSize:1000,noticeType:[1],pageNum:1})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style scoped>
</style>
