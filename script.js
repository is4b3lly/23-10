function validadeForm() {
    let name = document.getElementsByld("name").value;
    let email = document.getElementsByld("email").value;
    let password = document.getElementsByld("password").value;
    let errorMessage = document.getElementsByld("errorMesage");
}

if(name === "") {
    errorMessage.textContent = "O campo nome é obrigatório";
    return false;
}

if