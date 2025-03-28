if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    loadEvent();
  });
} else {
  loadEvent();
}

function loadEvent() {
  const contentsDiv = document.getElementById("contents");
  fetch("./link.txt")
    .then((response) => response.text())
    .then((text) => {
      const links = text.split("\n");
      links.forEach((link) => {
        link = link.trim();
        if (link) {
          const wrapper = document.createElement("div");
          wrapper.classList.add("video-wrapper");
          const iframe = document.createElement("iframe");
          iframe.src = link;
          iframe.setAttribute("allowfullscreen", true);

          wrapper.appendChild(iframe);
          contentsDiv.appendChild(wrapper);
        }
      });
    });

  const contentsDiv2 = document.getElementById("contents2");
  fetch("./link2.txt")
    .then((response) => response.text())
    .then((text) => {
      const links = text.split("\n");
      links.forEach((link) => {
        link = link.trim();
        if (link) {
          const wrapper = document.createElement("div");
          wrapper.classList.add("video-wrapper");
          const iframe = document.createElement("iframe");
          iframe.src = link;
          iframe.setAttribute("allowfullscreen", true);

          wrapper.appendChild(iframe);
          contentsDiv2.appendChild(wrapper);
        }
      });
    });
}
