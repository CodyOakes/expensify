// const person = {
//   name: 'Andy',
//   age: 27,
//   location: {
//     city: 'Phily',
//     temp: 92,
//   },
// }

// const { name = 'Guy', age, location } = person

// console.log(`${name} is ${age}.`)

// const { temp, city } = person.location
// if (temp && city) {
//   console.log(`it's ${temp} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// }

// const { name: publisherName = 'Self-Publish' } = book.publisher

// console.log(publisherName)

const item = ['Coffee (Cold)', '$2.00', '$2.50', '$2.77']

const [itemName, , mdPrice] = item
console.log(`A medium ${itemName} costs ${mdPrice}`)
