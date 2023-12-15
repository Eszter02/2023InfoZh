class Product {
    name: string;
    price: number;
  }
  
  const products: Product[] = [
    {name:"Espresso", price:590},
    {name:"Flat White", price:780},
    {name:"Cappucino", price:790},
    {name:"Latte", price:1390},
    {name:"Melange", price:1390},
    {name:"Chai Latte", price:1290},
    {name:"Hosszú kávé", price:760}
  ];

  function calculateResults() {
    if (products.length < 1) {
      alert('Please add at least one product.');
      return;
    }
  
    const cheapestProduct = getCheapestProduct();
    const averagePrice = calculateAveragePrice();
    const priceVariation = calculatePriceVariation();
  
    const cheapestProductElement = document.getElementById('cheapestProduct') as HTMLParagraphElement;
    const averagePriceElement = document.getElementById('averagePrice') as HTMLParagraphElement;
    const priceVariationElement = document.getElementById('priceVariation') as HTMLParagraphElement;
  
    cheapestProductElement.textContent = `${cheapestProduct.name} (${cheapestProduct.price} Ft)`;
    averagePriceElement.textContent = `${averagePrice.toFixed(2)} Ft`;
    priceVariationElement.textContent = `${priceVariation.toFixed(2)} Ft`;
  }
  
  function getCheapestProduct(): Product {
    return products.reduce((prev, current) => (prev.price < current.price ? prev : current));
  }
  
  function calculateAveragePrice(): number {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    return total / products.length;
  }
  
  function calculatePriceVariation(): number {
    const average = calculateAveragePrice();
    const squaredDifferences = products.map(product => Math.pow(product.price - average, 2));
    const totalSquaredDifferences = squaredDifferences.reduce((sum, value) => sum + value, 0);
    const variance = totalSquaredDifferences / products.length;
    return Math.sqrt(variance);
  }
  