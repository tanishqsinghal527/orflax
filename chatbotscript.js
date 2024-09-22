// Get the elements
const chatIcon = document.getElementById('chatIcon');
const chatPopup = document.getElementById('chatPopup');
const closeChat = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const userMessage = document.getElementById('userMessage');

// Open Chat on Icon Click
chatIcon.addEventListener('click', function() {
    if (confirm("AI Assistance Needed?")) {
        chatPopup.classList.add('show');
        chatPopup.style.display = 'block';
    }
});

// Close Chat on Close Button Click
closeChat.addEventListener('click', function() {
    chatPopup.classList.remove('show'); 
    chatPopup.style.display = 'none';
});

// Send Button Click
sendBtn.addEventListener('click', function() {
    const message = userMessage.value.trim();
    if (message) {
        alert(`You sent: ${message}`);
        userMessage.value = ''; // Clear message box after sending
    }
});
