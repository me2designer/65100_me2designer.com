<template>
    <div id="wrap">
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