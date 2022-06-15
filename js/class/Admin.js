class Admin {
    view() {
        const panelAdmin = document.querySelector("#panel-admin");
        const listOfUser = JSON.parse(localStorage.getItem("db"));

        panelAdmin.innerHTML = "";

        listOfUser.forEach(user => {
            const container = document.createElement("div");
            container.innerHTML = `
                <form class="form-user" data-id="${user.id}">
                    <input type="text" class="form-user-control" id="form-user-nom" name="form-user-nom" value="${user.nom}" required>
                    <input type="text" class="form-user-control" id="form-user-prenom" name="form-user-prenom" value="${user.prenom}" required>
                    <input type="email" class="form-user-control" id="form-user-email" name="form-user-email" value="${user.email}" aria-describedby="emailHelp" required>
                    <input type="text" class="form-user-control" id="form-user-password" name="form-user-password"  value="${user.password}" required>
                    <input type="number" class="form-user-control" id="form-user-age" name="form-user-age"  value="${user.age}" required>
                    <input type="number" class="form-user-control" id="form-user-phone" name="form-user-phone"  value="${user.phone}" required>
                    <input type="text" class="form-user-control" id="form-user-adresse" name="form-user-adresse"  value="${user.adresse}" required>
                    <button type="submit" class="btn btn-primary">Modifier</button>
                    <button type="submit" data-id="${user.id}" id="delete" class="btn btn-primary">Supprimer</button>
                </form>
            `

            panelAdmin.appendChild(container);
        });
    }

    checkIsAdmin() {
        const actifSession = JSON.parse(localStorage.getItem("actifSession"));
        
        if (window.location.href === "http://localhost:5500/pages/admin.html") {
            if (actifSession.grade !== "admin") {
                alert("Vous êtes pas Admin !");
                window.location.href = "http://localhost:5500/index.html";
            }
        }
        
    }
    
    addPanelAdminAccueil() {
        const actifSession = JSON.parse(localStorage.getItem("actifSession"));
        
        if (actifSession.grade === "admin") {
            const menuCheck = document.querySelector(".menu-check");
    
            const linkPanelAdmin = document.createElement("li");
            linkPanelAdmin.innerHTML = `
                <a class="nav-link" href="./pages/admin.html">Admin Panel</a>
            `
            linkPanelAdmin.classList.add("nav-item");
            linkPanelAdmin.classList.add("admin-panel");
    
            menuCheck.appendChild(linkPanelAdmin);
        }
    }

    update() {
        const allForm = document.querySelectorAll(".form-user");
        let email = document.querySelectorAll("#form-user-email");
        let password = document.querySelectorAll("#form-user-password"); 
        let nom = document.querySelectorAll("#form-user-nom");
        let prenom = document.querySelectorAll("#form-user-prenom");
        let age = document.querySelectorAll("#form-user-age");
        let adresse = document.querySelectorAll("#form-user-adresse") ;
        let phone = document.querySelectorAll("#form-user-phone");

        allForm.forEach((form, index) => {
            const test = form.dataset.id;
            console.log(test);


            
            form.addEventListener("submit", (e) => {
                e.preventDefault();

                // const finalUser = {
                //     id: actifSession.id,
                //     email: email.value,
                //     password: password.value,
                //     nom: nom.value ,
                //     prenom: prenom.value,
                //     age: age.value,
                //     adresse: adresse.value,
                //     phone: phone.value,
                //     lastCo: actifSession.lastCo,
                //     grade: actifSession.grade
                // }

                // db.forEach((element, index) => {
                //     if (actifSession.id === element.id) {
                //         console.log(age.value);
                        
                //         db.splice(index, 1);
        
                //         localStorage.setItem("actifSession", JSON.stringify(finalUser));
                //         fakeDb.update(actifSession.id, email.value, password.value, nom.value, prenom.value, age.value, adresse.value, phone.value, db);
                //     }
                // });
            })
        });
    }

    delete() {
        const allForm = document.querySelectorAll(".form-user");
        const db = JSON.parse(localStorage.getItem("db"));

        console.log(db);
        
        allForm.forEach((element, index) => {
            const btnDelete = document.querySelectorAll(`#delete`);

                btnDelete[index].addEventListener("click", () => {
                    const id = btnDelete[index].dataset.id;

                    const indexInDb = db.findIndex(el => el.id == id);
                    
                    db.splice(indexInDb, 1);

                    localStorage.setItem("db", JSON.stringify(db));
                    this.view();
                })
        });
    }
}

export default Admin;