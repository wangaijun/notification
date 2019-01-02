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
              <flexbox-item class="item-right">{{obj.responsibleName}}<i @click="on_res_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >分包单位</flexbox-item>
              <flexbox-item class="item-right">{{obj.subcontractorId}}<i @click="on_sub_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item :span="2">参与人</flexbox-item>
              <flexbox-item class="item-right">{{participantnames}}</flexbox-item>
              <flexbox-item :span="1" class="item-right"><i @click="on_part_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item" orient="vertical">
              <flexbox-item>备注</flexbox-item>
              <flexbox-item><textarea rows="3" v-model="obj.remark" class="inputbox" placeholder="请输入备注.00"/></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { dateFormat } from 'vux'
var moment = require('moment')
let dateFrm = "YYYY-MM-DD HH:mm"

export default {
    name:'AddNotification',
    components:{
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
    },
    computed:{
        noticeDate(){
            return moment(this.obj.noticeDate).format(dateFrm)
        },
        participantnames(){
            if(!this.obj.participants) return ''
            let arr = this.obj.participants.split(',')
            let names = ''
            let c = '[{"id":"1581062244475777","userId":"5917242334161117925","userName":"张波","subcontractorId":"1581062175331191","projectId":"1579013294676606","isDelete":0},{"id":"1582196708835208","userId":"6097914644337128288","userName":"孙雪梅","subcontractorId":"1582196587859833","projectId":"1579013294676606","isDelete":0},{"id":"1582196713186186","userId":"6149485106724516851","userName":"郭琦","subcontractorId":"1582196593771387","projectId":"1579013294676606","isDelete":0},{"id":"1582196717527948","userId":"6191073588582650342","userName":"王爱军","subcontractorId":"1582196599639933","projectId":"1579013294676606","isDelete":0},{"id":"1581062250010500","userId":"6225576885289685719","userName":"武星","subcontractorId":"1581062192135033","projectId":"1579013294676606","isDelete":0},{"id":"1581578387784651","userId":"6280443163329843557","userName":"程宁宁","subcontractorId":"1581578381132744","projectId":"1579013294676606","isDelete":0},{"id":"1582196738620304","userId":"6286777766680400383","userName":"刘长城","subcontractorId":"1582196613392257","projectId":"1579013294676606","isDelete":0},{"id":"1581062254447495","userId":"6298842148508439286","userName":"张浩","subcontractorId":"1581062207357819","projectId":"1579013294676606","isDelete":0},{"id":"1582196734113678","userId":"6414860276977652163","userName":"李元刚","subcontractorId":"1582196607160191","projectId":"1579013294676606","isDelete":0},{"id":"1581062349953936","userId":"6428541716035699242","userName":"周晖","subcontractorId":"1581062234637183","projectId":"1579013294676606","isDelete":0},{"id":"1580010148929115","userId":"6458251148183884119","userName":"罗少帅","subcontractorId":"1580010143400535","projectId":"1579013294676606","isDelete":0}]'  
            let l = JSON.parse(c)
            let map = new Map()
            for(let i=0;i<l.length;i++){
                let o = l[i]
                map.set(o.userId,o.userName)
            }
            for(let i=0;i<arr.length;i++){
                names += map.get(arr[i])
                if(i!=arr.length-1) names += ','
            }
            return names
        }
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
        on_res_btn_click(){
            console.log('on click');
            this.$router.push('/SelectResponsibler')
        },
        on_part_btn_click(){
            console.log('on click');
            // this.$router.push({path:'/SelectResponsibler', query:{type:'part'}})
            this.$router.push(`/SelectResponsibler?mulsel=true`)
        },
        on_sub_btn_click(){
            console.log('on click');
            this.$router.push('/SelectSub')
        }
    },
    mounted () {
        this.obj.responsibleName = this.$store.state.curObj.userName;
        this.obj.responsibleId = this.$store.state.curObj.userId;

        let l = this.$store.state.parts
        let ids = ''
        for(let i=0;i<l.length;i++){
            ids += l[i].userId
            if(i!=l.length-1) ids+=","
        }
        this.obj.participants = ids
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
