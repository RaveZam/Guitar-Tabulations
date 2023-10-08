document.addEventListener("mousemove", parallax)
function parallax(e){
    var slide = document.getElementsByClassName("welcome-slide")[0]
    var slide2 = document.getElementsByClassName("slide2")[0]
    const speed = slide.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/120
    const y = (window.innerHeight - e.pageY*speed)/120

    slide.style.transform = `translateX(${x}px) translateY(${y}px)`
    slide2.style.transform = `translateX(${x}px) translateY(${y}px)`

    
}