document.addEventListener('DOMContentLoaded', function () {
  const navbarContainer = document.getElementById('navbar-container');
  
  fetch('assets/components/navbar.html')
      .then(response => response.text())
      .then(data => {
          navbarContainer.innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar a navbar:', error));
  });

document.getElementById('toggleBtn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  });

