$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.5,
          arrows: true,
          dots: false
        }
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.5,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1.5,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  })
});

$(document).ready(function() {
  $('.about__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
  })
});

