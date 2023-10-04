const header = document.getElementsByClassName('main-header')[0]
const slide = document.getElementsByClassName('slide')[0]
const slide2 = document.getElementsByClassName('slide2')[0]
const h2slide = document.getElementsByClassName('h2t')[0]
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
}

window.addEventListener('scroll', handleScroll);



