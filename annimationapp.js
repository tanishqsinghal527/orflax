window.onload = function() {
    const leftPlug = document.getElementById('left-plug');
    const rightPlug = document.getElementById('right-plug');
    const rightWire = document.getElementById('right-wire');
    const leftWire = document.getElementById('left-wire');
    const text = document.getElementById('text');

    // Set initial width of the wires to 0
    rightWire.style.width = '0';
    leftWire.style.opacity = 1; // Ensure left wire is visible

    // Function to adjust sizes based on screen width
    function adjustForSmallScreens() {
        if (window.innerWidth < 700) {
            leftPlug.style.fontSize = '15vw'; // Smaller size
            rightPlug.style.fontSize = '10vw'; // Smaller size
            text.style.fontSize = '20vw'; // Smaller size
            leftWire.style.width = '40vw'; // Adjust width for the black wire
        } else {
            leftPlug.style.fontSize = '200px'; // Default size
            rightPlug.style.fontSize = '150px'; // Default size
            text.style.fontSize = '300px'; // Default size
            leftWire.style.width = '500px'; // Default width for the black wire
        }
    }

    adjustForSmallScreens(); // Call once on load

    // Start the wire expansion
    setTimeout(function() {
        rightWire.style.width = '50vw'; // Grow the right wire
    }, 100);

    // Move the right plug to the center
    setTimeout(function() {
        rightPlug.style.transition = 'right 2s ease-in-out';
        rightPlug.style.right = `calc(50vw - ${parseFloat(getComputedStyle(rightPlug).fontSize) / 2}px)`; // Center the plug based on its width
    }, 100);

    // After 2 seconds, hide the plugs and wires
    setTimeout(function() {
        leftPlug.style.opacity = 0;  
        rightWire.style.opacity = 0; 
        leftWire.style.opacity = 0;  
        rightPlug.style.opacity = 0;  
    }, 2500); 

    // Show the text after all elements have faded out
    setTimeout(function() {
        text.style.opacity = 1;  
    }, 3000); 

    // Redirect after 5 seconds
    setTimeout(function() {
        window.location.href = 'index.html'; 
    }, 5000); 

    // Add an event listener for window resize
    window.addEventListener('resize', adjustForSmallScreens);
};
