//------------------------------slider------------------
const left = document.querySelector('.arrowleft');
const right = document.querySelector('.arrowright');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.image')
let slideNumber = 1;
const length = images.length;
const nextSlide = ()=>{
    slider.style.transform=`translateX(-${slideNumber*1000}px)`;
    slideNumber++;
};

const preSlide = ()=>{
    slider.style.transform=`translateX(-${(slideNumber-2)*1000}px)`;
    slideNumber--;
};

const getfirstSlide = ()=>{
    slider.style.transform=`translateX(0px)`;
    slideNumber = 1;
}

const getlastSlide = ()=>{
    slider.style.transform=`translateX(-${(length-1)*1000}px)`;
    slideNumber = length;
}

right.addEventListener('click',()=>{
   slideNumber < length ? nextSlide():
    getfirstSlide();
});

left.addEventListener('click',()=>{
    slideNumber > 1 ? preSlide():
     getlastSlide();
 });


//-------------------------drop down---------------
const q = document.querySelectorAll('.q')
;
const a = document.querySelectorAll('.a')
;
const arr = document.querySelectorAll('.arrow')
;
for(let i=0; i<q.length; i++){
q[i].addEventListener('click', () => {
a[i].classList.toggle('a-opened');
arr[i].classList.toggle('arrow-rotated');
});
}