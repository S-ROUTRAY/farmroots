document.addEventListener("DOMContentLoaded", function () {
    const productSearch = document.getElementById("productSearch");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    searchButton.addEventListener("click", function () {
        
        searchResults.innerHTML = "Search results will appear here.";
    });

    const locationInput = document.getElementById("location");
    const getGuidanceButton = document.getElementById("getGuidance");
    const guidanceResults = document.getElementById("guidanceResults");

    getGuidanceButton.addEventListener("click", function () {
        
        fetch('products.json').then(response => {
            return response.json();
        }).then(products => {
            let output = "";
            for (let product of products) {
                output += `
                   <h2>Product Id: ${product.id}</h1>
                   <h2>Products Cultivated: ${product.products} </h2>
                   <h2>State: ${product.state} </h2>
                `;
            }
            guidanceResults.innerHTML = output;
        })
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100 + '%';
        slider.style.transform = `translateX(${offset})`;
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    setInterval(nextSlide, 4000);
});

document.addEventListener('DOMContentLoaded', function () {
    const getLocationButton = document.getElementById('getLocationButton');
    const locationPopup = document.getElementById('locationPopup');
    const locationText = document.getElementById('locationText');
    const closePopupButton = document.getElementById('closePopupButton');

    
    function showLocationPopup(coords) {
        locationText.textContent = `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`;
        locationPopup.style.display = 'block';
    }
    function closeLocationPopup() {
        locationPopup.style.display = 'none';
    }

    getLocationButton.addEventListener('click', function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const coords = position.coords;
                showLocationPopup(coords);
            }, function (error) {
                locationText.textContent = `Error: ${error.message}`;
                locationPopup.style.display = 'block';
            });
        } else {
            locationText.textContent = 'Geolocation is not supported by your browser.';
            locationPopup.style.display = 'block';
        }
    });

    closePopupButton.addEventListener('click', closeLocationPopup);
});

