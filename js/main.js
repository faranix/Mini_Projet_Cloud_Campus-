import FakeDb from "./utils/fakeDb.js";
import { connexion, inscription } from "./utils/event.js";
import { checkValideConnexion, addButtonDisconned } from "./utils/utils.js";
import Admin from "./class/Admin.js";

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
const admin = new Admin();


fakeDb.init();


switch (window.location.href) {
    case "http://localhost:5500/index.html":
        checkValideConnexion();
        admin.addPanelAdminAccueil();
        addButtonDisconned();
        break;
    case "http://localhost:5500/pages/inscription.html":
        addButtonDisconned();

        try {
            inscription(fakeDb);
        } catch (error) {
            console.log(error);
        }
        break;
    case "http://localhost:5500/pages/connexion.html":
        try {
            connexion(fakeDb);
        } catch (error) {
            console.log(error);
        }
        break;
    case "http://localhost:5500/pages/admin.html":
        checkValideConnexion();
        admin.checkIsAdmin();
        admin.view();
        addButtonDisconned();
        break;
}
