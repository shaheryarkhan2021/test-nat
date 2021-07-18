
/**
 * ALGORITHMS
 * 
 * Implement an algorithm that can pass the unit tests. 
 * Avoid using built-in functions as much as possible
 * 
 * Difficulty: Medium
 */

function sort (arr) {
    let newArray = [];
    // ONLY CHANGE CODE BELOW
        
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){  
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    newArray = arr
    // ONLY CHANGE CODE ABOVE
    return newArray;
}

function require (condition) {
    if (!condition)
        console.warn ("CONDITION WAS NOT MET");
}

require (sort ([]) == []);
require (sort ([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5]);
require (sort ([1, 3, 4, 2, 5]) == [1, 2, 3, 4, 5]);
