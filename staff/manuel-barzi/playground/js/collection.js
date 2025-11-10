var collection = {
    count: 0
}

// TODO implement add method

collection.add = function(item) {
    this[this.count] = item
    this.count++
}

collection.add('Peter')
console.log(collection)
// { 0: 'Peter', count: 1 }

collection.add('Wendy')
console.log(collection)
// { 0: 'Peter', 1: 'Wendy', count: 2 }

collection.add('James')
console.log(collection)
// { 0: 'Peter', 1: 'Wendy', 2: 'James', count: 3 }

// TODO implement remove method

collection.remove('Wendy')
console.log(collection)
// { 0: 'Peter', 2: 'James', count: 3 }
