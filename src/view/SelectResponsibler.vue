<template>
    <div class="root">
        <x-header :left-options="{backText:'',}">
            <span>{{title}}</span>
            <i slot="right" v-if="mulsel" @click="on_ok_btn_click" class="iconfont  icon-duigou"></i>
        </x-header>
        <search 
            @on-change="getResult"
            :results="results"
            v-model="value"
            auto-fixed="false"
            position="inherit"
            ref="search"></search>
        <Subcon v-for="item in list" :key="item.id" :obj="item" @onchecked="checked"/>
    </div>
</template>

<script>
import Subcon from "@/components/Subcon.vue";
export default {
    name:'SelectResponsibler',
    components:{
        Subcon,
    },
    data(){
        return {
            list:[],
            mulsel:false,
            sellist:[],
            title:'',

            results: [],
            value: ''
        }
    },
    mounted () {
        this.title = this.$route.query.title
        this.mulsel = this.$route.query.mulsel
        let s = '[{"id":"1580010143400535","name":"广联达建设一局","description":"","type":null,"major":null,"majorName":null,"groupId":2,"orderNo":1,"isDelete":0},{"id":"1581062175331191","name":"广联达勘察设计院","description":"","type":null,"major":null,"majorName":null,"groupId":3,"orderNo":2,"isDelete":0},{"id":"1581062192135033","name":"广联达监理有限公司","description":"","type":null,"major":null,"majorName":null,"groupId":4,"orderNo":3,"isDelete":0},{"id":"1581062207357819","name":"广联达劳务分包1公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":4,"isDelete":0},{"id":"1581062219464573","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":5,"isDelete":1},{"id":"1581062234637183","name":"广联达专业承包公司","description":"","type":null,"major":null,"majorName":null,"groupId":6,"orderNo":6,"isDelete":0},{"id":"1581577696358326","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":7,"isDelete":1},{"id":"1581578381132744","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":8,"isDelete":0},{"id":"1582196587859833","name":"广联达劳务分包3公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":9,"isDelete":0},{"id":"1582196593771387","name":"广联达劳务分包4公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":10,"isDelete":0},{"id":"1582196599639933","name":"广联达劳务分包5公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":11,"isDelete":0},{"id":"1582196607160191","name":"广联达劳务分包6公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":12,"isDelete":0},{"id":"1582196613392257","name":"广联达劳务分包7公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":13,"isDelete":0}]'
        let arr = JSON.parse(s)
        for(let i=0;i<arr.length;i++){
            let c = '[{"id":"1581062244475777","userId":"5917242334161117925","userName":"张波","subcontractorId":"1581062175331191","projectId":"1579013294676606","isDelete":0},{"id":"1582196708835208","userId":"6097914644337128288","userName":"孙雪梅","subcontractorId":"1582196587859833","projectId":"1579013294676606","isDelete":0},{"id":"1582196713186186","userId":"6149485106724516851","userName":"郭琦","subcontractorId":"1582196593771387","projectId":"1579013294676606","isDelete":0},{"id":"1582196717527948","userId":"6191073588582650342","userName":"王爱军","subcontractorId":"1582196599639933","projectId":"1579013294676606","isDelete":0},{"id":"1581062250010500","userId":"6225576885289685719","userName":"武星","subcontractorId":"1581062192135033","projectId":"1579013294676606","isDelete":0},{"id":"1581578387784651","userId":"6280443163329843557","userName":"程宁宁","subcontractorId":"1581578381132744","projectId":"1579013294676606","isDelete":0},{"id":"1582196738620304","userId":"6286777766680400383","userName":"刘长城","subcontractorId":"1582196613392257","projectId":"1579013294676606","isDelete":0},{"id":"1581062254447495","userId":"6298842148508439286","userName":"张浩","subcontractorId":"1581062207357819","projectId":"1579013294676606","isDelete":0},{"id":"1582196734113678","userId":"6414860276977652163","userName":"李元刚","subcontractorId":"1582196607160191","projectId":"1579013294676606","isDelete":0},{"id":"1581062349953936","userId":"6428541716035699242","userName":"周晖","subcontractorId":"1581062234637183","projectId":"1579013294676606","isDelete":0},{"id":"1580010148929115","userId":"6458251148183884119","userName":"罗少帅","subcontractorId":"1580010143400535","projectId":"1579013294676606","isDelete":0}]'  
            arr[i].list = JSON.parse(c)
        }
        this.list = arr
    },
    methods:{
        checked(ob){
            if(this.mulsel){
                this.sellist.push(ob)
            }
            else{
                this.$store.commit('setcurObj',ob)
                this.$router.go(-1)
            }
        },
        on_ok_btn_click(){
            if(this.mulsel) {
                console.log(this.sellist);
                this.$store.commit('setparts',this.sellist)
                this.$router.go(-1)
            }
        },
        getResult (val) {
            console.log('你的搜索关键字是', val)

        },
    }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style lang="less" scoped>

.vux-search-fixed {
    position: relative !important;
}
.root{

}
</style>

