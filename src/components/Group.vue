<template>
    <div class="root" @click="onclick">
        <div>
            <i v-if="dischildren" class="iconfont  icon-sanjiaoxia"></i>
            <i v-else class="iconfont  icon-sanjiaoyou"></i>
            {{group.name}}
        </div>
        <div v-if="dischildren">
            <Item v-for="i in group.list" :key="i.id" :item="i" @click="checked"/>
        </div>
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
    data(){
        return {
            dischildren:true
        }
    },
    methods:{
        checked(sub){
            this.$emit('click',sub)
        },
        onclick(){
            this.dischildren = !this.dischildren
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
