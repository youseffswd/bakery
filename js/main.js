$(() => {
    $(".hamburger-menu").on("click", function(){
        $(".toggle , .nav-list").toggleClass("open")
        
    })
    let elements = Array.from($("*"))
    
    let filteredEls = elements.filter(e => e.dataset.aos);
    console.log(filteredEls);
    filteredEls.forEach(filtered => {
        if(filtered.dataset.aos == "fade-right"){
            filtered.style.opacity = "0"
            filtered.style.transform = "translatex(-120px)"
        }else if(filtered.dataset.aos == "fade-up"){
            filtered.style.opacity = "0"
            filtered.style.transform = "translatey(-80px)"
        }else if(filtered.dataset.aos == "fade-down"){
            filtered.style.opacity = "0"
            filtered.style.transform = "translatey(80px)"
        }else{
            filtered.style.opacity = "0"
            filtered.style.transform = "translatex(120px)"
            
        }
        
    })
    window.onscroll = (e) => {
        for(let i = 0 ; i < filteredEls.length ; i++){
            filteredEls[i].style.transition = ".65s all linear"
            if(scrollY + window.innerHeight >= filteredEls[i].offsetTop + 100){
                filteredEls[i].style.opacity = "1"
                filteredEls[i].style.transform = "translatex(0px)"
            }
        }
    }
    
})
















