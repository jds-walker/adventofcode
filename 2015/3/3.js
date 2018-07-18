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
		const reduce = move.reduce((acc,arr) => {
			acc = [acc[0]+arr[0],acc[1]+arr[1],acc[2]+arr[2]]
			coordinates.push(acc)
			return acc
		},[0,0,0]) 
		const map = coordinates.map(arr => {
				
				return arr
			})
			console.log(map)
			}
		)
	

}



question1();