export function checkValideConnexion() {
    if (localStorage.getItem("actifSession") === null) {
        window.location.replace("/pages/connexion.html");
    } else {
        const linkConnexion = document.querySelector(".link-connexion");
        const linkInscription = document.querySelector(".link-inscription");

        linkConnexion.style.display = "none";
        linkInscription.style.display = "none";
    };
}

export function addButtonDisconned() {
    if (localStorage.getItem("actifSession") !== null) {
        const linkMenu = document.querySelector(".nav");

        const disconned = document.createElement("button");
        disconned.classList.add("button-disconned");
        disconned.textContent = "déconnexion";

        linkMenu.append(disconned);

        
        const buttonDisconned = document.querySelector(".button-disconned");
        
        buttonDisconned.addEventListener("click", () => {
            localStorage.removeItem("actifSession");
        
            window.location.replace("/pages/connexion.html");
        })
    }
}

