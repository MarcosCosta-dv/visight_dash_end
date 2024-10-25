document.addEventListener('DOMContentLoaded', function () {
  const navbarContainer = document.getElementById('navbar-container');
  
  fetch('assets/components/navbar.html')
      .then(response => response.text())
      .then(data => {
          navbarContainer.innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar a navbar:', error));
  });

document.addEventListener('DOMContentLoaded', function () {
  const navbarContainer = document.getElementById('header-container');
  
  fetch('assets/components/header.html')
      .then(response => response.text())
      .then(data => {
          navbarContainer.innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar a header:', error));
  });

let isMoved = false; 

document.getElementById('toggleBtn').onclick = function() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');

  const content = document.getElementById('mainContent');
  
  if (isMoved) {
      content.style.transform = 'translateX(0px)'; 
  } else {
      content.style.transform = 'translateX(200px)'; 
  }
  
  isMoved = !isMoved; 
};


