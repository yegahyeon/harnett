$(function () {
    const visualSlider = new Swiper(".visual-slider", {
        loop: true,

        pagination: {
            el: ".visual-slider .swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".visual-slider .btn-next",
            prevEl: ".visual-slider .btn-prev",
        },
    });
    // 비디오 모두 선택
    const videos = $(".video-slider video");

    var swiper = new Swiper(".video-slider", {
        autoplay: false, // 자동 재생을 false로 설정
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 100,

        pagination: {
            el: ".video-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".video-slider .btn-next",
            prevEl: ".video-slider .btn-prev",
        },

        on: {
            slideChange: function () {
                videos.each(function () {
                    this.pause(); // 모든 비디오 일시 정지
                });
                setTimeout(function () {
                    var activeVideo = $(
                        ".video-slider .swiper-slide-active video"
                    ).get(0);
                    if (activeVideo) {
                        activeVideo.play(); // 활성 슬라이드의 비디오 재생
                    }
                }, 100); // 100ms 지연 후 재생
            },
            transitionEnd: function () {
                console.log("Transition ended");
            },
        },
    });

    // 초기 로드 시 첫 번째 슬라이드의 비디오 재생
    var initialVideo = $(".video-slider .swiper-slide-active video").get(0);
    if (initialVideo) {
        initialVideo.play();
    }

    const bestSlider = new Swiper(".best-slider", {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 30,
        slidesOffsetBefore: 128,

        freeMode: {
            enabled: true,
            sticky: true,
            momentumRatio: 0.25,
        },

        pagination: {
            el: ".best-silder .swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".best-imagebox .btn-next",
            prevEl: ".best-imagebox .btn-prev",
        },
    });
});
