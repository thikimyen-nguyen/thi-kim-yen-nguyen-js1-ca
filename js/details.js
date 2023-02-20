const productDetailContainer = document.querySelector(".product_detail");
const loader = document.querySelector(".loader");
const pageTitle = document.querySelector("title");

const querryString = document.location.search;
console.log(querryString);
const params = new URLSearchParams(querryString);
const id = params.get("id");
console.log(id);

const url =  "http://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";
console.log(url);

async function getDetail() {
    try {
        loader.innerHTML = "";
        const response = await fetch(url);
        const details = await response.json();
        console.log(details);
        createHtml(details);
        console.log(pageTitle);
        pageTitle.innerHTML = details.name;
    } catch (error) {
        console.log(error);
        productDetailContainer.innerHTML = message("error", error);
    }
}

function createHtml(details) {
    productDetailContainer.innerHTML = `<div>
                                        <h3>${details.name}</h3>
                                        <div class="image"><img src="${details.api_featured_image}" alt="photo of ${details.name}"></div>
                                        <div>
                                            <p>Price: $${details.price}</p>
                                            <p>Rating: ${details.rating}/5</p>
                                            <p>Description: ${details.description}</p>
                                        </div>
                                        </div>`
};
setTimeout(getDetail, 2000);