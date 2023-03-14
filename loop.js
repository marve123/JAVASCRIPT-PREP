// ForEach Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitItem => {
  console.log(`I want to eat a ${fruitItem}`)
})



// Map Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal =>{
 return animal.charAt(0);
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNum => {
  return bigNum / 100;
})



// Filter Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumber = randomNumbers.filter(ranNum => {
return ranNum < 250;
})
console.log(randomNumbers)
console.log(smallNumber)
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favWord => {
  return favWord.length > 7;
})
console.log(favoriteWords)
console.log(longFavoriteWords)



// findIndex Method
const myAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


// Found index os animal that is elephant
const foundAnimal = myAnimals.findIndex(animal => {
  return animal === 'elephant';
})
console.log(foundAnimal)

// Found index of first animal that starts with s
const startsWithS = myAnimals.findIndex(animal => {
  return animal[0] === 's';
})
console.log(startsWithS)




// Reduce Method 
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue)
return accumulator + currentValue;
}, 10)

console.log(newSum);
