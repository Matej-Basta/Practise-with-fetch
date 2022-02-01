// const getData = async () => {
//   try {
//     const response = await fetch(
//       "https://classes.codingbootcamp.ca/assets/classes/602/guardian.php"
//     );

//     console.log(response);

//     const data = await response.json();

//     console.log(data);
//   } catch (e) {
//     console.log(`There was an error - ${e}`);
//   }
// };

// getData();

//creating an article class with properties and methods
class Article {
  constructor(title, link, description, date, category) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.date = date;
    console.log(category);
    this.category =
      typeof category === "string" ? category : category.join(", ");
  }

  createArticle() {
    const article = document.createElement("div");
    article.className = "container";
    article.innerHTML = `<h3 class="heading">${this.title}</h3><p class="category">Category: ${this.category}</p><p class="date">${this.date}</p><a class="article" href="${this.link}">Read the whole article - ${this.title}</a><div class="text">${this.description}</div><p class="more">Read description</p>`;

    const more = article.querySelector(".more");
    let state = 0;
    more.addEventListener("click", () => {
      if (state === 0) {
        article.querySelector(".text").style.display = "block";
        more.textContent = "Close description";
        state = 1;
      } else {
        article.querySelector(".text").style.display = "none";
        more.textContent = "Read description";
        state = 0;
      }
    });

    document.querySelector("body").appendChild(article);
  }
}

fetch(
  "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.data.channel.item.forEach((element) => {
      console.log(element.category);
      const art = new Article(
        element.title,
        element.link,
        element.description,
        element.pubDate,
        element.category
      );
      art.createArticle();
    });
  })
  .catch((e) => {
    console.log(e);
  });
