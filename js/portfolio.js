// ---------- DOM ELEMENTS ---------- //
const portfolioGrid = document.getElementById("portfolio-grid");
const categoryButtons = document.getElementById("category-buttons");

// ---------- PHOTO CARDS ---------- //

function createPhotoCard(photo) {
  return `
        <a
            href="details.html?id=${photo.id}"
            class="portfolio-item"
        >
            <img
            src="images/${photo.image}"
            alt="${photo.title}"
            />
        </a>
  
    `;
}

function renderPhotoCards(photos) {
  let html = "";
  // generate all photo cards
  photos.forEach((photo) => {
    html += createPhotoCard(photo);
  });
  // render photo cards
  portfolioGrid.innerHTML = html;
}

// ---------- CATEGORY BUTTONS ---------- //

// State
let activeButton;

function createCategoryButton(category) {
  return `
        <button class="btn btn-outline-dark rounded-pill 
        ${category === "all" ? "active" : ""}" 
            id="${category}-btn"
        >
            ${category}
        </button>
    `;
}

function renderCategoryButtons(categories) {
  let html = "";
  categories.forEach((category) => {
    html += createCategoryButton(category);
  });
  categoryButtons.innerHTML = html;

  activeButton = document.getElementById("all-btn");

  addCategoryButtonListeners(categories);
}

function filterPhotos(category) {
  if (category === "all") {
    return portfolioPhotos;
  } else {
    return portfolioPhotos.filter((photo) => photo.category === category);
  }
}

function addCategoryButtonListeners(categories) {
  categories.forEach((category) => {
    const button = document.getElementById(`${category}-btn`);

    button.addEventListener("click", () => {
      activeButton.classList.remove("active");
      button.classList.add("active");
      activeButton = button;

      renderPhotoCards(filterPhotos(category));
    });
  });
}

// ---------- INIT ---------- //

renderPhotoCards(portfolioPhotos);
renderCategoryButtons(portfolioCategories);
