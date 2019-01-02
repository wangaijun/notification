<template>
    <div>
        <x-header :left-options="{backText:'',}">
            <span>通知</span>
            <i slot="right" @click="on_ok_btn_click" class="iconfont  icon-duigou"></i>
        </x-header>
        <div class="content">
            <flexbox class="item">
                <flexbox-item>发布人</flexbox-item>
                <flexbox-item class="item-right">{{obj.creatorName}}</flexbox-item>
            </flexbox>

            <flexbox class="item" orient="vertical">
              <flexbox-item>通知内容<span class="reddot">*</span></flexbox-item>
              <flexbox-item><textarea rows="3" v-model="obj.content" class="inputbox" placeholder="请输入通知内容"/></flexbox-item>
            </flexbox>

             <group title="" class="group">
                <datetime class="item" :value="noticeDate" format="YYYY-MM-DD HH:mm" 
                @on-change="datechange"
                :minute-list="['00', '15', '30', '45']" title="时间"></datetime>
            </group>

            <flexbox class="item">
                <flexbox-item>全员通知</flexbox-item>
                <flexbox-item class="item-right"><input v-model="obj.isToAllMember" type="checkbox"/></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >责任人</flexbox-item>
              <flexbox-item class="item-right">{{obj.responsibleName}}<i @click="on_plus_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >分包单位</flexbox-item>
              <flexbox-item class="item-right">{{obj.subcontractorId}}<i @click="on_plus_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >参与人</flexbox-item>
              <flexbox-item class="item-right">{{obj.participants}}<i @click="on_plus_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item" orient="vertical">
              <flexbox-item>备注</flexbox-item>
              <flexbox-item><textarea rows="3" v-model="obj.remark" class="inputbox" placeholder="请输入备注.00"/></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>

<script>
import { dateFormat } from 'vux'
var moment = require('moment')
let dateFrm = "YYYY-MM-DD HH:mm"

export default {
    name:'AddNotification',
    components:{
    },
    methods:{
        on_ok_btn_click(){
            console.log('on click');
        },
        on_plus_btn_click(){

        },
        datechange(d){
            console.log(d);
            this.obj.noticeDate = moment(d,dateFrm)
        },
    },
    computed:{
        noticeDate(){
            return moment(this.obj.noticeDate).format(dateFrm)
        }
    },
    data(){
        return{
            obj:{
                content:"通知内容",
                createDate:1545997022000,
                creatorId: "6458251148183884119",
                creatorName: "罗少帅",
                finishRead: 0,
                isAdd:1,
                isToAllMember:0,
                noticeDate:1545996992000,
                noticeId:1583100951398439,
                noticeType:1,
                participants:"6298842148508439286,6225576885289685719",
                remark:"备注",
                resourceId:null,
                responsibleId:"6458251148183884119",
                responsibleName:"罗少帅",
                status:1,
                subcontractorId:"1581062192135033",
                updateDate:"1581062192135033",
            }
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    font-size: 13px;
}
.item{
    background-color: white;
    padding: 10px;
    margin: 5px;
    // border-radius: 5px;
    width: 92%;
}
.item-right{
    text-align: right;
}
.reddot{
    color:#f00;
}
.inputbox{
    width: 100%;
}
.group{
    margin-top:-8px; 
    margin-left:5px; 
    margin-right:5px;
    .item{
        font-size:13px;
        margin-left:0px; 
    }
}
</style>
