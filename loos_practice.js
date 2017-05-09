 //max and min drill, using while loops

   		function max(numbers) {
			var currentMax = numbers[0];
      var i=0;
			while( i <= numbers.length) {
				if (numbers[i] > currentMax) {
					currentMax = numbers[i];
				}
         i++;
			}
			return currentMax;
		}


    function min(numbers) {
    	var currentMin = max(numbers);
      var i = 0;
      
      while (i < numbers.length) {
      	if (numbers[i] < currentMin) {
        currentMin = numbers[i];
        }
      	i++;
      }


//compute the avg drill using while loops

function average(numbers) {
  var total = numbers[0];
  var i = 1;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  return total / numbers.length;
}
average([4, 6, 8, 10, 12, ]);

function average(numbers) {
  var total = numbers[0];
  var i = 1;

  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  let avg = total / numbers.length;
  return avg;
}
average([4, 6, 8, 10, 12])


//fizzBuzz switch/ multi case(s)

function fizzBuzz(countTo) {
  for (let num = 1; num <= countTo; num++) {
    switch (num % 15) {

      case 3:
      case 6:
      case 9:
      case 12:
        console.log('fizz');
        break;

      case 5:
      case 10:
        console.log('buzz');
        break;

      case 0:
        console.log('fizzbuzz');
        break;

      default:
        console.log(num);
    }

  }
}
fizzBuzz(15);
