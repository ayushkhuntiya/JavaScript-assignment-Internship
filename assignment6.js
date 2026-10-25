const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];
let output = "-- All Products (forEach) --\n";
products.forEach(function(product) {
    output += "Item: " + product.name +
              " - Price: $" + product.price + "\n";
});
output += "\n-- Filtered Products (Price < $50) --\n";
const filteredProducts = products.filter(function(product) {
    return product.price < 50;
});
output += JSON.stringify(filteredProducts, null, 2);
output += "\n\n-- Mapped Product Tags (map) --\n";
const mappedProducts = products.map(function(product) {
    return product.name.toUpperCase() +
           " costs $" + product.price;
});
output += JSON.stringify(mappedProducts, null, 2);
document.body.innerHTML =
    "<pre style='font-size:20px; white-space:pre-wrap; padding:20px;'>" +
    output + "</pre>";
console.log(output);