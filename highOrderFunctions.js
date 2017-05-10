// Functions as arguments (1)

function repeat(fn, n) {
	for(i=0; i<n; i++) {
		fn();
	}
}

function hello() {
	console.log('hello world');
}

function goodbye() {
	console.log('goodbye world');
} 

repeat(hello, 5);
repeat(goodbye, 5);

// Functions as arguments (2)

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	var newArray = [];
	//fn();
	for(let i = 0; i < arr.length; i++){
		// console.log(arr[i]);
		if (fn(arr[i])) {
			//console.log(arr[i]);
		newArray.push(arr[i]);
		}
	}
	return newArray;

}

function startWithR(str){
	if(str[0] === "R"){
		return true;
	}
	else{ return false}
}

filter(['Rich', 'Joe', 'Bhaumik', 'Ray'], startWithR);
// => (2) ["Rich", "Ray"]

// Bonus credit
filter(['Rich', 'Joe', 'Bhaumik', 'Ray'], function(name) {
	return name[0] === 'R';
});

//functions as return values

function hazardWarningCreator(typeOfWarning){
	let warningCounter = 0;
	return function(location){
		warningCounter++;
		console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

		}
		
	}


		const rocksWarning = hazardWarningCreator('Rocks on the Road');
		const buffaloWarning = hazardWarningCreator('Buffalo on the Road');
		const waterWarning = hazardWarningCreator('Water on the Road');
rocksWarning('Denver, C0');


//forEach, filter and map

let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtleMoves.filter(function(move, i){
	if(move[0] > 0 && move[1]>0){		//  So either (move[0] > 0 && move[1]>0)
		return move;	// 	move.forEach
	}
})

turtleMoves.map(function(move){
	
})