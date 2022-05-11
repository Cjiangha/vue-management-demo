<template>
    <div>
        <a href="javascript:;" @click="show = true">点击</a>
        <Dialag-component :show.sync="show"></Dialag-component>
    </div>
</template>

<script>
/*
    @的作用  表示从/src目录下走

*/ 
import DialagComponent from '../../src/components/DialagComponent.vue'
export default {
    data(){
        return{
            show:false
        }
    },
    components:{
        DialagComponent
    }
}
</script>