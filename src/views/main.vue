<template>
<!-- #container -->
<div id="container" role="main">
    <!-- 메인비주얼 -->
    <section id="visual">
        <div class="inner">
            <h3 class="tit_section">안녕하세요,<br><strong>UI 마크업 개발자 장지훈</strong> 입니다.</h3>
            <button class="videoLayer on" data-src="https://www.youtube.com/embed/fTBvYQUEbFQ" data-title="안녕하세요, UI 마크업 개발자 장지훈 입니다(샘플영상 ▼) " data-type="youtube" type="button" title="영상재생">1분 자기소개 영상</button>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :style="'background-image:url('+imgPath+'visual_bg1.jpg)'">
                    <div class="inner">
                        <p class="tit">웹 표준과 웹 접근성 그리고 크로스 브라우징,<br>다양한 디바이스에 최적화된 UI 마크업 개발하고있습니다.</p>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/89c997)">
                    <div class="inner">
                        <p class="tit">더 좋은 코드를 만들기 위해 고민하고 습관을 정리하여<br>가장 효율적인 방법으로 생산성 향상에 노력합니다.</p>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/7ecef4)">
                    <div class="inner">
                        <p class="tit">광고디자인, UX/UI 디자인, 마크업 개발까지 다양한 기술과 경험으로<br>의사소통과 협업에 큰 강점을 갖고 있습니다.</p>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/f29b76)">
                    <div class="inner">
                        <p class="tit">SEO 최적화, 시맨틱 마크업 사용<br>검색엔진에 친화적인 설계를 지향합니다.</p>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image:url(https://via.placeholder.com/1920x900/8f82bc)">
                    <div class="inner">
                        <p class="tit">마크업과 스타일링 위한 코딩에서 벗어나<br>꾸준한 역량 개발로 FE 개발자로 성장하고 있습니다.</p>
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
                <button class="btn_tag" type="button"></button>                
            </div>
            <ul class="list_project">
                <li class="item_project">
                    <div class="box_thumb">
                        <img src="" alt="" onerror="this.src='https://via.placeholder.com/416x240'">
                    </div>
                    <p class="tit"></p>
                    <p class="desc"></p>
                    <p class="tag"></p>
                </li>                
            </ul>
            <div class="btn_area">
                <button class="btn_more" type="button"><img class="ico mr-5" src="" data-images-path="/images/ico/arr_bottom01.svg"><span>더보기</span></button>
            </div>
        </div>
    </section>
    <!-- //프로젝트 -->

    <!-- 사용자 편의성 -->
    <section id="device">
        <div class="inner">
            <div class="tag">MULTI-DEVICE</div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-inner"></div>
                    </div>
                </div>
            </div>
            <img class="bg_tablet" :src="imgPath+'project_device_tablet.png'" alt="태블렛">
            <img class="bg_pc" :src="imgPath+'project_device_pc.png'" alt="노트북">
            <img class="bg_mobile" :src="imgPath+'project_device_mobile.png'" alt="스마트폰">
            <div class="txt_area">
                <h3 class="tit_section">사용자의 편의성을 위해<br><strong>다양한 디바이스 조건에 맞춰 제작!</strong></h3>
                <p class="desc_section">브랜드의 가치를 알리고, 마케팅 효율을 극대화 하기 위하여<br>수많은 프로젝트에서 Flexible Web 형태의 구축과 유지보수 경험을 가지고 있습니다.</p>                
                <button class="btn_search on" type="button">프로젝트 찾아보기<span class="cmt">반응형ㆍ적응형</span></button>
            </div>
        </div>
        <div class="rotate_top"></div>
        <div class="rotate_bottom"></div>
    </section>
    <!-- //사용자 편의성 -->

    <!-- 경력개발 -->
    <section id="professional">
        <h3 class="tit_section">비즈니스 니즈를 충족시키기 위하여<br> 꾸준한 자기계발로 <strong class="color-primary">기술역량</strong>을 확장했습니다.</h3>
        <p class="desc_section">현재를 안주하기 보다 절박함과 위기의식을 느끼고 미래에 대한 지속성 갖기위해<br>시장의 변화와 맞춰 필요한 역량을 개발하고 발전시켰습니다.</p>
        <div class="tab-container">
            <div class="tab-wrapper">
                <div class="tab-slide tab-slide-tool isAppear">
                    <div class="list_tool">
                        <i class="item_tool indesign"><img class="logo" :src="imgPath+'professional_tool_logo/indesign.svg'"></i>
                        <i class="item_tool illust"><img class="logo" :src="imgPath+'professional_tool_logo/illust.svg'"></i>
                        <i class="item_tool vue"><img class="logo" :src="imgPath+'professional_tool_logo/vue.svg'"></i>
                        <i class="item_tool sass"><img class="logo" :src="imgPath+'professional_tool_logo/sass.svg'"></i>
                        <i class="item_tool premiere"><img class="logo" src="/img/main/professional_tool_logo/premiere.svg"></i>
                        <i class="item_tool photoshop"><img class="logo" :src="imgPath+'professional_tool_logo/photoshop.svg'"></i>
                        <i class="item_tool xd"><img class="logo" :src="imgPath+'professional_tool_logo/xd.svg'"></i>
                        <i class="item_tool js"><img class="logo" :src="imgPath+'professional_tool_logo/js.svg'"></i>
                        <i class="item_tool html"><img class="logo" :src="imgPath+'professional_tool_logo/html.svg'"></i>
                        <i class="item_tool css"><img class="logo" :src="imgPath+'professional_tool_logo/css.svg'"></i>
                        <i class="item_tool aftereffect"><img class="logo" :src="imgPath+'professional_tool_logo/aftereffect.svg'"></i>
                        <i class="item_tool git"><img class="logo" :src="imgPath+'professional_tool_logo/git.svg'"></i>
                        <i class="item_tool jquery"><img class="logo" :src="imgPath+'professional_tool_logo/jquery.svg'"></i>
                        <i class="item_tool gsap"><img class="logo" :src="imgPath+'professional_tool_logo/gsap.svg'"></i>
                        <img class="line" :src="imgPath+'professional_tool_line.svg'" alt="">
                    </div>                    
                </div>
                <div class="tab-slide">
                    수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>수상내용<br>
                </div>
                <div class="tab-slide">
                    대외활동내용<br>대외활동내용<br>대외활동내용<br>대외활동내용<br>대외활동내용<br>대외활동내용<br>대외활동내용<br>대외활동내용<br>대외활동내용<br>
                </div>
            </div>
            <nav class="tab-nav">
                <button class="tab-btn" type=button><img class="ico" src="" data-images-path="/images/ico/lightbulb-exclamation-solid.svg" alt="">기술역량</button>
                <button class="tab-btn" type=button><img class="ico" src="" data-images-path="/images/ico/medal-solid.svg" alt="">수상경력 및 자격증</button>
                <button class="tab-btn" type=button><img class="ico" src="" data-images-path="/images/ico/calendar-alt-regular.svg" alt="">인턴·대외활동</button>
            </nav>
        </div>
    </section>
    <!-- //경력개발 -->

    <!-- 근무이력 -->
    <section id="career">
        <h3 class="tit_section">커리어 성장과 행복을 위한 여정,<br><strong>지금까지 함께한 기업을 소개합니다.</strong></h3>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="info">
                        <img class="logo" src="" alt="">
                        <div class="detail">
                            <p class="name"></p>
                            <p class="period"></p>
                            <p class="postion"></p>
                        </div>
                    </div>
                    <dl class="list_job">
                        <dt class="tit"></dt>
                    </dl>
                </div>
            </div>
        </div>
        <!-- Add Navigation -->
        <!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </section>
    <!-- //근무이력 -->

    <!-- 코딩블로그 -->
    <section id="blog">
        <div class="inner">
            <h3 class="tit_section">공부와 정보 공유 목적의 코딩블로그</h3>
            <p class="desc_section">더 좋은 엔지니어가 되기 위해 웹스크랩핑 정보를 체계적으로 정리하여 새로운 기술 습득력을 향상하고 있습니다.<br>일관된 스타일의 결과물, 단순하고 재사용 용의하도록 코드리뷰를 진행하고있습니다.</p>
            <table class="table table-hover-anchor">
                <colgroup>
                    <col style="width:220px;">
                    <col style="width:*;">
                    <col style="width:200px;">
                </colgroup>
                <tbody>
                    <tr>
                        <td class="cate text-left color-767676">카테고리</td>
                        <td class="tit text-left">제목</td>
                        <td class="date text-center color-767676">날짜</td>
                    </tr>                    
                </tbody>
            </table>
            <div class="table-pagination" data-group-index="0">
                <span class="table-pagination-bullet"></span>                
                <!-- <span class="table-pagination-prev disable"><img src="" data-images-path="/images/ico/prev01.svg"></span> -->
                <!-- <span class="table-pagination-next"><img src="" data-images-path="/images/ico/next01.svg"></span> -->
            </div>
        </div>
    </section>
    <!-- //코딩블로그 -->

    <!-- 맨 위로 이동하기 -->
    <aside id="aisdeBtnTop">
        <button class="btn_top anchor" data-target="#wrap" type="button"><img src="" data-images-path="/images/ico/arr_top02.svg" alt=""><span>TOP</span></button>
    </aside>
    <!-- //맨 위로 이동하기 -->
</div>
<!-- //#container -->
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