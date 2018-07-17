// 1 - What floor does Santa end up on?
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

const fs = require('fs');


/*function question1() {
	fs.readFile('./input.txt', (err, data) => {
		if (err) {
			'erroooorrraw';
		}
		const directions = data.toString();
		const directionsArray = directions.split('');
		console.log(directionsArray[0]);
		const answer = directionsArray.reduce((acc, currentValue) => {
				if (currentValue === '(') { 
					acc = acc + 1 
			} else {
				    acc = acc - 1
			}
			
			return acc
			}
			,0
		)
		console.log(answer)
		}
	)
}

question1();*/

// question 2
var ans = [];

function question2() {
	fs.readFile('./input.txt', (err, data) => {
		const sting = data.toString();
		const arr = sting.split('');
		var count = 0;
		for (var i = 0; i < arr.length; i++) {
				arr[i] === '(' 
				? count++
				: count--;
				if (count === -1) {
				console.log(i+1)}; 
			}
			console.log(count);
		}
	)
}

question2()


	// 	console.log('He should go to floor', count, '!!!');	
	// }
	// ); 
