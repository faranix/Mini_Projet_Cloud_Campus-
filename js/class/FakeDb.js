class FakeDb {
    constructor(jsonDb) {
        this.fakeDbJson = jsonDb;
    }

    add(email, password, nom, prenom, age, adresse, phone) {
        const arrayFinal = JSON.parse(localStorage.getItem("db"));
        const message = document.querySelector("#form-inscription-message");
        let count;
        
        arrayFinal.forEach(element => {
            count = element.id;
            if (email === element.email) {
                message.textContent = "Email déja utilisé.";
                throw "Email déja utilisé";
            }
        });

        count++;
        
        const finalUser = {
            id: count,
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

    update(id, email, password, nom, prenom, age, adresse, phone, arrayFinal) {
        const message = document.querySelector("#form-home-message");
        
        arrayFinal.forEach(element => {
            if (email === element.email) {
                message.textContent = "Email déja utilisé.";
                throw "Email déja utilisé";
            }
        });
        
        const finalUser = {
            id: id,
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

        message.textContent = "Modifé !";
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