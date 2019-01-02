<template>
    <div class="root">
        <flexbox class="item">
          <flexbox-item>{{ob.userName}}</flexbox-item>
          <flexbox-item class="right-item"><input type="checkbox" @click="checked"/></flexbox-item>
        </flexbox>
    </div>
</template>

<script>
export default {
    name:'Person',
    props:{
         ob: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { 
                    userId:'5917242334161117925',
                    userName: '张波',
                }
            }
        }
    },
    data(){
        return{
        }
    },
    methods:{
        checked(e){
            // console.log(this.ob);
            this.$emit('onchecked',this.ob)
        }
    }
}
</script>

<style lang="less" scoped>
.item{
    margin-left: 5px;
    margin-right: 5px;
    width: 95%;
    padding: 0px 5px;
    background-color: white;
}
.right-item{
    text-align: right;
}
</style>

