<template>
  <div>
    <x-header :left-options="{showBack:false,backText:'',}">
      <span>通知列表</span>
      <i slot="right" @click="on_plus_btn_click" class="iconfont  icon-jiahao"></i>
    </x-header>
    <div >
      <Child :obj = "item" v-for="item in list" :key="item.id" @click="edit(item)"/>
    </div>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'

export default {
  components: {
    Child,
  },
  data () {
    return {
      list:[],
    }
  },
  methods:{
    on_plus_btn_click(){
      console.log("on click");
      this.$router.push('/AddNotification')
    },
    edit(item){
      console.log(item);
      this.$store.commit('setEditNotification',item)
      this.$router.push('/AddNotification')
    }
  },
  mounted:function(){
    // let s = '[{"noticeId":1583100951398439,"content":"通知内容","noticeType":1,"status":0,"createDate":1545997022000,"resourceId":null,"updateDate":null,"creatorId":"6458251148183884119","responsibleId":"6458251148183884119","subcontractorId":"1581062192135033","participants":"6298842148508439286,6225576885289685719","remark":"备注","noticeDate":1545996992000,"isToAllMember":0,"isAdd":1,"creatorName":"罗少帅","responsibleName":"罗少帅","finishRead":0}]'
    // this.list = JSON.parse(s)

    this.$axios
      .post('api/v1/projects/1579013294676606/notice/list'
      ,{isFilterCurrentUserRelatedRecord:1,pageSize:1000,noticeType:[1],pageNum:1})
      .then(response => {
        console.log(response);
        if(response.data.code==0){
          this.list = response.data.data.list || []
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style scoped>
</style>
