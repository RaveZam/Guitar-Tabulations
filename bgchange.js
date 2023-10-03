
const scrollingElement = document.querySelector('.body');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Set a threshold value for when to change the background color
    const threshold = 200; // Adjust this value as needed

    if (scrollPosition > threshold) {
        scrollingElement.style.backgroundColor = 'rgba(248, 235, 213, 0.77)'; // Change to your desired background color
    } else {
        scrollingElement.style.backgroundColor = 'rgba(255, 213, 141, 0.704)'; // Restore the default background color
    }
});
