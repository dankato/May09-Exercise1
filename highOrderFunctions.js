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
function filter() {}


