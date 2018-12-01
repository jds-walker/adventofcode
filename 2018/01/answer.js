//q1 what frequent do we arrive at?
const frequencies = new Set([0]);

const fs = require('fs');

function question1() {
	fs.readFile('./input.txt', (err, data) => {
        const changes = data
        .toString().split("\n")
        .map((x) => parseInt(x));


        let frequency = 0;
        let i = 0;

        while (true) {
            if (changes.length === i) {
                i = 0;
                continue
            }
            
            frequency += changes[i];

        if (frequencies.has(frequency)) {
            break
        }

        frequencies.add(frequency)

        i++
}
    console.log(frequency)
    return frequency;
})}

question1()