const menu = document.querySelector("#menu");

const toggleMenu = document.querySelector(".mobile-links-container");
const btnScrollTop = document.querySelector(".scroll-top-btn");

// Bottone menu
menu.addEventListener("click",() => {
    toggleMenu.classList.toggle("showed");
});


btnScrollTop.addEventListener("click",(e)=>{
    e.preventDefault()
    scrollToTop();
})

// scroll top
window.addEventListener("scroll", ()=>{
    
    if(window.scrollY > 400){
        btnScrollTop.classList.add("active");
    }
    else{
        btnScrollTop.classList.remove("active");
    }
})

const scrollToTop = () => {
    
    const c = window.scrollY;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 20);// x, y
    }
};


// Get modal element, open button, close button, and close span
 const modal = document.getElementById('privacy-modal');
 const openBtn = document.getElementById('privacyPolice');
 const closeBtn = document.getElementById('modal-close-btn');

openBtn.addEventListener("click", () => {
    modal.showModal();
    modal.scrollTop = 0;
 })

closeBtn.addEventListener("click", () => {
    modal.close();
})

window.addEventListener("click" ,(e)=>{
    if (e.target === modal) {
        modal.close();
    }
})
