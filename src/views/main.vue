<template>
    <div id="container">
        <visualComponent/>
        <careerComponent/>
    </div>
</template>



<script>
import visualComponent from '@/components/main/visualComponent'
import careerComponent from '@/components/main/careerComponent'
    
export default {
    components: {
        visualComponent,
        careerComponent
    }
}

console.log($('body'));
</script>



<style>

</style>