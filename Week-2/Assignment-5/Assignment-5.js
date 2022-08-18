function binarySearchPosition(numbers, target) {
    let left = 0;  // left index
    let right = numbers.length -1 ; // right index = array length -1
    while ( left <= right ) {
        let mid = parseInt((left + right) / 2);  // middle index, and it must be int
        if ( numbers[mid] > target ) {
            right = mid - 1;
        } else if ( numbers[mid] < target ) {
            left = mid + 1; 
        } else {
            return mid; // find target index
        }
        }
    return -1;   // if not in the array, return -1
    }





console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
