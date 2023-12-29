class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Janan`
        // return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}
const data = new User("Janan@jk.com", "0900")
console.log(data._email); 