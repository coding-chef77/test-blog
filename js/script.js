const resultContainer = document.querySelector(".results");

const baseUrl =
  "https://www.hgportfolio.one/wp-json/wp/v2/posts?consumer_key=ck_7c308eadf64e1ada28e4eec1c5cd2991f5bdc421&consumer_secret=cs_10828a248005464dcfb737feb0990f39c9c5578a";

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();

  console.log(posts);

  posts.forEach(function (post) {
    resultContainer.innerHTML += `
    <div class="results">
    <a href="description.html?id=${post.id}">
    <h2>${post.title.rendered}</h2>
    <p>${post.content.rendered}</p>                               
    </a>
    </div
    
    `;
  });
}

getPosts(baseUrl);
