
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-list');
        const menuIcon = menuToggle.querySelector('i');
        const allNavLinks = document.querySelectorAll('.nav-link');

        const closeMenu = () => {
            navLinks.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        });

        allNavLinks.forEach(link => {
            link.addEventListener('click', () => closeMenu());
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });

        function openGmail(e) {
            e.preventDefault();
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=joshikachandrag@gmail.com", "_blank");
        }

        const glow = document.querySelector('.cursor-glow');
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add('in-view');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.slide-up').forEach(el => observer.observe(el));