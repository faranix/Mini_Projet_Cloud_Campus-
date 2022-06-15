class FakeDb {
    constructor(jsonDb) {
        this.fakeDbJson = jsonDb
    }

    add(email, pass) {
        const arrayFinal = [JSON.parse(localStorage.getItem("db"))];

        const finalUser = {
            email,
            pass,
        }

        arrayFinal.push(finalUser);

        localStorage.setItem("db", JSON.stringify(arrayFinal));
    }
    
    delete() {
        localStorage.setItem("db", JSON.stringify(this.fakeDbJson));
    }
    
    init() {
        if (localStorage.getItem("db") === null) {
            localStorage.setItem("db", JSON.stringify(this.fakeDbJson));
        }

    }
}

export default FakeDb;