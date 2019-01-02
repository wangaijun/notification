<template>
    <div class="root">
        {{group.name}}
    </div>
</template>

<script>
export default {
    name:'Group',
    props:{
        group:{
            type:Object,
            default:function(){
                return{
                    id:2,
                    name:'建设方',
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.root{
    background-color: white;
}
</style>
