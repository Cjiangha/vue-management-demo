<template>
    <div>
        other Pageone
        <DialagComponent/>

        <MyClick/>
        <MyClickTwo/>

        <Father/>
    </div>
</template>

<script>
import DialagComponent from '../../src/components/DialagComponent.vue'
import MyClick from '../../src/componentsdemo/dialog/first-dialog/clickme.vue'
import MyClickTwo from '../../src/componentsdemo/dialog/seconde-dialog/clickmeTwo.vue'

import Father from '../../src/componentsdemo/emit_update/father.vue'

export default {
    components:{
        DialagComponent,
        MyClick,
        MyClickTwo,
        Father
    }
}
</script>