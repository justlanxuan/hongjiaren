function search() {
  var input = document.getElementById("search-input").value.toLowerCase();
  var photos = document.getElementsByClassName("photos");

  for (var i = 0; i < photos.length; i++) {
    var year = photos[i]
      .getElementsByClassName("year")[0]
      .textContent.toLowerCase();
    var person = photos[i]
      .getElementsByClassName("person")[0]
      .textContent.toLowerCase();

    if (year.includes(input) || person.includes(input)) {
      photos[i].style.display = "block";
      photos[i].scrollIntoView({ behavior: "smooth" }); // 将匹配的 div 滚动到可视区域
    } else {
      photos[i].style.display = "none";
    }
  }
}
