document.addEventListener('DOMContentLoaded', function() {
    // 1. Swiper Initialization
    if (document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: { el: ".swiper-pagination", clickable: true },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // 2. Modern Form Handling
    const form = document.getElementById('trip-planning-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const arrival = document.getElementById('arrival').value;
            const departure = document.getElementById('departure').value;
            if(!arrival || !departure) {
                alert("Please select travel dates.");
                return;
            }
            alert("Expedition request received! Our experts will contact you shortly.");
            form.reset();
        });
    }

    // 3. Reveal on Scroll Logic
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Initial check
});
