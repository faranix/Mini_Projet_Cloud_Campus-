class FakeDb {
    constructor(jsonDb) {
        this.fakeDbJson = jsonDb;
        this.count = 1;
    }

    add(email, password, nom, prenom, age, adresse, phone) {
        const arrayFinal = JSON.parse(localStorage.getItem("db"));
        this.count++;

        const finalUser = {
            id: this.count,
            email,
            password,
            nom,
            prenom,
            age,
            adresse,
            phone,
            lastCo: undefined
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