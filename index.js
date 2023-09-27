function displayName(fruit1,fruit2) {
    const juice = `juice with ${fruit1} and ${fruit2} `
      return juice 
}

console.log(displayName('banana', 'apple'))


const describeCountry = function (country,population,capitalCity,) {
       const message = `${country} has ${population} people and its capital city is ${capitalCity}`
       return message
}

const var1 = describeCountry('Finland', 6_000_000 , "Helsinki" )
const var2 = describeCountry('France',8_000_000, 'Paris')
const var3 = describeCountry('Espagne',10_000_000,'Madrid')

console.log(var1)
console.log(var2)
console.log(var3)

// déclaration de function  // 

function percentageOfWorld1 (population) {
   return population / 7900 * 100
}
 const frenchPop = percentageOfWorld1(68)
 const EnglandPop = percentageOfWorld1(58)
 const DeutchPop = percentageOfWorld1(88)

 console.log(frenchPop)
 console.log(EnglandPop)
 console.log(DeutchPop)

 console.log(`France has 68 million people, so it's about ${frenchPop} of the world population`)
 console.log(`England has 58 million people, so it's about ${EnglandPop} of the world population`)
 console.log(`Germany has 88 million people, so it's about ${DeutchPop} of the world population`)

 // Expression de function   // 
 const percentageOfWorld2 =  (population) => {
    return (population / 7900) * 100
 }

 const frenchPop1 = percentageOfWorld2(68)
 const EnglandPop1 = percentageOfWorld2(58)
 const DeutchPop1 = percentageOfWorld2(88)

 console.log(frenchPop1)
 console.log(EnglandPop1)
 console.log(DeutchPop1)

// Function Fléché //
const percentageOfWorld3 = population => (population / 7900) * 100
const marroco = percentageOfWorld3(99)
console.log(marroco)

 







