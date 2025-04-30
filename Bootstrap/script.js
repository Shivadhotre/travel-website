document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    // Form Submission Handling (Example)
    const form = document.getElementById('trip-planning-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            //Basic Validation
            const arrivalDate = document.getElementById('arrival').value;
            const departureDate = document.getElementById('departure').value;

            if(!arrivalDate || !departureDate){
                alert('Please enter arrival and departure dates.');
                return;
            }

            // You can add more sophisticated form validation here
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());

            console.log("Form Data Submitted:", formValues);

            alert("Request submitted! (See console for data)"); // Replace with actual submission logic
        });
    } else {
        console.log("Form not found");
    }

    // Example: Smooth scrolling for the "Explore Packages" button
    const exploreButton = document.querySelector('.hero .btn');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
