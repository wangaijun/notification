<template>
    <div class="root">
        <div>{{group.name}}</div>
        <Item v-for="i in group.list" :key="i.id" :item="i" @click="checked"/>
    </div>
</template>

<script>
import Item from "@/components/Item.vue"
export default {
    name:'Group',
    components:{
        Item,
    },
    props:{
        group:{
            type:Object,
            default:function(){
                return{
                    id:2,
                    name:'建设方',
                    list:[]
                }
            }
        }
    },
    methods:{
        checked(sub){
            this.$emit('click',sub)
        }
    }
}
</script>

<style lang="less" scoped>
.root{
    background-color: white;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
}
</style>
