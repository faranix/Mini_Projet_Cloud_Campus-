import FakeDb from "./utils/fakeDb.js";
import { connexion, inscription } from "./utils/event.js";

const jsonDb = [{
    id: 1,
    email: "admin@gmail.com",
    password: "admin",
    nom: "admin",
    prenom: "admin",
    age: 22,
    phone: "",
    adresse: "",
    grade: "admin",
    lastCo: "",
}];

const fakeDb = new FakeDb(jsonDb);

fakeDb.init();


switch (window.location.href) {
    case "http://127.0.0.1:5500/pages/inscription.html":
        try {
            inscription(fakeDb);
        } catch (error) {
            console.log(error);
        }
        break;
    case "http://127.0.0.1:5500/pages/connexion.html":
        connexion(fakeDb);
        break;
}
