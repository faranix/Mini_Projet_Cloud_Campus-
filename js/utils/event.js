export function inscription(fakeDb) {
    const form = document.querySelector("#form-inscription");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#form-inscription-email").value;
        const password = document.querySelector("#form-inscription-password").value;
        const nom = document.querySelector("#form-inscription-nom").value;
        const prenom = document.querySelector("#form-inscription-prenom").value;
        const age = document.querySelector("#form-inscription-age").value;
        const adresse = document.querySelector("#form-inscription-adresse").value;
        const phone = document.querySelector("#form-inscription-phone").value;

        fakeDb.add(email, password, nom, prenom, age, adresse, phone);
    })
}

export function connexion() {
    const form = document.querySelector("#form-connexion");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = document.querySelector("#form-connexion-message");
        const email = document.querySelector("#form-connexion-email").value;
        const password = document.querySelector("#form-connexion-password").value;

        const storage = JSON.parse(localStorage.getItem("db"));
        const date = new Date();
        let time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;


        const find = storage.find(element => element.email === email);

        if (find) {
            if (find.password === password) {
                localStorage.setItem("actifSession", JSON.stringify(find));

                let indexInDb = storage.findIndex(el => el.id == find.id);

                storage[indexInDb].lastCo = time

                localStorage.setItem("db", JSON.stringify(storage));
                window.location.replace("/index.html");
            } else {
                message.textContent = "Mot de passe incorrect.";
                throw "Mot de passe incorrect.";
            }
        } else {
            message.textContent = "Utilisateur introuvable.";
            throw "Utilisateur introuvable.";
        }
    })

}

export function userModifer(fakeDb) {
    const form = document.querySelector("#form-home");

    const actifSession = JSON.parse(localStorage.getItem("actifSession"));
    const db = JSON.parse(localStorage.getItem("db"));

    let email = document.querySelector("#form-home-email");
    let password = document.querySelector("#form-home-password"); 
    let nom = document.querySelector("#form-home-nom");
    let prenom = document.querySelector("#form-home-prenom");
    let age = document.querySelector("#form-home-age");
    let adresse = document.querySelector("#form-home-adresse") ;
    let phone = document.querySelector("#form-home-phone");

    email.value = actifSession.email;
    password.value = actifSession.password; 
    nom.value = actifSession.nom;
    prenom.value = actifSession.prenom;
    age.value = actifSession.age;
    adresse.value = actifSession.adresse;
    phone.value = actifSession.phone;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const finalUser = {
            id: actifSession.id,
            email: email.value,
            password: password.value,
            nom: nom.value ,
            prenom: prenom.value,
            age: age.value,
            adresse: adresse.value,
            phone: phone.value,
            lastCo: actifSession.lastCo,
            grade: actifSession.grade
        }
        
        db.forEach((element, index) => {
            if (actifSession.id === element.id) {
                console.log(age.value);
                
                db.splice(index, 1);

                localStorage.setItem("actifSession", JSON.stringify(finalUser));
                fakeDb.update(actifSession.id, email.value, password.value, nom.value, prenom.value, age.value, adresse.value, phone.value, db);
            }
        });
    })
}