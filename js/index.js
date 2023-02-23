
// API link is from https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
const apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const corsEnableUrl = "https://noroffcors.onrender.com/";
const url = corsEnableUrl + apiUrl;
const productsContainer = document.querySelector(".products");
const loader = document.querySelector(".loader");

async function getMakeup() {
    try {
        loader.innerHTML = "";
        const response = await fetch(url);
        const results = await response.json();        
        if (typeof results !== "object") {
            throw new Error("Error in fetching data");
        };
        results.forEach(function(product) {
            productsContainer.innerHTML += `<a href="details.html?id=${product.id}" class="product_card">
                                            <div class="image"><img src="${product.api_featured_image}" alt="${product.name}"></div>
                                            <h3>$${product.price}</h3>
                                            <h4>${product.name}</h4>
                                            </a>`
        });
       
    } catch (error) {
        productsContainer.innerHTML = message("error", error);
    }
}
setTimeout(getMakeup,2000);


