<template>
    <div id="wrap" style="visibility:hidden;opacity:0">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>



<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
    name: 'wrap',
    components: {
        Header,
        Footer,
    }
}
</script>



<style lang="scss">
// 전역 SCSS 파일은 vue.config.js 또는 common.scss 추가 
</style>