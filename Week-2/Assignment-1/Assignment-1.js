function max(numbers) {
    let max = numbers[0];
    for ( let i = 0; i < numbers.length; i++ ){
        if ( numbers[i] > max ){
            max = numbers[i];
        }
    }
    return max;
}



function findPosition(numbers, target) {
    if ( numbers.includes(target) ){                 // CHECK : The includes() method returns "true" if an array contains a specified value.
        for ( let i = 0; i < numbers.length; i++ ){
            if ( numbers[i] === target ){
                position = i;
                return position;  // will return the first position, then stop the loop
            }
        }
    } else {
        return -1; // if not find the target, return -1
    }
}




console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1