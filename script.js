const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".secao").forEach((secao) => {
  observer.observe(secao);
});

function showMessage(text, type) {
    statusMsg.textContent = text;
    statusMsg.className = ""; // limpa
    statusMsg.classList.add(type);
    
    // aparece
    statusMsg.style.opacity = "1";

    // some depois de 4s
    setTimeout(() => {
        statusMsg.style.opacity = "0";
    }, 4000);
}

emailjs
.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
    Nome: document.getElementById("nome").value,
    Email: document.getElementById("email").value,
    Mensagem: document.getElementById("mensagem").value
})
.then(() => {
    showMessage("Mensagem enviada com sucesso!", "success");
    form.reset();
})
.catch(() => {
    showMessage("Ocorreu um erro ao enviar. Tente novamente.", "error");
});


