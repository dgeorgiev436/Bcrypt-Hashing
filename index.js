const bcrypt = require("bcrypt")
const password = "$2b$12$8cRG1U.sD0lqEy9SfRBPcez2KRvcYlVgJdrFuoj4bfAm65qQJDi26"

// // Password hashing function with storing the salt saparately
// const hashPassword = async(pw) => {
// // 	generating the bcrypt salt + adding 10 rounds for delay
// 	const salt = await bcrypt.genSalt(12);
// // 	Using bcrypt .hash function which takes the password and the salt
// 	const hash = await bcrypt.hash(pw, salt);
// 	console.log(salt);
// 	console.log(hash);
// }

// Password hashing function without storing the salt
const hashPassword = async(pw) => {
// 	Using bcrypt .hash function which takes the password and the salt rounds
	const hash = await bcrypt.hash(pw, 12);
	console.log(hash);
}

// Bcrypt compare function which takes the password and the hashed password as an arguments
const login = async(pw, hashedPw) => {
	const result = await bcrypt.compare(pw, hashedPw);
	if(result){
		console.log("SUCCESFULLY LOGGED IN")
	}else{
		console.log("WRONG PASSWORD")
	}
}

// hashPassword("password");
login("password", "$2b$12$1zWaz6Q3oqOXduG88cqQHOfENz7SQ.jVPQmifAasOFJmpnua298Ae")