<template>
    <div class="root">
          <div>{{obj.name}}</div>
          <person v-for="item in obj.list" :ob="item" :key="item.id"/>
    </div>
</template>

<script>
import Person from '@/components/Person.vue'

export default {
    name:'Subcon',
    components:{
        Person,
    },
    props:{
         obj: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { 
                    id: "1580010143400535",
                    name: "广联达建设一局",
                    list:[],
                }
            }
        }
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.root{
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
}
</style>

