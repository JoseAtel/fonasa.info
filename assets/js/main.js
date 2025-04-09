document.addEventListener('DOMContentLoaded', function() {
    // Selector de idioma
    const languageButton = document.querySelector('.language-button');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageButton && languageDropdown) {
      languageButton.addEventListener('click', function(e) {
        e.preventDefault();
        languageDropdown.classList.toggle('active');
      });
      
      // Cerrar el dropdown cuando se hace clic fuera de él
      document.addEventListener('click', function(e) {
        if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
          languageDropdown.classList.remove('active');
        }
      });
    }
    
    // Feedback de artículos
    const feedbackYes = document.getElementById('feedbackYes');
    const feedbackNo = document.getElementById('feedbackNo');
    
    if (feedbackYes && feedbackNo) {
      feedbackYes.addEventListener('click', function() {
        sendFeedback(true);
      });
      
      feedbackNo.addEventListener('click', function() {
        sendFeedback(false);
      });
    }
    
    function sendFeedback(isPositive) {
      // Aquí se podría implementar el envío real del feedback
      const feedbackButtons = document.querySelector('.feedback-buttons');
      const feedbackMessage = document.createElement('p');
      
      feedbackMessage.textContent = '¡Gracias por tu feedback!';
      feedbackMessage.style.color = 'var(--color-success)';
      
      if (feedbackButtons) {
        feedbackButtons.innerHTML = '';
        feedbackButtons.appendChild(feedbackMessage);
      }
      
      // Registrar analíticas
      console.log('Feedback enviado:', isPositive ? 'positivo' : 'negativo');
    }
    
    // Rotación de anuncios
    function rotateAds() {
      const adContainers = document.querySelectorAll('.ad-container');
      if (adContainers.length === 0) return;
      
      // Aquí se podría implementar una lógica para rotar entre diferentes anuncios
      // Por ahora, simplemente registramos que se mostró un anuncio
      console.log('Anuncio mostrado en', window.location.pathname);
    }
    
    rotateAds();
  });