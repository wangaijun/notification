<template>
    <div class="root">
        <flexbox>
            <flexbox-item :span="1/2">
                <i class="iconfont icon-people people"></i>发布人：{{obj.creatorName}}
            </flexbox-item>
            <flexbox-item :span="1/2">
                <i class="iconfont icon-people people"></i>责任人：{{obj.responsibleName}}
            </flexbox-item>
        </flexbox>
        <div>通知时间：{{date}}</div>
        <div>通知内容：{{obj.content}}</div>
    </div>
</template>

<script>
import { dateFormat } from 'vux'

export default {
    name:"Child",
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
    },
    computed:{
        date(){
            return dateFormat(new Date(this.obj.noticeDate),'YYYY-MM-DD HH:mm')
        }
    }
}
</script>

<style lang="less" scoped>
.root{
    font-size: 13px;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: #fff;
}
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
.people{
    color:#46b;
}
</style>
