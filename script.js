function makeid(l) {
  // write your code here
	const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	let ans = ''

	for(let i=0; i<str.length; i++){
		ans = ans + str.charAt(Math.floor(Math.random()*str.length))
	}

	return ans
	
}

// Do not change the code below.
// const l = prompt("Enter a number.");
alert(makeid(l));
