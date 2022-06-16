import { connexion, inscription, userModifer } from "./utils/event.js";
import { checkValideConnexion, addButtonDisconned } from "./utils/utils.js";
import FakeDb from "./class/FakeDb.js";
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


switch (window.location.pathname) {
    case "/index.html":
        checkValideConnexion();
        admin.addPanelAdminAccueil();
        userModifer(fakeDb);
        addButtonDisconned();
        break;
    case "/pages/inscription.html":
        addButtonDisconned();

        try {
            inscription(fakeDb);
        } catch (error) {
            console.log(error);
        }
        break;
    case "/pages/connexion.html":
        try {
            connexion(fakeDb);
        } catch (error) {
            console.log(error);
        }
        break;
    case "/pages/admin.html":
        checkValideConnexion();
        admin.checkIsAdmin();
        admin.view();
        admin.update();
        admin.delete();
        addButtonDisconned();
        break;
    default:
        window.location.replace("/index.html");
        break;
}
