// ---------- DOM ELEMENTS ---------- //

const portfolioGrid = document.getElementById("portfolio-grid");
const categoryButtons = document.getElementById("category-buttons");

// ---------- STATE ---------- //
let activeButton;

const urlParams = new URLSearchParams(window.location.search);
let currentCategory = urlParams.get("category") || "all";

if (!portfolioCategories[currentCategory]) {
  currentCategory = "all";
}

// ---------- FILTERING ---------- //

function createCategoryButton(category) {
  return `
        <button class="btn btn-outline-dark rounded-pill" 
            id="${category}-btn"
        >
            ${portfolioCategories[category].filter}
        </button>
    `;
}

function renderCategoryButtons(categories) {
  let html = "";
  categories.forEach((category) => {
    html += createCategoryButton(category);
  });
  categoryButtons.innerHTML = html;

  activeButton = document.getElementById(`${currentCategory}-btn`);

  if (activeButton) {
    activeButton.classList.add("active");
  }

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
      currentCategory = category;

      activeButton.classList.remove("active");
      button.classList.add("active");
      activeButton = button;

      const params = new URLSearchParams(window.location.search);
      params.set("category", currentCategory);
      history.pushState(null, "", `?${params.toString()}`);

      renderPhotoCards(filterPhotos(category));
    });
  });
}

// ---------- PHOTO CARDS ---------- //

function createPhotoCard(photo) {
  return `
        <a
            href="details.html?id=${photo.id}&category=${currentCategory}"
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

// ---------- INIT ---------- //
renderCategoryButtons(Object.keys(portfolioCategories));
renderPhotoCards(filterPhotos(currentCategory));
