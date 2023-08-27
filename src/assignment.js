// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {} 
// ========================

/**
 * Challenge - 1

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
      array;
    }
    const sum = sumOfNumbersTo(array)


 assignment.sumOfNumbersTo = sumOfNumbersTo;

/**
 * Challenge - 2

 */
    function countEvenNumbers(arr) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
          count++
        }
      }
      return count;
    }

    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenCount = countEvenNumbers(numberArray);
    console.log(evenCount)

        // property value shorthand
        // when the property name and the value name are the same
        // you can just write the property name in your object
        count,
        sum,
        arrayOfEvenNumbers

 assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3

 */
function celsiusToFahrenheit(celsiusTemps) {
    const fahrenheitTemps = celsiusTemps.map(tempC =>Math.round(tempC * 9/5 +32));
    return fahrenheitTemps;
}
const celsiusTemperatures = [1,2,3,4,5,6,7,8,9,10];
const fahrenheitTemperatures = celsiusToFahrenheit(celsiusTemperatures)
console.log(fahrenheitTemperatures);


 assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
