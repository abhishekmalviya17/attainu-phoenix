function generateSequence(n){
	let length = 1;

	while(n > 1){
		if(n % 2 === 0){
			n /= 2;
		}else {
			n = (3 * n) + 1;
		}
		length++;
	}
	return length;
}

function main(){
	let largestSequence = -1,
		startingNumber = 2;
		for(let i = 2; i <= 10000000 ; i++){
			let result = generateSequence(i);
			if(result > largestSequence){
				largestSequence = result;
				startingNumber = i;
			}
		}
		console.log(`${startingNumber} produces the largest sequence of ${largestSequence}`);
}

main();