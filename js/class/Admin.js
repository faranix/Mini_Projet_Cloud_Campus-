class Admin {
    view() {
        const panelAdmin = document.querySelector("#panel-admin");
        const listOfUser = JSON.parse(localStorage.getItem("db"));

        listOfUser.forEach(user => {
            const container = document.createElement("div");
            container.innerHTML = `
                <ul>
                    <li>${user.email}</li>
                </ul>
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
}

export default Admin;