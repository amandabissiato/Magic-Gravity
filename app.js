// =====================================================
// MENU MOBILE
// =====================================================

const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

if (menu && navigation) {

  menu.addEventListener("click", () => {

    navigation.classList.toggle("active");

    const isOpen =
      navigation.classList.contains("active");

    menu.setAttribute(
      "aria-expanded",
      isOpen
    );

  });

}


// =====================================================
// FECHAR MENU AO CLICAR
// =====================================================

document
  .querySelectorAll(".navigation a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("active");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


// =====================================================
// ANIMAÇÃO SUAVE DOS LINKS
// =====================================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


// =====================================================
// EFEITO DE APARECIMENTO
// =====================================================

const revealElements =
  document.querySelectorAll(
    ".medieval-card, .creature, .race, .academy-text, .castle-card, .competition-frame"
  );

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity .8s ease, transform .8s ease";

  revealObserver.observe(element);

});


// =====================================================
// HEADER MUDA AO ROLAR
// =====================================================

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    header.style.background =
      "rgba(8,5,3,.98)";

  } else {

    header.style.background =
      "linear-gradient(to bottom, rgba(12,8,5,.98), rgba(20,12,7,.94))";

  }

});