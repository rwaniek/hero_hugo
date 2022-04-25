/*!
 * Carousel plugin
 * @author: RW
 */


;(function () {

  'use strict'; 


  /**
   * 
   * @param {Direct parent of carousel grid element} el 
   */

  function Carousel (el) {
    const container = el;
    const wrapper = el.firstElementChild;
    const slides = wrapper.children;
    const slidesArr = Array.from(slides);
    const lastSlide = slidesArr[slidesArr.length - 1];
    const firstSlide = slidesArr[0];
    let counter = 0;
    let carouselOn;

    function enableCarousel() {
      clearInterval(carouselOn);
      
      if ( fitInViewportX(firstSlide) && fitInViewportX(lastSlide) ) {
        clearInterval(carouselOn);

      }
      else {

        let scrollLenght = firstSlide.offsetWidth;
        
        function scrolling() {
    
          if (counter < slidesArr.length - 1) { 
            container.scrollBy({
              left: scrollLenght,
              behavior: 'smooth'
            });
            counter ++
          }

          else {
            container.scrollTo(0, 100);
            counter = 0;
          }
          
        };

        carouselOn = setInterval(scrolling, 2000);
      }

    };

    enableCarousel();
    window.addEventListener('resize', enableCarousel);

  }

  new Carousel (document.querySelector('#patrons'));
  new Carousel (document.querySelector('#partners'));

})();


