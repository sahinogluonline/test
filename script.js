document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var textElements = document.querySelectorAll('.text2');
        textElements.forEach(function(textElement) {
            textElement.classList.remove('hidden'); 
            textElement.classList.add('typing-animation'); 
        });

        
        var containers = document.querySelectorAll('.container_yazilar');
        containers.forEach(function(container) {
            container.style.textAlign = 'center'; 
        });
    }, 2500); 
});


function handlePhoneClick(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

function handleEmailClick(emailAddress) {
    window.location.href = 'mailto:' + emailAddress;
}

document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function() {
        var image = document.querySelector("#jelux img");
        image.classList.add("start-animation");
    }, 1050); // 
});





