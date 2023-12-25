function setUserName(username){
    // complex DB calls
    this.username = username
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}
const data = new createUser('Janan','janan@fb.com','0900')
console.log(data);