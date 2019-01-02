<template>
    <div>
        <x-header :left-options="{backText:'',}">
            <span>通知</span>
            <i slot="right" @click="on_plus_btn_click" class="iconfont  icon-jiahao"></i>
        </x-header>
        <div class="content">
            <flexbox class="item">
                <flexbox-item>发布人</flexbox-item>
                <flexbox-item class="item-right">张三</flexbox-item>
            </flexbox>

            <flexbox class="item" orient="vertical">
              <flexbox-item>通知内容<span class="reddot">*</span></flexbox-item>
              <flexbox-item><textarea rows="3" class="inputbox" placeholder="请输入通知内容"/></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >时间<span class="reddot">*</span></flexbox-item>
              <flexbox-item class="item-right">2018-09-08 11:24<i @click="on_plus_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
                <flexbox-item>全员通知</flexbox-item>
                <flexbox-item class="item-right"><input type="checkbox"/></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >责任人</flexbox-item>
              <flexbox-item class="item-right"><i @click="on_plus_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >分包单位</flexbox-item>
              <flexbox-item class="item-right"><i @click="on_plus_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item">
              <flexbox-item >参与人</flexbox-item>
              <flexbox-item class="item-right"><i @click="on_plus_btn_click" class="iconfont  icon-iconfontjiantou5"></i></flexbox-item>
            </flexbox>

            <flexbox class="item" orient="vertical">
              <flexbox-item>备注</flexbox-item>
              <flexbox-item><textarea rows="3" class="inputbox" placeholder="请输入备注.00"/></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>

<script>
export default {
    name:'AddNotification',
    methods:{
        on_plus_btn_click(){

        },
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
    border-radius: 5px;
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
</style>
