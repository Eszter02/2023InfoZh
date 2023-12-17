var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var products = [
    { name: "Espresso", price: 590 },
    { name: "Flat White", price: 780 },
    { name: "Cappucino", price: 790 },
    { name: "Latte", price: 1390 },
    { name: "Melange", price: 1390 },
    { name: "Chai Latte", price: 1290 },
    { name: "Hosszú kávé", price: 760 }
];
function calculateResults() {
    if (products.length < 1) {
        alert('Please add at least one product.');
        return;
    }
    var cheapestProduct = getCheapestProduct();
    var averagePrice = calculateAveragePrice();
    var priceVariation = calculatePriceVariation();
    var cheapestProductElement = document.getElementById('cheapestProduct');
    var averagePriceElement = document.getElementById('averagePrice');
    var priceVariationElement = document.getElementById('priceVariation');
    cheapestProductElement.textContent = "".concat(cheapestProduct.name, " (").concat(cheapestProduct.price, " Ft)");
    averagePriceElement.textContent = "".concat(averagePrice.toFixed(2), " Ft");
    priceVariationElement.textContent = "".concat(priceVariation.toFixed(2), " Ft");
}
function getCheapestProduct() {
    return products.reduce(function (prev, current) { return (prev.price < current.price ? prev : current); });
}
function calculateAveragePrice() {
    var total = products.reduce(function (sum, product) { return sum + product.price; }, 0);
    return total / products.length;
}
function calculatePriceVariation() {
    var average = calculateAveragePrice();
    var squaredDifferences = products.map(function (product) { return Math.pow(product.price - average, 2); });
    var totalSquaredDifferences = squaredDifferences.reduce(function (sum, value) { return sum + value; }, 0);
    var variance = totalSquaredDifferences / products.length;
    return Math.sqrt(variance);
}
