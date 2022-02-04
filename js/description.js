const singleBlogsCont = document.querySelector(".single-blogs");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.hgportfolio.one/wp-json/wp/v2/posts/" + id;

// const name = params.get("title");

async function getSingleBlog() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details);
  } catch (error) {
    descriptContainer.innerHTML = `<p>Something went wrong, check back later.</p>
                                   
    `;
  }
}

getSingleBlog();

function createHtml(details) {
  singleBlogsCont.innerHTML = `
  <div>
  <h2>${post.title.rendered}</h2>
  <p>${post.content.rendered}</p> 
  </div>`;
}
