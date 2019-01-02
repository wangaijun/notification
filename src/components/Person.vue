<template>
    <div class="root">
        {{obj.userName}}
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
.roo{

}
</style>

