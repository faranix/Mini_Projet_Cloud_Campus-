export function inscription(fakeDb) {
    const form = document.querySelector("#form-inscription");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#form-inscription-email").value;
        const password = document.querySelector("#form-inscription-password").value;

        fakeDb.add(email, password);
    })
}