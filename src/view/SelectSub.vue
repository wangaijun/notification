<template>
    <div class="root">
        <Group v-for="item in list" :key="item.id" :group="item" />
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
            list:[]
        }
    },
    mounted(){
        let s = '[{"id":2,"name":"建设方","orderNo":2,"isDelete":0,"fullPath":"2","parentId":null},{"id":3,"name":"勘察设计方","orderNo":3,"isDelete":0,"fullPath":"3","parentId":null},{"id":4,"name":"监理方","orderNo":4,"isDelete":0,"fullPath":"4","parentId":null},{"id":5,"name":"总承包","orderNo":1,"isDelete":0,"fullPath":"5","parentId":null},{"id":6,"name":"专业承包","orderNo":6,"isDelete":0,"fullPath":"6","parentId":null},{"id":7,"name":"劳务分包","orderNo":5,"isDelete":0,"fullPath":"7","parentId":null},{"id":8,"name":"材料供应商","orderNo":7,"isDelete":0,"fullPath":"8","parentId":null},{"id":9,"name":"其他","orderNo":8,"isDelete":0,"fullPath":"9","parentId":null}]'
        this.list = JSON.parse(s)
    }
}
</script>

<style lang="less" scoped>
.root{

}
</style>

