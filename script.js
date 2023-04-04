let senha1, senha2;

senha.addEventListener("keypress", () => { senha1 = senha.value; });



confirmaSenha.addEventListener("keypress", validaSenha);
function validaSenha() {
    senha2 = confirmaSenha.value;

    if (senha2 != senha1) {
        mensagem.innerText = "As senhas são diferentes. Tente novamente";
        senha.style.border = "2px solid red";
        confirmaSenha.style.border = "2px solid red";
        mensagem.style.display = "block";

        btnEnviar.classList.remove("ativo");
        btnEnviar.classList.add("inativo");
    }
    else {
        senha.style.border = "3px solid #ddd";
        confirmaSenha.style.border = "3px solid #ddd";
        mensagem.style.display = "none";

        btnEnviar.classList.remove("inativo");
        btnEnviar.classList.add("ativo");
    }
}