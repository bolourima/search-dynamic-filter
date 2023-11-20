document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const fruitlist = document.getElementById("fruitlist");
  const fruitItems = fruitlist.getElementsByTagName("li");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < fruitItems.length; i++) {
      const fruitName = fruitItems[i].textContent.toLowerCase();
      if (
        fruitName.startsWith(searchTerm) ||
        fruitName.startsWith(searchTerm.substring(0, 2))
      ) {
        fruitItems[i].style.display = "block";
      } else {
        fruitItems[i].style.display = "none";
      }
    }
  });
});
