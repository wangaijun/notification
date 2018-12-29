<template>
    <div>
        <x-header :left-options="{backText:'',}">
            <span>通知</span>
            <i slot="right" @click="on_plus_btn_click" class="iconfont  icon-jiahao"></i>
        </x-header>
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

<style>

</style>
