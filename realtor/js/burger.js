window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.add('is-active')
  }),

  document.querySelector('#menu').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active')
  })

});
