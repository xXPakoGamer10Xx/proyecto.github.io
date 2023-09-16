        // Función para agregar la clase "reveal" cuando se desplaza hacia abajo
        function revealSection() {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                if (window.scrollY + window.innerHeight > section.offsetTop + section.offsetHeight / 2) {
                    section.classList.add('reveal');
                }
            });
        }

        // Agregar evento de desplazamiento para activar la animación
        window.addEventListener('scroll', revealSection);
