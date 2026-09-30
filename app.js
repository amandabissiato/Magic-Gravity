// ========================================
// MENU MOBILE
// ========================================

const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

if (menu && navLinks) {

  menu.addEventListener('click', () => {

    const isOpen =
      navLinks.classList.toggle('active');

    menu.setAttribute(
      'aria-expanded',
      isOpen
    );

  });

}


// ========================================
// FECHAR MENU AO CLICAR EM UM LINK
// ========================================

document
  .querySelectorAll('.nav-links a')
  .forEach(link => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('active');

      menu.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });


// ========================================
// ANIMAÇÕES AO ENTRAR NA TELA
// ========================================

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            'visible'
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


// ========================================
// ELEMENTOS QUE SERÃO ANIMADOS
// ========================================

document
  .querySelectorAll('.reveal')
  .forEach(element => {

    observer.observe(element);

  });


// ========================================
// ANO AUTOMÁTICO NO FOOTER
// ========================================

const footer = document.querySelector('footer');

if (footer) {

  const year = new Date().getFullYear();

  footer.dataset.year = year;

}