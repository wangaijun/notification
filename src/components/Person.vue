<template>
    <div class="root">
        <flexbox class="item">
          <flexbox-item>{{obj.userName}}</flexbox-item>
          <flexbox-item class="right-item"><input type="checkbox"/></flexbox-item>
        </flexbox>
    </div>
</template>

<script>
export default {
    name:'Person',
    props:{
         obj: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { 
                    userId:'5917242334161117925',
                    userName: '张波',
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.item{
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 1px;
    width: 92%;
    padding: 5px 10px 5px 10px;
    background-color: white;
}
.right-item{
    text-align: right;
}
</style>

