const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];
let productName = prompt("Enter new product name:", "Monitor");
let productPrice = Number(prompt("Enter product price:", "150"));
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    alert("Invalid product details. Please enter a valid name and price.");
} else {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });
    function getCategory(price) {
        if (price < 50) {
            return "Budget";
        } else if (price < 200) {
            return "Standard";
        } else {
            return "Premium";
        }
    }
    const calculateTotal = (items) => {
        let total = 0;
        for (let item of items) {
            if (item.price <= 0) {
                continue;
            }
            total += item.price;
        }
        return total;
    };
    function applyDiscount(amount, discount = 0) {
        return amount - (amount * discount / 100);
    }
    let output = "--- Initializing Inventory System ---\n";
    output += "New product added: " + productName.trim() + "\n\n";
    output += "--- Processing Inventory Roster (forEach) ---\n";
    inventory.forEach(function(item) {
        output += "* Item: " + item.name +
                  " ($" + item.price + ") -> Category: " +
                  getCategory(item.price) + "\n";
    });
    const total = calculateTotal(inventory);
    const affordableItems = inventory.filter(function(item) {
        return item.price < 200;
    });
    const report = inventory.map(function(item) {
        return item.name.toUpperCase() + ": $" + item.price;
    });
    output += "\n--- Financial Analytics ---\n";
    output += "Total Inventory Value: $" + total + "\n";
    output += "After 10% Discount: $" +
              applyDiscount(total, 10) + "\n";
    output += "Filtered Affordable Items (Under $200): " +
              JSON.stringify(affordableItems.map(item => item.name)) + "\n";
    output += "Formatted Report List: " +
              JSON.stringify(report);
    console.log(output);
    document.body.innerHTML = "<pre style='font-size:18px; white-space:pre-wrap; padding:20px;'>" + output + "</pre>";
console.log(output);
}