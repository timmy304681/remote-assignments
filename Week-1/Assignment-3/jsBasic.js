/* Function */
function countAandB(input) {
	let countA= 0;
	let countB= 0;
	for (let i = 0; i < input.length ; i++){
  	    if (! input[i].match(/^(a|b|c|d|e)$/)){  //check input using Regular Expressions
    	    return "Error: Only get ‘a’, ‘b’, ‘c’, ‘d’, or ‘e’ in the input array";
   	    }else if (input[i] =="a"){
   		    countA += 1;
   	    }else if (input[i] =="b") {
   		    countB += 1;
        }
	}
	return countA+countB;
}


function toNumber(input) {
    let out=[];
    for (let i = 0; i < input.length ; i++) {
        if (! input[i].match(/^(a|b|c|d|e)$/)){  //check input, using Regular Expressions
            return "Error: Only get ‘a’, ‘b’, ‘c’, ‘d’, or ‘e’ in the input array";
        }else{
            let num= input[i].charCodeAt() - 96;
            out.push(num);
        }
    }
    return out;
}



/*  Test  */

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];


console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];

console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]