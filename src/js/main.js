const switcher = document.querySelector('.btn-switch');
const lang = document.querySelector('.switch-wrapper ul');
switcher.addEventListener('click', function() {
  lang.classList.toggle('d-none');
})

document.addEventListener('click', function(ev){
  if (!ev.target.closest('.switch-wrapper') && !lang.classList.contains('d-none'))
  lang.classList.add('d-none');
});