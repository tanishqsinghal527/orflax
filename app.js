
const helpButton = document.getElementById('helpButton');
const largeHelpButton = document.querySelector('.large-help');


const handleClick = () => {
    // Scroll smoothly to the help desk section
    const helpDeskSection = document.querySelector('.help-desk');
    helpDeskSection.scrollIntoView({ behavior: 'smooth' });

    // Show the large help button with animation
    largeHelpButton.classList.add('visible');
};

// Initially hide the large help button
largeHelpButton.classList.remove('visible');

helpButton.addEventListener('click', handleClick);

function redirectToSite() {
    window.location.href = "https://www.wirecable.in/"; // Replace with the URL you want to redirect to
  }
function redirectToSitefb() {
    window.location.href = "https://www.facebook.com/p/Orflax-Wires-Cables-100066866499210/";

}

const hamburger = document.getElementById('hamburger');
const navigationBar = document.getElementById('navigation_bar');

hamburger.addEventListener('click', () => {
    navigationBar.classList.toggle('show'); // Toggles the 'show' class
});


