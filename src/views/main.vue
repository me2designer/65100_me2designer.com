<template>
<!-- #container -->
<div id="container" role="main">
    <!-- 메인비주얼 -->
    <section id="visual">
        <div class="inner pointer-none">
            <h3 class="tit_section">안녕하세요,<br><strong>UI 마크업 개발자 장지훈</strong> 입니다.</h3>
            <button class="videoLayer on pointer-all" data-src="https://www.youtube.com/embed/fTBvYQUEbFQ" data-title="안녕하세요, UI 마크업 개발자 장지훈 입니다(샘플영상 ▼) " data-type="youtube" type="button" title="영상재생">1분 자기소개 영상</button>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="inner">
                        <p class="tit">웹 표준과 웹 접근성 그리고 크로스 브라우징까지<br>다양한 디바이스에 최적화된 UI 마크업 개발하고 있습니다.</p>
                    </div>
                    <div class="bg swiper-lazy" :data-background="imgPath+'visual_bg1_pc.jpg'" :style="'background-image:url('+imgPath+'visual_bg_onerror_pc.png)'"></div>
                    <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide">
                    <div class="inner">
                        <p class="tit">더 좋은 코드를 만들기 위해 고민하고 습관을 정리하여<br>가장 효율적인 방법으로 생산성 향상에 노력합니다.</p>
                    </div>
                    <div class="bg swiper-lazy" :data-background="imgPath+'visual_bg2_pc.jpg'" :style="'background-image:url('+imgPath+'visual_bg_onerror_pc.png)'"></div>
                    <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide">
                    <div class="inner">
                        <p class="tit">광고디자인, UX/UI 디자인, 마크업 개발까지 다양한 기술과 경험으로<br>의사소통과 협업에 큰 강점을 갖고 있습니다.</p>
                    </div>
                    <div class="bg swiper-lazy" :data-background="imgPath+'visual_bg3_pc.jpg'" :style="'background-image:url('+imgPath+'visual_bg_onerror_pc.png)'"></div>
                    <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide">
                    <div class="inner">
                        <p class="tit">SEO 최적화, 시맨틱 마크업 사용<br>검색엔진에 친화적인 설계를 지향합니다.</p>
                    </div>
                    <div class="bg swiper-lazy" :data-background="imgPath+'visual_bg4_pc.jpg'" :style="'background-image:url('+imgPath+'visual_bg_onerror_pc.png)'"></div>
                    <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide">
                    <div class="inner">
                        <p class="tit">마크업과 스타일링 위한 코딩에서 벗어나<br>꾸준한 역량 개발을 통해 FE 개발자로 성장하고 있습니다.</p>
                    </div>
                    <div class="bg swiper-lazy" :data-background="imgPath+'visual_bg5_pc.jpg'" :style="'background-image:url('+imgPath+'visual_bg_onerror_pc.png)'"></div>
                    <div class="swiper-lazy-preloader"></div>
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

    <!-- 성장과정 -->
    <section id="profile">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <p class="tit">열아홉, 고등학교 재학중 진로 결정</p>
                    <p class="num"><span class="count">2001</span>.<span class="count">02</span>.<span class="count">13</span></p>
                    <p class="desc"><mark>그래픽디자인 취미활동 중 재능을 발견하고 관련 자격증 취득과</mark><br><mark>홈페이지 제작 경진대회에서 3회이상 수상을 함으로써 디자인계열로 진로를 결정</mark></p>
                </div>
                <div class="swiper-slide">
                    <p class="tit">스물둘, 첫 사회생활 도전기!<p>
                    <p class="num"><span class="count">2004</span>.<span class="count">05</span>.<span class="count">01</span></p>
                    <p class="desc"><mark>휴학 중 약 10개월 동안 엔프리즘(주)에서 인턴으로</mark><br><mark>"Hello Myworrdy" 교제 중 Flash Animation 제작과 제품 출시에 기여</mark></p>
                </div>
                <div class="swiper-slide">
                    <p class="tit">스물다섯, 군 복무 중에도 역량 발휘</p>
                    <p class="num"><span class="count">2007</span>.<span class="count">06</span>.<span class="count">30</span></p>
                    <p class="desc"><mark>입대 후 OA능력을 인정받아 군사행정특기병(3111)으로 훈련받았으며,</mark><br><mark>육군본부 부관감실 "장교/부사관 상훈정보조회시스템" 개발(기획/디자인)로 표창 수여</mark></p>
                </div>
                <div class="swiper-slide">
                    <p class="tit">스물여덟, 대학교 졸업과 첫 직장생활 시작</p>
                    <p class="num"><span class="count">2010</span>.<span class="count">02</span>.<span class="count">08</span></p>
                    <p class="desc"><mark>커뮤니케이션 디자인 전공으로 Flash Animation 사용한 졸업작품을 바탕으로</mark><br><mark>종합유통기업 (주)한국리모텍에서 광고디자이너로 첫 직장생활을 시작</mark></p>
                </div>
                <div class="swiper-slide">
                    <p class="tit">현재, FE개발자로 나아가고 있는 Generalist</p>
                    <p class="num">VISION <span class="count">2022</span></p>
                    <p class="desc"><mark>11년 7개월 동안 광고디자인, UX/UI 디자인, 웹퍼블리싱 경력에서</mark><br><mark>더 나아가 데이터 중심 애플리케이션 개발을 위한 프론트웹개발자로 성장</mark></p>
                </div>
            </div>
        </div>
        <!-- Add Navigation -->
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="animateCursor"></div>
    </section>
    <!-- //성장과정 -->

    <!-- 프로젝트 -->
    <section id="project">
        <div class="inner">
            <p class="tit_section">광고디자인, UI/UX, 퍼블리싱까지<br><strong>다양한 프로젝트 스토리</strong></p>
            <div class="list_tag">
                <button class="btn_tag" type="button"></button>
            </div>
            <ul class="list_project">
                <li class="item_project">
                    <div class="inner_default">
                        <div class="box_thumb"></div>
                        <p class="tit"></p>
                        <p class="desc"></p>
                        <p class="tag"></p>
                    </div>
                    <div class="inner_overlay">
                        <p class="tit"></p>
                        <p class="desc"></p>
                        <p class="role"></p>
                        <p class="work"></p>
                        <p class="rate"></p>
                        <div class="list_more">
                            <a class="link_more" href="" title="사이트 바로가기" target="_blank"><img src="" data-images-path="/images/ico/link-regular.svg" alt=""></a>
                            <button class="btn_image" title="미리보기" type="button"><img src="" data-images-path="/images/ico/image-regular.svg" alt=""></button>
                            <button class="btn_video" data-src="" data-title="" data-type="" title="영상보기" type="button"><img src="" data-images-path="/images/ico/play-regular.svg" alt=""></button>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="btn_area">
                <button class="btn_more" type="button"><img class="ico mr-5" src="" data-images-path="/images/ico/arr_bottom01.svg"><span>더보기</span></button>
            </div>
        </div>
    </section>
    <!-- //프로젝트 -->

    <!-- 사용자 편의성 -->
    <section id="device" data-images-path="/portfolio/device_bg.jpg">
        <div class="inner">
            <div class="tag">MULTI-DEVICE</div>
            <div class="swiper-container pointer-none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-inner swiper-lazy" data-background=""></div>
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                </div>
            </div>
            <img class="bg_tablet pointer-none" src="" data-images-path="/portfolio/device_tablet.png" alt="태블렛">
            <img class="bg_pc pointer-none" src="" data-images-path="/portfolio/device_pc.png" alt="노트북">
            <img class="bg_mobile pointer-none" src="" data-images-path="/portfolio/device_mobile.png" alt="스마트폰">
            <div class="txt_area">
                <h3 class="tit_section">사용자 편의성을 위해<br><strong>다양한 디바이스 조건에 맞춰 제작!</strong></h3>
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
        <div class="tab-container">
            <div class="tab-wrapper">
                <div class="tab-slide tab-slide-tool isAppear">
                    <h3 class="tit_slide">비즈니스 니즈를 충족시키기 위하여<br> 꾸준한 자기계발로 <strong class="color-primary">기술역량</strong>을 확장했습니다.</h3>
                    <p class="desc_slide">현재를 안주하기 보다 절박함과 위기의식을 느끼고 미래에 대한 지속성 갖기위해<br>시장의 변화와 맞춰 필요한 역량을 개발하고 발전시켰습니다.</p>
                    <div class="list_tool">
                        <i class="item_tool indesign"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/indesign.svg"></i>
                        <i class="item_tool illust"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/illust.svg"></i>
                        <i class="item_tool vue"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/vue.svg"></i>
                        <i class="item_tool sass"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/sass.svg"></i>
                        <i class="item_tool premiere"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/premiere.svg"></i>
                        <i class="item_tool photoshop"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/photoshop.svg"></i>
                        <i class="item_tool xd"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/xd.svg"></i>
                        <i class="item_tool js"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/js.svg"></i>
                        <i class="item_tool html"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/html.svg"></i>
                        <i class="item_tool css"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/css.svg"></i>
                        <i class="item_tool aftereffect"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/aftereffect.svg"></i>
                        <i class="item_tool git"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/git.svg"></i>
                        <i class="item_tool jquery"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/jquery.svg"></i>
                        <i class="item_tool gsap"><img class="logo" src="" data-images-path="/portfolio/professional_tool_logo/gsap.svg"></i>
                        <img class="line" src="" data-images-path="/portfolio/professional_tool_logo/line.svg" alt="">
                    </div>
                </div>
                <div class="tab-slide tab-slide-license" data-images-path="/portfolio/professional_license_bg_pc.jpg">
                    <h3 class="tit_slide"><strong class="color-primary">수상경력 및 자격증</strong>은 새로운 도전과 경험을<br>성취하고자 노력한 결과입니다.</h3>
                    <p class="desc_slide">수 많은 대회에서 실패와 성공 그리고 팀원들과 협업 경험을 바탕으로<br>대학시절 창업동아리, 학생자치기구에서 핵심적인 역할을 할 수 있었습니다.</p>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="box">
                                    <p class="date"></p>
                                    <p class="tit"></p>
                                    <p class="desc"></p>
                                    <p class="desc"></p>
                                </div>
                                <i class="border"></i>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="tab-slide tab-slide-activity">
                    <h3 class="tit_slide">미래의 발판을 건설하기 위해<br><strong class="color-primary">인턴·대외활동 및 직무교육</strong>에 참여했습니다.</h3>
                    <p class="desc_slide">이른시기 독립적인 생활로 용돈과 학업에 대부분을 스스로 해결하는 과정에서<br>사회생활과 자기계발의 중요성을 새삼 깨달았습니다</p>
                    <div class="inner">
                        <div class="swiper-container swiper-top">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="text-area">
                                        <p class="corp"></p>
                                        <p class="tit"></p>
                                        <p class="date"></p>
                                        <p class="desc"></p>
                                    </div>
                                </div>
                            </div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                            <!-- Add Navigation -->
                            <div class="swiper-button-prev swiper-button"><img src="" data-images-path="/images/ico/chevron-up_regular.svg" alt="위로"></div>
                            <div class="swiper-button-next swiper-button"><img src="" data-images-path="/images/ico/chevron-down_regular.svg" alt="아래로"></div>
                        </div>
                        <div class="swiper-container swiper-thumb">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide swiper-lazy" data-background=""><div class="swiper-lazy-preloader"></div></div>                                                                                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="tab-nav">
                <button class="tab-btn" type=button><img class="ico" src="" data-images-path="/images/ico/lightbulb-exclamation-solid.svg" alt="">기술역량</button>
                <button class="tab-btn" type=button><img class="ico" src="" data-images-path="/images/ico/medal-solid.svg" alt="">수상경력 및 자격증</button>
                <button class="tab-btn" type=button><img class="ico" src="" data-images-path="/images/ico/calendar-alt-regular.svg" alt="">인턴·대외활동 및 직무교육</button>
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
                    <div class="btn_area">
                        <button class="btn_search on" title="찾아보기" type="button"><img src="" data-images-path="/images/ico/search-regular.svg" alt=""></button>
                        <div class="tooltip">
                            <p class="tit"><strong class="corp"></strong>프로젝트 찾아보기</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="animateCursor"></div>
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
            <div class="table-pagination">
                <span class="table-pagination-bullet"></span>
                <span class="table-pagination-prev"><img src="" data-images-path="/images/ico/chevron-left_regular.svg"></span>
                <span class="table-pagination-next"><img src="" data-images-path="/images/ico/chevron-right_regular.svg"></span>
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