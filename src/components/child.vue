<template>
    <div>
        <div>{{obj.creatorName}}</div>
        <div>{{obj.responsibleName}}</div>
        <div>{{obj.noticeDate}}</div>
        <div>{{obj.content}}</div>
    </div>
</template>

<script>
export default {
    name:"child",
    props:{
        obj: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { 
                    creatorName: '张三',
                    responsibleName: '李四',
                    noticeDate:'2018-12-26 12:24',
                    content:'下午开会',
                }
            }
    }
    }
}
</script>

<style>

</style>
