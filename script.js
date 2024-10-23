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




if(pasword.length <6) {
    errorMessage.textContent = "A enha deve ter pelo menos 6 caracteres";
    return false;
}

errorMessage.textContent = "";
alert("Cadastro realizado com sucesso!");
return true;