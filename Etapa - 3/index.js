function adicionarUC() {
    const novaUC = document.getElementById("novaUC").value;
    if (novaUC) {
        const li = document.createElement("li");
        li.textContent = `✔ ${novaUC}`;
        li.draggable = true;
        li.ondragstart = (e) => e.dataTransfer.setData("text/plain", null);
        li.ondragover = (e) => e.preventDefault();
        li.ondrop = (e) => {
            const source = e.dataTransfer.getData("text/plain");
            if (source) {
                const sourceLi = document.querySelector(`li[data-id='${source}']`);
                const targetLi = e.target;
                const parent = targetLi.parentNode;
                if (sourceLi && targetLi) {
                    parent.insertBefore(sourceLi, targetLi.nextSibling);
                }
            }
        };
        li.setAttribute("data-id", novaUC);
        document.getElementById("listaUCs").appendChild(li);
        document.getElementById("novaUC").value = "";
    } else {
        alert("Por favor, insira uma nova UC.");
    }
}

function validarInformacoes() {
    validarCPF();
    validarEmail();
}

function validarCPF() {
    const cpfInput = document.getElementById("cpf").value;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (cpfInput && !cpfRegex.test(cpfInput)) {
        alert("CPF inválido! O formato correto é: ddd.ddd.ddd-dd");
        document.getElementById("cpf").value = "";
    }
}

function validarEmail() {
    const emailInput = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput)) {
        alert("E-mail inválido!");
        document.getElementById("email").value = "";
    }
}
