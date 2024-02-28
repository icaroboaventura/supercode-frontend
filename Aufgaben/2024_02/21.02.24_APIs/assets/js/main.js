//--------------
// Task 1
//--------------

const refresh = document.querySelector(".refresh");
let page = 1;

const fetchFunction = () => {};

fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    data.map((image) => {
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

//   let grid = document.querySelector(".picsum_grid");
// let refreshBtn = document.querySelector("#refresh");
// let number = 1;

// let fetchFunction = () => {
//   fetch(https://picsum.photos/v2/list?page=${number}&limit=100)
//     .then((response) => response.json())
//     .then((picsumData) => {
//       let result = picsumData
//         .map((singleImg) => {
//           return <div>
//         <img src="${singleImg.download_url}" alt="Picsum Img">
//         <h2>${singleImg.author} </h2>
//         <a href="${singleImg.url}">See more</a>
//         </div>
//         ;
//         })
//         .join("");
//       grid.innerHTML = result;
//     })
//     .catch((error) => console.log("ein Fehler ist aufgetreten", error));
// };
// fetchFunction();

// refreshBtn.addEventListener("click", () => {
//   number++;
//   fetchFunction();
// });
