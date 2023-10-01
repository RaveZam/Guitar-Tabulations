const header = document.getElementsByClassName('main-header')[0]
const body = document.getElementsByClassName('body')

function handleScroll(){
    const scrollY = window.scrollY;

    // Add a class to the header when scrolling down
    if (scrollY > 30) { // Adjust the threshold as needed
        header.classList.add('scrolled');
        body.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled');
        body.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);