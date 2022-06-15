class FakeDb {
    constructor(jsonDb) {
        this.fakeDbJson = jsonDb;
        this.count = 1;
    }

    add(email, password, nom, prenom, age, adresse, phone) {
        const arrayFinal = JSON.parse(localStorage.getItem("db"));
        const message = document.querySelector("#form-inscription-message");
        this.count++;

        arrayFinal.forEach(element => {
            if (email === element.email) {
                message.textContent = "Email déja utilisé.";
                throw "Email déja utilisé";
            }
        });

        const finalUser = {
            id: this.count,
            email,
            password,
            nom,
            prenom,
            age,
            adresse,
            phone,
            lastCo: "",
            grade: "user"
        }

        arrayFinal.push(finalUser);

        localStorage.setItem("db", JSON.stringify(arrayFinal));

        window.location.replace("connexion.html");
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