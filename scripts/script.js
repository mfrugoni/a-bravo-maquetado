console.log('script.js');

function createProducts(dataArray){
    let cardString = ``;
    for (const product of dataArray) {
        
        cardString += `
        <div class="card">
        <div class="card-icon">
            <img src="${product.icon}" alt="${product.alt}" title="${product.description}">
        </div>

        <h3>${product.title}</h3>
        </div>
    `;
    }

    return cardString;
}

// const products = document.getElementById('products');
// products.innerHTML = createProducts(productsData);