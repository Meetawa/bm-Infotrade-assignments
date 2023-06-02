var searchInput = document.getElementById("searchInput");
var suggestionList = document.getElementById("suggestionList");
var nameList = document.getElementById("nameList").getElementsByTagName("li");

searchInput.addEventListener("input", function () {
  var inputText = searchInput.value.toLowerCase();
  suggestionList.innerHTML = "";

  for (var i = 0; i < nameList.length; i++) {
    var name = nameList[i].textContent.toLowerCase();

    if (name.startsWith(inputText)) {
      var suggestionItem = document.createElement("li");
      suggestionItem.textContent = nameList[i].textContent;
      suggestionItem.addEventListener("click", function () {
        searchInput.value = this.textContent;
        suggestionList.innerHTML = "";
      });
      suggestionList.appendChild(suggestionItem);
    }
  }
});
