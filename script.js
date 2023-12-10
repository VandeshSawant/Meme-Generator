const search = document.getElementById("search-button");
const showMore = document.getElementById("show-more-button");
const searchResults = document.getElementById("search-results");
const searchPage = document.getElementById("wrapper");

async function searchMeme() {
  try {
    const url = `https://meme-api.com/gimme`;

    const response = await fetch(url);
    const data = await response.json();

    const result = data; 

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.classList.add("search-result-image");
    image.src = result.url;
    image.alt = result.title;
    const imageLink = document.createElement("a");
    imageLink.href = result.postLink;
    imageLink.target = "_blank";

    imageWrapper.appendChild(imageLink);
    imageLink.appendChild(image);
    searchResults.appendChild(imageWrapper);

    showMore.style.display = "block";
    searchPage.style.display = "none";

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

showMore.addEventListener("click", () => {
  searchMeme();
  searchResults.innerHTML = "";
});

search.addEventListener("click", () =>{
  searchMeme();
})