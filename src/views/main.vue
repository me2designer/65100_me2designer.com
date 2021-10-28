<template>
    <div id="container">
        <!-- 메인비주얼 -->
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
                    <div class="progress_bar"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </section>
        <!-- //메인비주얼 -->

        <!-- 약력 -->
        <section id="profile">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <p class="tit">올해로 만 38세가 되었습니다.</p>
                        <p class="num" data-animateNumber="1983.02.01">1983.02.01</p>
                        <p class="desc">1남 2녀 막내로 충정북도 충주에서 태어났으며,<br> 크리스천인 부모님 영향으로 이타심의 중요성 배우며 성장했습니다.</p>
                    </div>
                    <div class="swiper-slide">
                        <p class="tit">올해로 만 38세가 되었습니다.</p>
                        <p class="num" data-animateNumber="1983.02.01">1983.02.01</p>
                        <p class="desc">1남 2녀 막내로 충정북도 충주에서 태어났으며,<br> 크리스천인 부모님 영향으로 이타심의 중요성 배우며 성장했습니다.</p>
                    </div>
                    <div class="swiper-slide">
                        <p class="tit">올해로 만 38세가 되었습니다.</p>
                        <p class="num" data-animateNumber="1983.02.01">1983.02.01</p>
                        <p class="desc">1남 2녀 막내로 충정북도 충주에서 태어났으며,<br> 크리스천인 부모님 영향으로 이타심의 중요성 배우며 성장했습니다.</p>
                    </div>
                    <div class="swiper-slide">
                        <p class="tit">올해로 만 38세가 되었습니다.</p>
                        <p class="num" data-animateNumber="1983.02.01">1983.02.01</p>
                        <p class="desc">1남 2녀 막내로 충정북도 충주에서 태어났으며,<br> 크리스천인 부모님 영향으로 이타심의 중요성 배우며 성장했습니다.</p>
                    </div>
                    <div class="swiper-slide">
                        <p class="tit">올해로 만 38세가 되었습니다.</p>
                        <p class="num" data-animateNumber="1983.02.01">1983.02.01</p>
                        <p class="desc">1남 2녀 막내로 충정북도 충주에서 태어났으며,<br> 크리스천인 부모님 영향으로 이타심의 중요성 배우며 성장했습니다.</p>
                    </div>
                </div>
            </div>
            <!-- Add Navigation -->
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </section>
        <!-- //약력 -->

        <!-- 프로젝트 -->
        <section id="project">
            <div class="inner">
                <p class="tit_section">광고디자인, UI/UX, 퍼블리싱까지<br><strong>다양한 프로젝트 스토리</strong></p>
                <div class="list_tag">
                    <button class="btn_tag on" type="button">기업홈페이지</button>
                    <button class="btn_tag" type="button">사업소개</button>
                    <button class="btn_tag" type="button">광고디자인</button>
                    <button class="btn_tag" type="button">모션그래픽</button>
                    <button class="btn_tag" type="button">패키지디자인</button>
                    <button class="btn_tag" type="button">웹디자인</button>
                    <button class="btn_tag" type="button">적응형</button>
                    <button class="btn_tag" type="button">반응형</button>
                    <button class="btn_tag" type="button">PC</button>
                    <button class="btn_tag" type="button">MOBILe</button>
                </div>
                <ul class="list_project">
                    <li class="item_project">
                        <div class="box_thumb">
                            <img src="https://via.placeholder.com/416x240/" alt="">
                        </div>
                        <p class="tit">매경경영지원본부</p>
                        <p class="desc">'지속가능한 경영'을 위한 리스크관리부터 컨설팅 후 사후관리까지 중소기업 위기극복 파트너</p>
                        <p class="tag"><span>기업홈페이지</span><span>사업소개</span><span>적응형</span></p>                        
                    </li>
                    <li class="item_project">
                        <div class="box_thumb">
                            <img src="https://via.placeholder.com/416x240/" alt="">
                        </div>
                        <p class="tit">매경경영지원본부</p>
                        <p class="desc">'지속가능한 경영'을 위한 리스크관리부터 컨설팅 후 사후관리까지 중소기업 위기극복 파트너</p>
                        <p class="tag"><span>기업홈페이지</span><span>사업소개</span><span>적응형</span></p>
                    </li>
                    <li class="item_project">
                        <div class="box_thumb">
                            <img src="https://via.placeholder.com/416x240/" alt="">
                        </div>
                        <p class="tit">매경경영지원본부</p>
                        <p class="desc">'지속가능한 경영'을 위한 리스크관리부터 컨설팅 후 사후관리까지 중소기업 위기극복 파트너</p>
                        <p class="tag"><span>기업홈페이지</span><span>사업소개</span><span>적응형</span></p>
                    </li>
                    <li class="item_project">
                        <div class="box_thumb">
                            <img src="https://via.placeholder.com/416x240/" alt="">
                        </div>
                        <p class="tit">매경경영지원본부</p>
                        <p class="desc">'지속가능한 경영'을 위한 리스크관리부터 컨설팅 후 사후관리까지 중소기업 위기극복 파트너</p>
                        <p class="tag"><span>기업홈페이지</span><span>사업소개</span><span>적응형</span></p>
                    </li>
                    <li class="item_project">
                        <div class="box_thumb">
                            <img src="https://via.placeholder.com/416x240/" alt="">
                        </div>
                        <p class="tit">매경경영지원본부</p>
                        <p class="desc">'지속가능한 경영'을 위한 리스크관리부터 컨설팅 후 사후관리까지 중소기업 위기극복 파트너</p>
                        <p class="tag"><span>기업홈페이지</span><span>사업소개</span><span>적응형</span></p>
                    </li>
                    <li class="item_project">
                        <div class="box_thumb">
                            <img src="https://via.placeholder.com/416x240/" alt="">
                        </div>
                        <p class="tit">매경경영지원본부</p>
                        <p class="desc">'지속가능한 경영'을 위한 리스크관리부터 컨설팅 후 사후관리까지 중소기업 위기극복 파트너</p>
                        <p class="tag"><span>기업홈페이지</span><span>사업소개</span><span>적응형</span></p>
                    </li>
                </ul>
            </div>
        </section>
        <!-- //프로젝트 -->
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