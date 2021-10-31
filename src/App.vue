<template>
    <div id="wrap" data-target-device="pc" style="visibility:hidden;opacity:0">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>



<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
// import 'swiper/dist/css/swiper.css'

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