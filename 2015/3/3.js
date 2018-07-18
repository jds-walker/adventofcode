const fs = require('fs');

// we are required to work out how many houses receive at least once present
// santa moves houses with <^v>


function movement(direction) {
		if (direction === '^') {
				return [0,1,0]
			} else if (direction === 'v') {
				return [0,-1,0];
			}
			else if (direction === '>') {
				return [1,0,0];
			}
			else if (direction === '<') {
				return [-1,0,0];
			} 
			else {
				return [0,0,1];
			} 
}

function question1() {
	fs.readFile('./2015/3/3.txt', (err, data) => {
		input = data.toString();
		split = input.split('');
		const move = split.map(movement);
		let coordinates = []
		move.reduce(function(a,b,i) { return coordinates[i] = a+b; },0)
		})
	console.log(coordinates)
}



question1();