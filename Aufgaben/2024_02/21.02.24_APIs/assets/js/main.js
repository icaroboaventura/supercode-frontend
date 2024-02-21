fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((image) => {
      let imgBox = document.createElement("div");
      imgBox.classList.add("img-box");

      let img = document.createElement("img");
      img.setAttribute("src", image.download_url);
      imgBox.appendChild(img);

      let author = document.createElement("h3");
      author.textContent = image.author;
      imgBox.appendChild(author);

      let btn = document.createElement("button");
      btn.textContent = "See More";
      imgBox.appendChild(btn);

      btn.addEventListener("click", () => {
        window.open(image.url);
      });

      document.querySelector("section").appendChild(imgBox);
    });
  })
  .catch((err) => {
    "error trying to fetch", err;
  });
