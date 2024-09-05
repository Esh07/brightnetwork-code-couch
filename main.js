let currentCategory = 'India';

async function fetchImages(category = currentCategory) {
    try {
        const response = await fetch(`/api/fetchImages?category=${encodeURIComponent(category)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const images = await response.json();
        const gallery = document.getElementById("gallery");


        // Clear existing content
        gallery.innerHTML = "";

        images.forEach((image, index) => {
            const galleryItem = document.createElement("div");
            galleryItem.className = "gallery-item";

            const img = document.createElement("img");
            img.src = image.url;
            img.alt = `Image by ${image.author}`;
            img.loading = "lazy";
            img.className = "responsive-img";

            const overlay = document.createElement("div");
            overlay.className = "overlay";
            overlay.innerHTML = `
          <div class="overlay-content">
            <a href="https://unsplash.com/photos/${image.slug}" target="_blank" class="location"> <span class="btn location-link"> <i class="fa-regular fa-arrow-up-right-from-square"></i> View </span></a> 
            <div class="overlay-content-meta">
             <div class="overlay-content-meta-content">
               <div class="auther">
                  <i class="fa-regular fa-user "></i>
                  <h3>${image.author}</h3>
                 </div>
                <span class="date"> <i class="fa-regular fa-calendar"></i> ${image.publishedAt ? new Date(image.publishedAt).toLocaleDateString() : "Unknown Date"}</span>
            </div>
                 </div>
            
          </div>
        `;

            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);
            gallery.appendChild(galleryItem);

        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
    fetchImages(currentCategory);

    // Add event listeners to buttons
    document.querySelectorAll('.controls button').forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.textContent;
            filterImages(category);
        });
    });
});

function filterImages(category) {
    currentCategory = category;
    fetchImages(`India ${category}`);
}

// Initialise the image fetch and slider setup
document.addEventListener("DOMContentLoaded", fetchImages(currentCategory));

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let baseColor = "#";
    for (let i = 0; i < 6; i++) {
        baseColor += letters[Math.floor(Math.random() * 16)];
    }
    return {
        baseColor: baseColor, // Solid color
        lightColor: shadeColor(baseColor, 0.5) // Lighter shade
    };
}

// Function to lighten a color
function shadeColor(color, percent) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    r = Math.min(255, Math.floor(r + (255 - r) * percent));
    g = Math.min(255, Math.floor(g + (255 - g) * percent));
    b = Math.min(255, Math.floor(b + (255 - b) * percent));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}


document.addEventListener('DOMContentLoaded', () => {
    const controls = document.querySelector('.controls');

    // Optional: Add smooth scrolling
    controls.style.scrollBehavior = 'smooth';
});

function toggleControls() {
    const controls = document.querySelector('.controls');
    controls.classList.toggle('show');
}