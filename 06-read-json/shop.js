// METHOD 1
async function main() {
    let response = await axios.get('products.json');
    for (let product of response.data) {
        let optionElement = document.createElement('option');
        optionElement.value = product.sku;
        optionElement.innerHTML = product.name;

        document.querySelector('#product')
                .appendChild(optionElement);
    }
}

main();



// METHOD 2: Annoymous function
// (async function(){
//     await axios.get('products.json');
   
// })();

// METHOD 3: Wait for all elements to be created first
// window.addEventListener('DOMContentLoaded', async function(){
//     await axios.get('products.json');
// })