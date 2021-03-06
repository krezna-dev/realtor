window.addEventListener('DOMContentLoaded', function() {
  var popup = document.querySelector('.popup');
  var servicePopup = document.querySelector('.service-popup');

  document.querySelectorAll('.slide__btn').forEach(function(slideBtn){
    slideBtn.addEventListener('click', function() {
      popup.classList.add('show');
    });
  });

  document.querySelector('.cancel').addEventListener('click', function() {
    popup.classList.remove('show');
  });

  document.querySelectorAll('.slide__btn').forEach(function(slideBtn) {
    slideBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      const service = document.querySelector(`[data-target="${path}"]`).textContent;
      servicePopup.value = service;
    });
    
  });

  document.querySelectorAll('.popup-btn').forEach(function(popupBtn){
    popupBtn.addEventListener('click', function() {
      popup.classList.add('show');
    });
  });

  document.querySelectorAll('.popup-btn').forEach(function(popupBtn) {
    popupBtn.addEventListener('click', function(event) {

      servicePopup.value = 'Консультация';
    });
  });
})

