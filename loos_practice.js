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