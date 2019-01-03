<template>
    <div>
        <x-header :left-options="{backText:'',}">
            <span>通知</span>
            <i slot="right" v-if="disDelBtn" @click="on_del_btn_click" class="iconfont  icon-shanchu" style="margin-right:10px;"></i>
            <i slot="right" @click="on_ok_btn_click" class="iconfont  icon-duigou"></i>
        </x-header>
        <div class="content">
            <flexbox class="item">
                <flexbox-item>发布人</flexbox-item>
                <flexbox-item class="item-right item_gray">{{obj.creatorName}}</flexbox-item>
            </flexbox>

            <flexbox class="item" orient="vertical">
              <flexbox-item>通知内容<span class="reddot">*</span></flexbox-item>
              <flexbox-item><textarea rows="3" v-model="obj.content" class="inputbox item_gray" placeholder="请输入通知内容"/></flexbox-item>
            </flexbox>

             <group title="" class="group">
                <datetime class="item" :value="noticeDate" format="YYYY-MM-DD HH:mm" 
                @on-change="datechange"
                :minute-list="['00', '15', '30', '45']">
                    <div slot="title">时间<span class="reddot">*</span></div>
                </datetime>
            </group>

            <flexbox class="item">
                <flexbox-item>全员通知</flexbox-item>
                <flexbox-item class="item-right"><input v-model="obj.isToAllMember" type="checkbox"/></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >责任人</flexbox-item>
              <flexbox-item class="item-right item_gray">{{obj.responsibleName}}<i @click="on_res_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >分包单位</flexbox-item>
              <flexbox-item class="item-right item_gray">{{subname}}<i @click="on_sub_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item :span="2">参与人</flexbox-item>
              <flexbox-item :span="9" class="item-right item_gray">{{participantnames}}</flexbox-item>
              <flexbox-item class="item-right"><i @click="on_part_btn_click" class="iconfont  icon-iconfontjiantou5 item_gray"></i></flexbox-item>
            </flexbox>

            <flexbox class="item" orient="vertical">
              <flexbox-item>备注</flexbox-item>
              <flexbox-item><textarea rows="3" v-model="obj.remark" class="inputbox item_gray" placeholder="请输入备注"/></flexbox-item>
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
                noticeId:null,
                content:"",
                createDate:1545997022000,
                creatorId: "6458251148183884119",
                creatorName: "罗少帅",
                isToAllMember:0,
                noticeDate:0,
                noticeType:'1',
                participants:"6298842148508439286,6225576885289685719",
                remark:"",
                responsibleId:"6458251148183884119",
                status:0,
                subcontractorId:"1581062192135033",
            },
            disDelBtn:false,
        }
    },
    computed:{
        noticeDate(){
            if(this.obj.noticeDate==0)return ''
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
        },
        subname(){
            if(!this.obj.subcontractorId) return ''
            let s2 = '[{"id":"1580010143400535","name":"广联达建设一局","description":"","type":null,"major":null,"majorName":null,"groupId":2,"orderNo":1,"isDelete":0},{"id":"1581062175331191","name":"广联达勘察设计院","description":"","type":null,"major":null,"majorName":null,"groupId":3,"orderNo":2,"isDelete":0},{"id":"1581062192135033","name":"广联达监理有限公司","description":"","type":null,"major":null,"majorName":null,"groupId":4,"orderNo":3,"isDelete":0},{"id":"1581062207357819","name":"广联达劳务分包1公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":4,"isDelete":0},{"id":"1581062219464573","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":5,"isDelete":1},{"id":"1581062234637183","name":"广联达专业承包公司","description":"","type":null,"major":null,"majorName":null,"groupId":6,"orderNo":6,"isDelete":0},{"id":"1581577696358326","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":7,"isDelete":1},{"id":"1581578381132744","name":"广联达劳务分包2公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":8,"isDelete":0},{"id":"1582196587859833","name":"广联达劳务分包3公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":9,"isDelete":0},{"id":"1582196593771387","name":"广联达劳务分包4公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":10,"isDelete":0},{"id":"1582196599639933","name":"广联达劳务分包5公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":11,"isDelete":0},{"id":"1582196607160191","name":"广联达劳务分包6公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":12,"isDelete":0},{"id":"1582196613392257","name":"广联达劳务分包7公司","description":"","type":null,"major":null,"majorName":null,"groupId":7,"orderNo":13,"isDelete":0}]'
            let subs = JSON.parse(s2)
            for(let i=0;i<subs.length;i++){
                let sub = subs[i]
                if(this.obj.subcontractorId==sub.id)return sub.name
            }
        }
    },
    methods:{
        on_ok_btn_click(){
            let b = this.obj
            if(!b.content || b.content==""){
                this.$vux.toast.show({
                    text: '通知内容是必填项',
                    type: 'warn',
                })
                return
            }
            if(!b.noticeDate || b.noticeDate==0){
                this.$vux.toast.show({
                    text: '通知时间是必填项',
                    type: 'warn',
                })
                return
            }
            // let s = '{"content":"通知内容2","createDate":0,"creatorName":"罗少帅","isToAllMember":0,"noticeDate":1546474761857,"noticeType":"1","participants":"6298842148508439286","remark":"备注2","responsibleId":"6225576885289685719","status":"0","subcontractorId":"1581062207357819"}'
            // let b = JSON.parse(s)
            console.log(JSON.stringify(b));
            this.$axios
            .post('api/v1/projects/1579013294676606/notice/save'
            ,b)
            .then(response => {
                console.log(response);
                if(response.data.code==0){
                    this.$router.go(-1)
                }
                else{
                    console.log(response.data.message);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        on_del_btn_click(){
            console.log('on_del_btn_click');
            this.$axios
            .post('api/v1/projects/1579013294676606/notice/'+ this.obj.noticeId +'/delete',{})
            .then(response => {
                console.log(response);
                if(response.data.code==0){
                    this.$router.go(-1)
                }
                else{
                    console.log(response.data.message);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        datechange(d){
            console.log(d);
            this.obj.noticeDate = moment(d,dateFrm)
        },
        on_res_btn_click(){
            console.log('on click');
            this.$router.push('/SelectResponsibler?title=选择责任人')
        },
        on_part_btn_click(){
            console.log('on click');
            // this.$router.push({path:'/SelectResponsibler', query:{type:'part'}})
            this.$router.push('/SelectResponsibler?mulsel=true&title=选择参与人')
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

        this.obj.subcontractorId = this.$store.state.sub.id

        // console.log(this.$route.query.type);
        if(this.$route.query.type=='edit'){
            this.disDelBtn = true
            this.obj = this.$store.state.editNotification
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
.item_gray{
    color:#999;
}
.reddot{
    color:#f00;
}
.inputbox{
    width: 97%;
    border-color: #bbb;
    padding: 5px;
    resize: none;
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
