// Function to open the certificate modal
function openCertificateModal(certificateUrl) {
    var modal = document.getElementById('certificateModal');
    var closeModal = modal.querySelector('.close');
    var pdfFrame = modal.querySelector('#pdfFrame');

    pdfFrame.src = certificateUrl;
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        pdfFrame.src = ''; // Clear the iframe src to stop loading the PDF
    });

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            pdfFrame.src = ''; // Clear the iframe src to stop loading the PDF
        }
    };
}

// Add event listeners to download buttons
document.querySelectorAll('.download-cv-btn, .download-cert-btn').forEach(button => {
    button.addEventListener('click', function() {
        var certificateType = this.dataset.certificate;
        var certificateUrl;

        switch (certificateType) {
            case 'cv':
                certificateUrl = 'images/resume.pdf';
                break;
            case 'cert1':
                certificateUrl = 'images/cert1.pdf';
                break;
            case 'cert2':
                certificateUrl = 'images/cert2.pdf';
                break;
            case 'cert3':
                certificateUrl = 'images/cert3.pdf';
                break;
            case 'cert4':
                certificateUrl = 'images/cert4.pdf';
                break;
            case 'cert5':
                certificateUrl = 'images/cert5.pdf';
                break;
            case 'cert6':
                certificateUrl = 'images/cert6.pdf';
                break;
            case 'cert7':
                certificateUrl = 'images/cert7.pdf';
                break;
            case 'cert8':
                certificateUrl = 'images/cert8.pdf';
                break;
            case 'cert9':
                certificateUrl = 'images/cert9.pdf';
                break;
            case 'cert10':
                certificateUrl = 'images/cert10.pdf';
                break;
            default:
                certificateUrl = 'images/resume.pdf';
        }

        openCertificateModal(certificateUrl);
    });
});

// Scroll to contact section when "Hire Me" button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const hireMeBtn = document.getElementById('hireMeBtn');
    const contactSection = document.getElementById('contact');

    hireMeBtn.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle navigation menu for smaller screens
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}

// Remove responsive class from navigation menu when an item is clicked
function closeMenu() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.remove("responsive");
}

// Change navigation bar style while scrolling
window.onscroll = function() { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// Initialize Typed.js for typing effect
var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Software QA Tester"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

// Scroll reveal animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Home section animations
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

// Project box animations
sr.reveal('.project-box', { interval: 200 });

// Headings animations
sr.reveal('.top-header', {});

// Scroll reveal animations from left
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

// About and contact section animations from left
srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

// Scroll reveal animations from right
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Skills and form box animations from right
srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

// Certificate info animations
sr.reveal('.cert-info', { interval: 200 });

// Initialize EmailJS
emailjs.init("0ltW81V9xijzvVmDR");

// Function to display success message

function showSuccessMessage(message) {
    var successDiv = document.getElementById('form-success');
    successDiv.textContent = message;
    setTimeout(function() {
        successDiv.textContent = '';
    }, 3000);
}
// Function to display error message
function showErrorMessage(message) {
    var errorDiv = document.getElementById('form-error');
    var errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorDiv.appendChild(errorMessage);
}
// Function to send email using EmailJS with validation
function sendEmail(event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Clear any previous messages
    var successDiv = document.getElementById('form-success');
    var errorDiv = document.getElementById('form-error');
    successDiv.textContent = '';
    errorDiv.innerHTML = '';
    // Update send button text to "Sending"
    var sendButton = document.getElementById('send-button');
    sendButton.innerHTML = '<span>Sending...</span> <i class="uil uil-message"></i>';
    // Boolean variable to track if any field is empty
    var isEmptyField = false;
    // Array to store error messages
    var errors = [];
    // Get user inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subjects').value;
    var message = document.getElementById('message').value;
    // Check if any field is empty
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        isEmptyField = true;
    }
    // If any field is empty, display "fill out all required fields" error message
    if (isEmptyField) {
        errors.push('⚠️ Unable to send the form. Please fill out all the required fields.');
    } else {
        // Check if the email is valid
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) && email.trim() !== '') {
            errors.push('⚠️ Please enter a valid email address.');
        }
        // Check if the message contains at least 10 characters
        if (message.trim().length < 10 && message.trim() !== '') {
            errors.push('⚠️ Message must be at least 10 characters long.');
        }
    }
    // If there are errors, display them
    if (errors.length > 0) {
        errors.forEach(function(error) {
            showErrorMessage(error);
        });
        // Clear error messages after 3 seconds
        setTimeout(function() {
            errorDiv.innerHTML = '';
        }, 3000);
        // Revert send button text to "Send"
        sendButton.innerHTML = '<span>Send</span> <i class="uil uil-message"></i>';
        return; // Stop execution if there are errors
    }
    // Send email using EmailJS
    emailjs.send("service_insuw9h", "template_5vosfmc", {
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        console.log("Email sent successfully!", response);
        showSuccessMessage('✅Form sent successfully! I\'ll get back to you as soon as possible');
        // Clear form inputs after successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subjects').value = '';
        document.getElementById('message').value = '';
        // Change send button text to "Sent" for 5 seconds
        sendButton.innerHTML = '<span>Sent</span> <i class="uil uil-message"></i>';
        setTimeout(function() {
            sendButton.innerHTML = '<span>Send</span> <i class="uil uil-message"></i>';
        }, 5000);
    }, function(error) {
        console.error("Email sending failed!", error);
        showErrorMessage(' ⚠️ Email sending failed!');
        // Revert send button text to "Send"
        sendButton.innerHTML = '<span>Send</span> <i class="uil uil-message"></i>';
    });
}