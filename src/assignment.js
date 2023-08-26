// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1


 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */

    function sumOfNumbersTo(arr) {
      let sum = 0
      for(let i = 0; i < arr.length; i++ ){
        sum +=arr[i]
      }
      return sum;
    }

    const  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i = 0; i < 10; i++){
      randomArray;
    }
    const sum = sumOfNumbersTo(array)


// assignment.sumOfNumbersTo = sumOfNumbersTo;

/**
 * Challenge - 2


 * @param {Number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
    function countEvenNumbersWithin(arr) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
          count++
        }
      }
      return count;
    }

    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenCount = countEvenNumbersWithin(numberArray);
    console.log(evenCount)

        // property value shorthand
        // when the property name and the value name are the same
        // you can just write the property name in your object
        count,
        sum,
        arrayOfEvenNumbers

// assignment.countEvenNumbersWithin = countEvenNumbersWithin;

/**
 * Challenge - 3
 *

 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(celsiusTemps) {
    const fahrenheitTemps = celsiusTemps.map(tempC =>Math.round(tempC * 9/5 +32));
    return fahrenheitTemps;
}
const celsiusTemperatures = [25,15,30,10];
const fahrenheitTemperatures = celsiusToFahrenheit(celsiusTemperatures)
console.log(fahrenheitTemperatures);


// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
