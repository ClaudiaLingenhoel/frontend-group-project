// ---------- DOM ELEMENTS ---------- //

const photoDetails = document.getElementById("photo-details");

// ---------- GET DATA FROM URL ---------- //

const params = new URLSearchParams(window.location.search);
const photoId = Number(params.get("id"));
let currentCategory = params.get("category") || "all";

if (!portfolioCategories[currentCategory]) {
  currentCategory = "all";
}

// ---------- FIND CURRENT PHOTO ---------- //

const photo = portfolioPhotos.find((photo) => photo.id === photoId);

// ---------- FUNCTIONS ---------- //

function renderPhotoDetails(photo) {
  photoDetails.innerHTML = `
  <a href="portfolio.html?category=${currentCategory}" class="detail-image-link">  
  <img src="images/${photo.image}" alt="${photo.title}" 
    class="detail-image"/>
    </a>
    <div class="photo-meta">

     <div class="photo-text">

    <h1 class="photo-title">${photo.title}</h1>
    <p class="photo-description">${photo.description}</p>
</div>
        <div class="photo-info">
            <span>
                ${portfolioCategories[photo.category].detail}
            </span>
              <span>·</span>
            <span>
                ${photo.date} 
            </span>
        </div>
    </div>
    <a class="btn btn-outline-dark rounded-pill portfolio-back-btn" href="portfolio.html?category=${currentCategory}">
        Back to Portfolio
    </a>
  `;
}

// ---------- INIT ---------- //

if (photo) {
  renderPhotoDetails(photo);
} else {
  photoDetails.innerHTML = "<p>Photo not found.</p>";
}
