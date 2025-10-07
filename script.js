

const toggleDark = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggleDark.onclick = function () {
     document.body.classList.toggle('toggleDark');
     if(document.body.classList.contains('toggleDark')){
          toggleDark.src = 'sun.png';
          body.style.background = '#000';
          body.style.color = '#fff';
          body.style.transition = '.5s ease-in';
         }else{
          toggleDark.src = 'moon.png';
          body.style.background = '#fff';
          body.style.color = '#000';
          body.style.transition = '.5s ease-out';
         }
}


function updateYear() {
     let now = new Date();
     year = now.getFullYear();
     document.getElementById('year').textContent = 
`${year}`;

}
updateYear ();



// ============ SlideShow =============

const imgSlider = document.querySelectorAll(".imgSlider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider (){
  if(imgSlider.length > 0){
    imgSlider[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
  
}

function showSlide(index){

  if(index >=  imgSlider.length){
    slideIndex = 0;

  }else if(index < 0){
    slideIndex = imgSlider.length - 1;
  }
  imgSlider.forEach(imgSlider => {
      imgSlider.classList.remove("displaySlide");
  });
  imgSlider[slideIndex].classList.add("displaySlide");
}

function prevSlide () {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide () {
  slideIndex++;
  showSlide(slideIndex);
}




