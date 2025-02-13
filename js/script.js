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

const videoSlider = new Swiper(".video-slider", {
    loop: true,
    centeredSlides: true,

    pagination: {
        el: ".video-slider .video-swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".video-slider .btn-next",
        prevEl: ".video-slider .btn-prev",
    },
});

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

// var swiper = new Swiper(".best .swiper", {
//     slidesPerView: 5,
//     direction: getDirection(),
//     navigation: {
//         nextEl: ".best-arrow.swiper .btn-next",
//         prevEl: ".best-arrow.swiper .btn-prev",
//     },
//     on: {
//         resize: function () {
//             swiper.changeDirection(getDirection());
//         },
//     },
// });

// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//     return direction;
// }
