// Menu animação
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
      $("#sp-header").addClass("menu-fixed");
    } else {
      $("#sp-header").removeClass("menu-fixed");
    }
  });

  // Abrir e fechar o menu na versão Mobile
  $(".hamburger").click(function () {
    $("nav ul li").toggle();
  });

  // Rolagem suave
  $("nav ul li a").click(function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    var target = $(this).attr("href"); // Obtém o valor do atributo href (ex: #servicos)
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top, // Anima a rolagem até a posição da seção alvo
      },
      800 // Duração da animação em milissegundos
    );
  });
});

//Scroll animado
function elementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Verifica se a div está parcialmente visível
  return (
    rect.top <= windowHeight * 0.8 && // Ativa antes de chegar ao topo completo
    rect.bottom >= windowHeight * 0.2 // E permanece até 20% do final
  );
}
document.addEventListener("DOMContentLoaded", function () {
  function handleScrollAnimation() {
    document.querySelectorAll(".scroll-animation").forEach((el) => {
      if (elementInViewport(el)) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();
});
