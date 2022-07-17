<template>
    <div>
        other Pageone
        <DialagComponent/>

        <MyClick/>
        <Father/>
    </div>
</template>

<script>
import DialagComponent from '../../src/components/DialagComponent.vue'
import MyClick from '../../src/components/clickme.vue'
import Father from '../../src/componentsdemo/emit_update/father.vue'

export default {
    components:{
        DialagComponent,
        MyClick,
        Father
    }
}
</script>