const header = document.getElementsByClassName('main-header')[0]

function handleScroll(){
    const scrollY = window.scrollY;

    // Add a class to the header when scrolling down
    if (scrollY > 30) { // Adjust the threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);