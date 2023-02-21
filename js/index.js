
// API link is from https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const productsContainer = document.querySelector(".products");
const loader = document.querySelector(".loader");

async function getMakeup() {
    try {
        loader.innerHTML = "";
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
        results.forEach(function(product) {
            productsContainer.innerHTML += `<a href="details.html?id=${product.id}" class="product_card">
                                            <div class="image"><img src="${product.api_featured_image}" alt="photo of ${product.name}"></div>
                                            <h3>$${product.price}</h3>
                                            <p>${product.name}</p>
                                            </a>`
        });
       
    } catch (error) {
        console.log(error);
        productsContainer.innerHTML = message("error", error);
    }
}
setTimeout(getMakeup,2000);


