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