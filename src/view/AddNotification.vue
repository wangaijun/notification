<template>
    <div>
        <x-header :left-options="{backText:'',}">
            <span>通知</span>
            <i slot="right" @click="on_plus_btn_click" class="iconfont  icon-jiahao"></i>
        </x-header>
        <div class="content">
            <group>
                <cell title="发布人" value="张三"></cell>
            </group>
            <group>
            <flexbox orient="vertical">
                <flexbox-item>通知内容<span class="reddot">*</span></flexbox-item>
                <flexbox-item><textarea rows="3" class="inputbox" placeholder="请输入通知内容"/></flexbox-item>
            </flexbox>
            </group>
            <group>
                <datetime-range title="时间" format="YYYY-MM-DD HH:mm" ></datetime-range>
            </group>
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
    padding: 10px;
}
.reddot{
    color:#f00;
}
.inputbox{
    width: 100%;
}
</style>
