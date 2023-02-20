const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const productsContainer = document.querySelector(".products");


async function getMakeup() {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    results.forEach(function(product) {
        productsContainer.innerHTML += `<div class="product_card">
                                        <div class="image"><img src="${product.api_featured_image}" alt="photo of ${product.name}"></div>
                                        <h3>Price: $${product.price}</h3>
                                        <p>${product.name}</p>
                                        </div>`
    });
   
}
getMakeup();