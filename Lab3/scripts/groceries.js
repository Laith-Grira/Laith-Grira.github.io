	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Beef",
		containLactose: false,
		containNuts: false,
		price: 7.99,
		organic: true
	},
	{
		name: "Lobster",
		containLactose: false,
		containNuts: false,
		price: 12.25,
		organic: true
	},
	{
		name: "Lamb",
		containLactose: false,
		containNuts: false,
		price: 13.99,
		organic: true
	},
	{
		name: "Onions",
		containLactose: false,
		containNuts: false,
		price: 4.50,
		organic: false
	},
	{
		name: "Milk",
		containLactose: true,
		containNuts: false,
		price: 4.89,
		organic: false
	},
	{
		name: "Chocolate",
		containLactose: true,
		containNuts: false,
		price: 3.99,
		organic: false
	},
	{
		name: "Rice",
		containLactose: true,
		containNuts: false,
		price: 10.99,
		organic: true
	},
	{
		name: "Cheese",
		containLactose: true,
		containNuts: false,
		price: 6.00,
		organic: false
	},
	{
		name: "Bread",
		containLactose: true,
		containNuts: false,
		price: 1.99,
		organic: true
	},
	{
		name: "Peanut butter",
		containLactose: false,
		containNuts: true,
		price: 8.35,
		organic: true
	},
	{
		name: "Peanuts",
		containLactose: false,
		containNuts: true,
		price: 3.00,
		organic: true
	},
	{
		name: "Honey",
		containLactose: false,
		containNuts: true,
		price: 27.50,
		organic: false
	},
	{
		name: "Hot Sauce",
		containLactose: false,
		containNuts: true,
		price: 9.35,
		organic: true
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_names = new Map();
	for (let i=0; i<prods.length; i+=1) {
		if ((organic == true) && (prods[i].organic == true)) {
			if ((restriction == "Both Restrictions") && !prods[i].containLactose && !prods[i].containNuts) {
				product_names.set(prods[i].name, prods[i].price);
			}
			else if ((restriction == "Lactose Free") && !prods[i].containLactose){
				product_names.set(prods[i].name, prods[i].price);
			}
			else if ((restriction == "Nuts Free") && !prods[i].containNuts){
				product_names.set(prods[i].name, prods[i].price);
			}
			else if (restriction == "No Restrictions"){
				product_names.set(prods[i].name, prods[i].price);
			}
		} else if((organic == false) && (prods[i].organic == false)){
			if ((restriction == "Both Restrictions") && !prods[i].containLactose && !prods[i].containNuts) {
				product_names.set(prods[i].name, prods[i].price);
			}
			else if ((restriction == "Lactose Free") && !prods[i].containLactose){
				product_names.set(prods[i].name, prods[i].price);
			}
			else if ((restriction == "Nuts Free") && !prods[i].containNuts){
				product_names.set(prods[i].name, prods[i].price);
			}
			else if (restriction == "No Restrictions"){
				product_names.set(prods[i].name, prods[i].price);
			}
		} else if((organic == null)){
			if ((restriction == "Both Restrictions") && !prods[i].containLactose && !prods[i].containNuts) {
				product_names.set(prods[i].name, prods[i].price);
			}
			else if ((restriction == "Lactose Free") && !prods[i].containLactose){
				product_names.set(prods[i].name, prods[i].price);
			}
			else if ((restriction == "Nuts Free") && !prods[i].containNuts){
				product_names.set(prods[i].name, prods[i].price);
			}
			else if (restriction == "No Restrictions"){
				product_names.set(prods[i].name, prods[i].price);
			}
		}
	}

	product_names[Symbol.iterator] = function* () {
		yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
	}

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
