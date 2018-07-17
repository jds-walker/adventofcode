const fs = require('fs');

// we are required to find the number of square feed of paper required by the elves. 
// based on a h x w x l a parcel needs (2*h*w + 2*h*l + 2*l*w) + min (h*w,h*l,L*h)



function question1() {
	fs.readFile('./2015/2/input.txt', (err, data) => {
		input = data.toString();
		array = input.split(/\r?\n/);
		const dimensions = array.map((arr) => {
			let dims = arr.split('x');
			let a = dims[0]*dims[1]; 
			let b = dims[1]*dims[2]; 
			let c = dims[2]*dims[0]; 
			return 2*a + 2*b + 2*c + Math.min(a,b,c);
		} )
		const answer = dimensions.reduce((acc,cur) => {
			return acc = acc + cur;
		},0)
		console.log('Answer 1', answer);
		}
	)
}



question1();

function question2() {
	fs.readFile('./2015/2/input.txt', (err, data) => {
		input = data.toString();
		array = input.split(/\r?\n/);
		const dimensions = array.map((arr) => {
			let dims = arr.split('x').map(Number);
			let sorted = dims.sort(function(a, b){return a-b})
			return dims[0]*2+dims[1]*2+dims[0]*dims[1]*dims[2]
		} )
		const answer = dimensions.reduce((acc,cur) => {
			return acc = acc + cur;
		},0)
		console.log('Answer 2', answer);
		}
	)
}

question2() 