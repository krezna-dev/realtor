$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.5
        }
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.5,
          arrows: false
        }
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },

      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1.5,
          arrows: false
        }
      }
    ]
  })
});

