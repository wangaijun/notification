<template>
    <div class="root">
        <x-header :left-options="{backText:'',}">
            <span>选择责任人</span>
        </x-header>
        <person v-for="item in list" :obj="item" :key="item.userId"/>
    </div>
</template>

<script>
import Person from '@/components/Person.vue'
export default {
    name:'SelectResponsibler',
    components:{
        Person,
    },
    data(){
        return {
            list:[]
        }
    },
    mounted () {
        let s = '[{"id":"1581062244475777","userId":"5917242334161117925","userName":"张波","subcontractorId":"1581062175331191","projectId":"1579013294676606","isDelete":0},{"id":"1582196708835208","userId":"6097914644337128288","userName":"孙雪梅","subcontractorId":"1582196587859833","projectId":"1579013294676606","isDelete":0},{"id":"1582196713186186","userId":"6149485106724516851","userName":"郭琦","subcontractorId":"1582196593771387","projectId":"1579013294676606","isDelete":0},{"id":"1582196717527948","userId":"6191073588582650342","userName":"王爱军","subcontractorId":"1582196599639933","projectId":"1579013294676606","isDelete":0},{"id":"1581062250010500","userId":"6225576885289685719","userName":"武星","subcontractorId":"1581062192135033","projectId":"1579013294676606","isDelete":0},{"id":"1581578387784651","userId":"6280443163329843557","userName":"程宁宁","subcontractorId":"1581578381132744","projectId":"1579013294676606","isDelete":0},{"id":"1582196738620304","userId":"6286777766680400383","userName":"刘长城","subcontractorId":"1582196613392257","projectId":"1579013294676606","isDelete":0},{"id":"1581062254447495","userId":"6298842148508439286","userName":"张浩","subcontractorId":"1581062207357819","projectId":"1579013294676606","isDelete":0},{"id":"1582196734113678","userId":"6414860276977652163","userName":"李元刚","subcontractorId":"1582196607160191","projectId":"1579013294676606","isDelete":0},{"id":"1581062349953936","userId":"6428541716035699242","userName":"周晖","subcontractorId":"1581062234637183","projectId":"1579013294676606","isDelete":0},{"id":"1580010148929115","userId":"6458251148183884119","userName":"罗少帅","subcontractorId":"1580010143400535","projectId":"1579013294676606","isDelete":0}]'  
        this.list = JSON.parse(s)
    }
}
</script>

<style lang="less" scoped>
.root{

}
</style>

