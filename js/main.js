import FakeDb from "./utils/fakeDb.js";
import { inscription } from "./utils/event.js";

const jsonDb = {
    email: "admin@gmail.com",
    password: "admin",
};

const fakeDb = new FakeDb(jsonDb);

fakeDb.init();


switch (window.location.href) {
    case "http://127.0.0.1:5500/pages/inscription.html":
        inscription(fakeDb);
        break;
}
