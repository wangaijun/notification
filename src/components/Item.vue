<template>
    <div class="root">
        <flexbox>
          <flexbox-item>{{item.name}}</flexbox-item>
          <flexbox-item class="item-right"><input type="checkbox" @click="checked"/></flexbox-item>
        </flexbox>
    </div>
</template>

<script>
export default {
    name:'Item',
    props:{
        item:{
            type:Object,
            default:function(){
                return{
                    id:'1580010143400535',
                    name:'广联达建设一局',
                }
            }
        }
    },
    methods:{
        checked(){
            this.$emit('click',this.item)
        }
    }
}
</script>

<style lang="less" scoped>
.root{

}
.item-right{
    text-align: right;
}
</style>
