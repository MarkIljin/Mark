var order = { 
  id: 2113, 
  orderNumber: "E210126001", 
  createdAt: "2021-01-26 16:04:24", 
  clientName: "Kalle Tali", 
  deliveryType: "Omniva smartpost", 
  deliveryValue: 178, 
  rows: [ 
    { 
      article_id: 31, 
      name: "Coffee Machine De'Longhi Dolce Gusto Piccolo EDG100.W", 
      product_code: "257549", 
      price: 49.17, 
      amount: 1, 
      vat: 0.2 
    }, 
    { 
      article_id: 23420, 
      name: "Coffee Capsules Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 pcs", 
      product_code: "355836", 
      price: 5.07, 
      amount: 2, 
      vat: 0.2 
    }, 
    { 
      article_id: 23421, 
      name: "Coffee Capsules Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 pcs", 
      product_code: "000000000501267301", 
      price: 5.83, 
      amount: 1, 
      vat: 0.2 
    } 
  ] 
};

function calculateTotal(item) {
  return (item.price * item.amount * (1 + item.vat)).toFixed(2);
}

order.rows.forEach(item => {
  console.log(`
    Name: ${item.name}
    Quantity: ${item.amount}
    Price: $${item.price.toFixed(2)}
    Total: $${calculateTotal(item)}
  `);
});

var totalOrderAmount = order.rows.reduce((acc, item) => acc + parseFloat(calculateTotal(item)), 0);

console.log(`Total order amount: $${totalOrderAmount.toFixed(2)}`);
