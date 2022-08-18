function count(input) {
    object = {};
    for ( let i of input ){  // for...of loop creates a loop iterating over iterable objects, including: Array 
        if ( !object[i] ){   // if character wasn't counted before, set it's count to 1
            object[i] = 1;
        } else {
            object[i]++;
        }
    }
    return object;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}



function groupByKey(input) {
    object = {};
    for ( let i of input ){
        if ( !object[i.key] ){
            object[i.key] = i.value;
        } else {
            object[i.key]+= i.value;
        }
    }
    return object;
}


let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];


console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}