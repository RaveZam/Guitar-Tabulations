const header = document.getElementsByClassName('main-header')[0]
const slide = document.getElementsByClassName('slide')[0]
const slide2 = document.getElementsByClassName('slide2')[0]
const h2slide = document.getElementsByClassName('h2t')[0]
const body = document.getElementsByClassName('body')[0]
const profile = document.getElementsByClassName('profilepic')[0]
const profiledesc = document.getElementsByClassName('mini-about-me-desc')[0]
const vidslide1 = document.getElementsByClassName('vid-slide1')[0]
function handleScroll(){
    const scrollY = window.scrollY;
    console.log(scrollY)

    // Add a class to the header when scrolling down
    if (scrollY > 100) { // Adjust the threshold as needed
        header.classList.add('scrolled');
        slide.classList.add('slide-out')
        slide2.classList.add('slide-out')
        h2slide.classList.add('scrolled')

    } else {
        header.classList.remove('scrolled');
        slide.classList.remove('slide-out') 
        slide2.classList.remove('slide-out') 
        h2slide.classList.remove('scrolled') 
    }

    if (scrollY > 300) { // Adjust the threshold as needed

        body.classList.add('section2scroll')
        profile.classList.add('profilescrolled')
        profiledesc.classList.add('descscrolled')
    } else {
        body.classList.remove('section2scroll')
        
    }

    if (scrollY > 900) { // Adjust the threshold as needed
    
        h2slide.classList.add('scrolled')
        body.classList.remove('section2scroll')
        body.classList.add('scrolled')
        vidslide1.classList.add('highlightslide1')
       
    } else {
       
        h2slide.classList.remove('scrolled') 
        body.classList.remove('scrolled')
    }
}

window.addEventListener('scroll', handleScroll);

console.log(scrollY)


