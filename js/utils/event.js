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
        const email = document.querySelector("#form-connexion-email").value;
        const password = document.querySelector("#form-connexion-password").value;

        const storage = JSON.parse(localStorage.getItem("db"));


        storage.forEach(element => {
            if (element.email === email) {
                console.log(element);
            } else {
                throw "Utilisateur introuvable.";
            }
        });
        
    
    })

}