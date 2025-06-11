document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  function validarEmail(email) {
    // Regex simples para validar e-mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    // Limpar erros anteriores
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let valido = true;

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Por favor, preencha seu nome.";
      valido = false;
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "Por favor, preencha seu e-mail.";
      valido = false;
    } else if (!validarEmail(emailInput.value.trim())) {
      emailError.textContent = "Por favor, informe um e-mail válido.";
      valido = false;
    }

    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Por favor, informe o assunto.";
      valido = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Por favor, escreva sua mensagem.";
      valido = false;
    }

    if (!valido) {
      e.preventDefault(); // Impede o envio se algum campo estiver inválido
    }
    // Se tudo estiver ok, o form será enviado normalmente e você pode usar o _next para redirecionar
  });
});
