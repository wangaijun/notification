<template>
    <div class="root">
        <x-header :left-options="{backText:'',}">
            <span>选择分包单位</span>
        </x-header>
        <search 
            @on-change="getResult"
            :results="results"
            v-model="value"
            ref="search"></search>
        <Group v-for="item in list" :key="item.id" :group="item" @click="checked"/>
    </div>
</template>

<script>
import Group from '@/components/Group.vue'
export default {
    name:'SelectSub',
    components:{
        Group,
    },
    data(){
        return {
            list:[],

            results: [],
            value: '',
        }
    },
    mounted(){
        let s1 = '[{"id":2,"name":"建设方","orderNo":2,"isDelete":0,"fullPath":"2","parentId":null},{"id":3,"name":"勘察设计方","orderNo":3,"isDelete":0,"fullPath":"3","parentId":null},{"id":4,"name":"监理方","orderNo":4,"isDelete":0,"fullPath":"4","parentId":null},{"id":5,"name":"总承包","orderNo":1,"isDelete":0,"fullPath":"5","parentId":null},{"id":6,"name":"专业承包","orderNo":6,"isDelete":0,"fullPath":"6","parentId":null},{"id":7,"name":"劳务分包","orderNo":5,"isDelete":0,"fullPath":"7","parentId":null},{"id":8,"name":"材料供应商","orderNo":7,"isDelete":0,"fullPath":"8","parentId":null},{"id":9,"name":"其他","orderNo":8,"isDelete":0,"fullPath":"9","parentId":null}]'
        let gs = JSON.parse(s1)
        let s2 = '[{"id":"1580010143400535","name":"广联达建设一局","description":"","type":null,"major":null,"majorName":null,"groupId":2,"orderNo":1,"isDelete":0},{"id":"1581062175331191","name":"广联达勘察设计院","description":"","type":null,"major":null,"majorName":null,"groupId":3,"orderNo":2,"isDelete":0},{"id":"1581062192135033","name":"广联达监理有限公司","description":"","type":null,"major":null,"majorName":null,"groupId":4,"orderNo":3,"isDelete":0},{"id":"1581062207357819","name":"广联达劳务分包1公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":4,"isDelete":0},{"id":"1581062219464573","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":5,"isDelete":1},{"id":"1581062234637183","name":"广联达专业承包公司","description":"","type":null,"major":null,"majorName":null,"groupId":6,"orderNo":6,"isDelete":0},{"id":"1581577696358326","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":7,"isDelete":1},{"id":"1581578381132744","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":8,"isDelete":0},{"id":"1582196587859833","name":"广联达劳务分包3公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":9,"isDelete":0},{"id":"1582196593771387","name":"广联达劳务分包4公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":10,"isDelete":0},{"id":"1582196599639933","name":"广联达劳务分包5公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":11,"isDelete":0},{"id":"1582196607160191","name":"广联达劳务分包6公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":12,"isDelete":0},{"id":"1582196613392257","name":"广联达劳务分包7公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":13,"isDelete":0}]'
        let subs = JSON.parse(s2)
        for(let i=0;i<subs.length;i++){
            let sub = subs[i]
            sub.visible = true
        }
        for(let i=0;i<gs.length;i++){
            let g = gs[i]
            g.list = []
            for(let j=0;j<subs.length;j++){
                let sub = subs[j]
                if(sub.groupId==g.id)g.list.push(sub)
            }
        }
        this.list = gs
    },
    methods:{
        checked(sub){
            this.$store.commit('setsub',sub)
            this.$router.go(-1)
        },
        getResult (val) {
            console.log('你的搜索关键字是', val)
            let len = this.list.length
            for(let i=0;i<len;i++){
                let g = this.list[i]
                if(!g.list)continue
                for(let j=0; j<g.list.length; j++){
                    let sub = g.list[j]
                    if(sub.name.indexOf(val)!=-1){
                        sub.visible = true
                    }else{
                        sub.visible = false
                    }
                }
            }
        },
    }
}
</script>

<style lang="less" scoped>
.root{
    font-size: 13px;
}
.vux-search-fixed {
    position: relative !important;
}
</style>

