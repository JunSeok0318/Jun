if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    loadEvent();
  });
} else {
  loadEvent();
}

function loadEvent() {
  const contentsDiv = document.getElementById("contents");
  fetch("./link.txt").then(response => response.text).then(text => {
    const links = text.split("\n")
    links.forEach(link => {
      
    })
  });
}
