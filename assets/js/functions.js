function initializeNavigation() {
    // Obtener todos los botones de navegación
    const navButtons = document.querySelectorAll('[data-page]');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-page');
            
            // Verificar si la sección existe en la página actual
            const targetSection = document.getElementById(targetPage);
            
            if (targetSection) {
                // Navegación suave a la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Actualizar estado activo del botón
                updateActiveButton(this);
            } else {
                // Si la sección no existe, cargar la página correspondiente
                // y luego scroll a la sección
                loadPageAndScroll(targetPage);
            }
        });
    });
}