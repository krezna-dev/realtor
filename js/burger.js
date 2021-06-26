window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger').classList.toggle('open')
  })

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger__nav').classList.toggle('is-active')
  })
});
