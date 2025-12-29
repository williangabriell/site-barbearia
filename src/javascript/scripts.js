// Alternar o menu móvel e o ícone

document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("mobile-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const icon = mobileBtn.querySelector("i");

  mobileBtn.addEventListener("click", function () {
    // Alterna a classe "active" no menu
    mobileMenu.classList.toggle("active");

    // Alterna entre os ícones fa-bars e fa-xmark
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });
});

// Realça o item do menu com base na seção visível durante o scroll

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // posição atual do scroll
  let activeIndex = 0;

  sections.forEach((section, i) => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      activeIndex = i;
    }
  });

  // Remove a classe "active" de todos os itens
  navItems.forEach(item => item.classList.remove("active"));

  // Adiciona a classe "active" ao item correspondente
  if (navItems[activeIndex]) {
    navItems[activeIndex].classList.add("active");
  }
});

// Abrir modal de agendamento

const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
  button.addEventListener("click", function () {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    modal.showModal();
  });
});

// Fechar modal de agendamento

const closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    modal.close();
  });
});

// Função agendar

function agendar() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  if(!nome || !telefone || !data || !hora) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }


  const lista = document.getElementById('listscheduling');
  const item = document.createElement('p');
  item.textContent = `${nome} agendou para ${data} às ${hora} seu telefone: ${telefone}`;
  lista.appendChild(item);

  document.getElementById('nome').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('data').value = '';
  document.getElementById('hora').value = '';

  alert('Agendamento realizado com sucesso!');

}