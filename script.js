function makeid(l) {
  // write your code here
	const length = parseInt(l, 10);
	const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	let ans = ''

	for(let i=0; i<length; i++){
		ans = ans + str.charAt(Math.floor(Math.random()*str.length))
	}

	return ans
	
}

// Do not change the code below.
// const l = prompt("Enter a number.");
alert(makeid(l));
