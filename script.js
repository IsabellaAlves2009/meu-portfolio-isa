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

(function() {
    emailjs.init("SEU_PUBLIC_KEY_AQUI");
})();

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    statusMsg.textContent = "Enviando...";
    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
        Nome: document.getElementById("nome").value,
        Email: document.getElementById("email").value,
        Mensagem: document.getElementById("mensagem").value
    })
    .then(() => {
        statusMsg.textContent = "Mensagem enviada com sucesso!";
        statusMsg.style.color = "lightgreen";
        form.reset();
    })
    .catch(() => {
        statusMsg.textContent = "Erro ao enviar a mensagem.";
        statusMsg.style.color = "red";
    });
});

