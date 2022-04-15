const switcher = document.querySelector('.btn-switch');
const lang = document.querySelector('.switch-wrapper ul');
switcher.addEventListener('click', function() {
  lang.classList.toggle('d-none');
})

document.addEventListener('click', function(ev){
  if (!ev.target.closest('.switch-wrapper') && !lang.classList.contains('d-none'))
  lang.classList.add('d-none');
});

/**
 * 
 * @param {DOM Element} elem 
 * @returns {boolean}
 */

 function fitInViewportX (elem) {
  // console.log('fits in viewport horizontally');
  let bounding = elem.getBoundingClientRect();

  return (
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};