
const scrollingElement = document.querySelector('.body');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Set a threshold value for when to change the background color
    const threshold = 200; // Adjust this value as needed

    if (scrollPosition > threshold) {
        scrollingElement.style.backgroundColor = 'rgba(248, 235, 213, 0.77)'; // Change to your desired background color
    } else {
        scrollingElement.style.backgroundColor = 'rgba(245, 211, 153, 0.77)'; // Restore the default background color
    }

    const section3thr = 900;
    if (scrollPosition > section3thres) {
        scrollingElement.style.backgroundColor = 'rgba(248, 235, 213, 0.77)'; // Change to your desired background color
    } else {
        scrollingElement.style.backgroundColor = 'rgba(245, 211, 153, 0.77)'; // Restore the default background color
    }
});


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

//
