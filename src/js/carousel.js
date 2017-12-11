setCarouselHeight();

var aCarouselBtns = document.querySelectorAll('.carousel-btns a');

for (var i = 0; i < aCarouselBtns.length; i++) {
   var btnCarousel = aCarouselBtns[i];
   btnCarousel.addEventListener('click', function(e){
      if(e.currentTarget.classList.contains('previousBtn')){
         goToPrevImg();
      }
      if(e.currentTarget.classList.contains('nextBtn')){
         goToNextImg();
      }
   });  
}

function goToPrevImg(){
   var elemActiveImage = document.querySelector('.image-carousel .active-image');
   if(elemActiveImage.previousSibling.localName == "div"){
      elemActiveImage.previousSibling.classList.add('active-image');
      elemActiveImage.previousSibling.classList.remove('previous-image');
      elemActiveImage.classList.add('upcoming-image');
      elemActiveImage.classList.remove('active-image');
   }
}

function goToNextImg(){
   var elemActiveImage = document.querySelector('.image-carousel .active-image');
   if(elemActiveImage.nextSibling.localName == "div"){
      elemActiveImage.nextSibling.classList.add('active-image');
      elemActiveImage.nextSibling.classList.remove('upcoming-image');
      elemActiveImage.classList.add('previous-image');
      elemActiveImage.classList.remove('active-image');
   }
}

function setCarouselHeight(){
   //var iAboutEventBoxHeight = document.querySelector('#boxAboutEvent').clientHeight;
   var iWidth = document.querySelector('.image-carousel .carousel-images').clientWidth;
   var iAspectWidth = 7;
   var iAspectHeight = 3;
   var iRatio  = iWidth / iAspectWidth;
   var iHeight = iRatio * iAspectHeight;
   document.querySelector('.image-carousel .carousel-images').style.height = iHeight + "px";
}
