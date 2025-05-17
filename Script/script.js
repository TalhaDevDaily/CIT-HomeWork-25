const searchKeyword = document.querySelector(".search-keyword");
const searchBtn = document.querySelector(".search-btn");
const searchResult = document.querySelector(".search-result");

const randomItems = [
  "watch",
  "mug",
  "mug",
  "vape",
  "vape",
  "clock",
  "lamp",
  "lighter",
  "earphone",
];

searchBtn.addEventListener("click", () => {
  const searchItem = randomItems.filter((item) => {
    return item === searchKeyword.value;
  });

  if (searchItem.length === 0) searchResult.innerHTML = `Product not Found!`;
  else {
    searchItem.map((searchMap) => {
      searchResult.innerHTML = "";
      searchResult.innerHTML += searchMap + "<br />";
    });
  }
});
