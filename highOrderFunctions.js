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









