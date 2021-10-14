<template>
    <section id="visual">
        <div class="inner">
            <h3 class="tit_section">안녕하세요,<br><strong>UI 마크업 개발자 장지훈</strong> 입니다.</h3>
            <button class="btn_video" type="button">1분 자기소개 영상</button>
        </div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide style="background-image:url(/img/main/visual_bg1.jpg)">
                <div class="inner">
                    <p class="tit">다양한 디바이스 크로스 부라우징 기술력을 확보한<br>UI개발을 지원하고있습니다.</p>
                </div>
            </swiper-slide>
            <swiper-slide style="background-image:url(https://via.placeholder.com/1920x900/89c997)">
                <div class="inner">
                    <p class="tit">생산성으로<br>가장 효율적인 방법으로</p>
                </div>
            </swiper-slide>
            <swiper-slide style="background-image:url(https://via.placeholder.com/1920x900/7ecef4)">
                <div class="inner">
                    <p class="tit">광고 디자인~개발까지<br>다양한 역량 보유</p>
                </div>
            </swiper-slide>
            <swiper-slide style="background-image:url(https://via.placeholder.com/1920x900/f29b76)">
                <div class="inner">
                    <p class="tit">SEO, 시멘트 마크업으로<br>트래픽 향상에 최적</p>
                </div>
            </swiper-slide>
            <swiper-slide style="background-image:url(https://via.placeholder.com/1920x900/8f82bc)">
                <div class="inner">
                    <p class="tit">꾸준한 역량개발로<br>프론트 엔드 개발자 성장 중</p>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>



<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
    name: 'visualComponent',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            imgPath: '/img/main/visual_',
            swiperOption: { 
                // autoplay: {
                //     delay: 5000,
                //     disableOnInteraction : false,
                // },
                slidesPerView: 1,
                speed: 400,
                loop: true,
                // effect: 'fade',
                // allowTouchMove: true,  // drag 방지
                // breakpointsInverse: true,  // drag 방지
                // breakpoints: {
                //     1023: {
                //         allowTouchMove: false // drag 방지
                //     }
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true
                // }
            }
        }
    },
}
</script>




<style scoped lang="scss">
    #visual {
        position:relative;width:100%;height:900px;
        > .inner {
            pointer-events:none;
        }
        .tit_section {
            position:absolute;top:228px;font-size:60px;font-weight:900;line-height:1.27em;letter-spacing:-2.4px;color:#fff;
            strong {
                font-weight:900;background-image:linear-gradient(to right,#28e375 0%, #22e6cc 101%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;
                @include ieHack {
                    color:#28e375;background-image:none;
                }
            }
        }
        .btn_video {
             position:absolute;top:584px;width: 176px; height: 46px;
        }
    }

    #visual {
        .swiper-container {
            position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;
            @include ieHack {
                width:100%;
            }            
            .swiper-slide {
                background-size:cover;
                .tit {
                    position:absolute;top:500px;font-size:20px;line-height:1.4em;letter-spacing:-0.2px;color:#fff;
                }
            }
        }
    }
</style>