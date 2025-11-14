/* Object */

//var o = {} // literal object
var o = new Object()

/* Array */

//var a = [] // literal array
var a = new Array()

//var a1 = [10, 20, 30]
var a1 = new Array(10, 20, 30)

/* Person */

var Person = function(name, dateOfBirth) {
    this.name = name
    this.dateOfBirth = dateOfBirth
}

var peter = new Person('Peter Pan', '1990-01-01')
var wendy = new Person('Wendy Darling', '1991-02-02')

/* Product */

var Product = function(brand, model, sku, variant) {
    this.brand = brand
    this.model = model
    this.sku = sku
    this.variant = variant
}

var nikeAirMaxBlack = new Product('Nike', 'Air Max', 'nike-airmax-black', 'Black')
var nikeAirMaxWhite = new Product('Nike', 'Air Max', 'nike-airmax-white', 'White')
var pumaFerrariRed = new Product('Puma', 'Ferrari', 'puma-ferrari-red', 'Red')
var pumaFerrariYellow = new Product('Puma', 'Ferrari', 'puma-ferrari-yellow', 'Yellow')
var vansOlsSchoolBlack = new Product('Vans', 'Old School', 'vans-oldschool-black', 'Black')

/*
var products = []
products[0] = nikeAirMaxBlack
products[1] = nikeAirMaxWhite
products[2] = pumaFerrariRed
products[3] = pumaFerrariYellow
products[4] = vansOlsSchoolBlack
*/
//var products = [nikeAirMaxBlack, nikeAirMaxWhite, pumaFerrariRed, pumaFerrariYellow, vansOlsSchoolBlack]
var products = new Array(nikeAirMaxBlack, nikeAirMaxWhite, pumaFerrariRed, pumaFerrariYellow, vansOlsSchoolBlack)

console.clear()

for (var i = 0; i < products.length; i++) {
    // console.log(products[i].brand + ' ' + products[i].model + ' ' + products[i].variant + ' (' + products[i].sku + ')')

    var product = products[i]
    var line = product.brand + ' ' + product.model + ' ' + product.variant + ' (' + product.sku + ')'
    console.log(line)
}