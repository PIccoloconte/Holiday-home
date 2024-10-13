const btnBackItineraries = document.querySelector(".btnBackItineraries");


window.addEventListener("scroll", ()=>{
    
    if(window.scrollY > 400){
        
        btnBackItineraries.classList.add("active");
    }
    else{
        
        btnBackItineraries.classList.remove("active");
    }
})