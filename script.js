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
  constructor(title, link, description, date) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.date = date;
  }
  createArticle() {
    const article = document.createElement("div");
    article.innerHTML = `<h3>${this.title}</h3><p>${this.date}</p><a href="${this.link}">The whole article.</a><p>${this.description}</p>`;
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
      const art = new Article(
        element.title,
        element.link,
        element.description,
        element.pubDate
      );
      art.createArticle();
    });
  })
  .catch((e) => {
    console.log("The server was not found.");
  });
