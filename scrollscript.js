const header = document.getElementsByClassName('main-header')[0]
const slide = document.getElementsByClassName('slide')[0]
const slide2 = document.getElementsByClassName('slide2')[0]

console.log(slide)
function handleScroll(){
    const scrollY = window.scrollY;

    // Add a class to the header when scrolling down
    if (scrollY > 30) { // Adjust the threshold as needed
        header.classList.add('scrolled');
        slide.classList.add('slide-out')
        slide2.classList.add('slide-out')
    } else {
        header.classList.remove('scrolled');
        slide.classList.remove('slide-out') 
        slide2.classList.remove('slide-out')  
    }
}

window.addEventListener('scroll', handleScroll);
