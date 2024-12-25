const parallaxFactor = 0.5; 
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.background').style.opacity = 1 - (scrollY + 100) * 0.001;
  document.querySelector('.foreground').style.opacity = .5 + scrollY * 0.001;
  document.querySelector('.container').style.transform = `translateY(${scrollY * parallaxFactor}px)`;
  if(scrollY > document.querySelector('.background').clientHeight + 10) {
    document.querySelector('.foreground').style.opacity = 1 - (scrollY - 200) * 0.001;
    document.querySelector('.foreground').style.transition = 'opacity .5s ease-out';
  }
  if(scrollY > 700){
        document.querySelector('audio').play();
        document.querySelector('.playAudio').play();
    }
   if(scrollY < 700 || scrollY > document.querySelector('.svg').clientHeight * 2.8 ){
    document.querySelector('audio').pause();
    document.querySelector('.playAudio').pause();
   }
});

  