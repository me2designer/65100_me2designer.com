<template>
    <div id="container">
        <section id="visual">
            <div class="inner">
                <h3 class="tit_section">안녕하세요,<br><strong>UI 마크업 개발자 장지훈</strong> 입니다.</h3>
                <button class="btn_video" type="button">1분 자기소개 영상</button>
            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" :style="'background-image:url('+imgPath+'visual_bg1.jpg)'">
                        <div class="inner">
                            <p class="tit">다양한 디바이스 크로스 부라우징 기술력을 확보한<br>UI개발을 지원하고있습니다.</p>
                        </div>
                    </div>
                    <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/89c997)">
                        <div class="inner">
                            <p class="tit">생산성으로<br>가장 효율적인 방법으로</p>
                        </div>
                    </div>
                    <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/7ecef4)">
                        <div class="inner">
                            <p class="tit">광고 디자인~개발까지<br>다양한 역량 보유</p>
                        </div>
                    </div>
                    <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/f29b76)">
                        <div class="inner">
                            <p class="tit">SEO, 시멘트 마크업으로<br>트래픽 향상에 최적</p>
                        </div>
                    </div>
                    <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/8f82bc)">
                        <div class="inner">
                            <p class="tit">꾸준한 역량개발로<br>프론트 엔드 개발자 성장 중</p>
                        </div>
                    </div>
                </div>
                <!-- Add Navigation -->
                <div class="swiper-button-area">
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </section>
    </div>
</template>



<script>
export default {
    data() {
        return {
            imgPath: '/img/main/'
        }
    }
}
</script>



<style lang="scss">
    @import '@/assets/scss/main/main.scss';
</style>