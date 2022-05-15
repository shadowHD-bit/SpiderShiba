$(function() {
    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                  centerPadding: '10px',
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 1420,
                settings: {
                  centerPadding: '10px',
                  slidesToShow: 2,
                }
              },
            {
              breakpoint: 1070,
              settings: {
                centerPadding: '20px',
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 700,
                settings: {
                  centerPadding: '120px',
                  slidesToShow: 1,
                }
              }
          ]
      });
})

      