// Main JavaScript para PHP Desde Cero

document.addEventListener('DOMContentLoaded', function() {
    console.log('🐘 PHP Desde Cero - Sitio cargado correctamente');

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Si es un enlace a un tema, mostrar el contenido
            if (targetId.startsWith('#tema')) {
                showTopicContent(targetId);
                return;
            }
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Función para mostrar contenido de tema
    function showTopicContent(topicId) {
        const content = document.getElementById(topicId);
        if (content) {
            document.querySelectorAll('.content-detail').forEach(el => {
                el.style.display = 'none';
            });
            content.style.display = 'block';
            setTimeout(() => {
                content.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    // Ocultar todos los contenidos al cargar
    document.querySelectorAll('.content-detail').forEach(el => {
        el.style.display = 'none';
    });

    // Animación al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.module, .resource-card, .code-block, .topic-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.style.background = 'rgba(79, 91, 147, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'var(--secondary-color)';
            header.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    });

    // Copy to clipboard
    document.querySelectorAll('.code-block, .content-body pre').forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.textContent = '📋 Copiar';
        copyButton.style.cssText = 'position:absolute;top:10px;right:10px;background:var(--accent-color);border:none;padding:5px 10px;border-radius:5px;cursor:pointer;font-size:0.8rem;z-index:10;';
        if (getComputedStyle(block).position === 'static') block.style.position = 'relative';
        block.appendChild(copyButton);
        copyButton.addEventListener('click', () => {
            const code = block.querySelector('code') || block;
            navigator.clipboard.writeText(code.textContent);
            copyButton.textContent = '✅ Copiado!';
            setTimeout(() => copyButton.textContent = '📋 Copiar', 2000);
        });
    });

    console.log('%c🐘 ¡Bienvenido a PHP Desde Cero!', 'font-size: 20px; color: #777bb4; font-weight: bold;');
});
