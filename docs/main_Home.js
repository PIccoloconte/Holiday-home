const imageSlider = document.querySelector(".image-slider");
const imgArray = document.querySelectorAll(".house-image");
const rightBtn = document.querySelector(".image-btn-right");
const leftBtn = document.querySelector(".image-btn-left");
const bulletContainer = document.querySelector(".bullet-container");

/*control Bullet div */
for(let i = 0; i < imgArray.length ; i++){
    const newControlBullet = document.createElement("div");
    newControlBullet.classList.add("bullet-box");
    newControlBullet.innerHTML = `<div class="bullet-sphere"></div>`
    bulletContainer.appendChild(newControlBullet);
}
const controlBulletBoxes = document.querySelectorAll(".bullet-box");
controlBulletBoxes.forEach((box,idx) =>{
    box.firstChild.addEventListener("click",(e) =>{
        SetActiveImg(idx);
    })
})

// Immagini
let activeImg = 0;
let imgChangeTime = 4000;
controlBulletBoxes[activeImg].firstChild.classList.add("active");

rightBtn.addEventListener("click",() =>{
    activeImg++;
    CheckImgIndex();
    resetInterval();
})

leftBtn.addEventListener("click",()=>{
    activeImg--;
    CheckImgIndex();
    resetInterval();
})

//Cabio immagine nel tempo
let interval = setInterval(run,imgChangeTime)

function run() {
    activeImg++;
    CheckImgIndex()
}

function CheckImgIndex(){
    if(activeImg > imgArray.length - 1){
        activeImg = 0;
    }
    if(activeImg < 0 ){
        activeImg = imgArray.length -1;
    }
    
    SetActiveImg();
}

function SetActiveImg(index = null){
    resetInterval();
    if(index === null)
    {
        activeImg = activeImg;
    }
    else{
        activeImg = index
    }
        imgArray.forEach((img) => img.classList.remove("active"));
        imgArray[activeImg].classList.add("active");
    
        controlBulletBoxes.forEach((box) => box.firstChild.classList.remove("active"));
        controlBulletBoxes[activeImg].firstChild.classList.add("active");
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, imgChangeTime)
}

//Cambio immagine touch per mobile
  let startingX;
  let movingX;

imageSlider.addEventListener("touchstart", e =>{
    startingX = e.touches[0].clientX;
})

imageSlider.addEventListener("touchmove",e =>{
    movingX = e.touches[0].clientX;
})

imageSlider.addEventListener("touchend",e =>{
    if(startingX + 100 < movingX){
        activeImg--;
        CheckImgIndex();
        resetInterval();
    }
    else if(startingX -100 > movingX){
        activeImg++;
        CheckImgIndex();
        resetInterval();
    }
})