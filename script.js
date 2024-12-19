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
    const target = $(this).attr("href");
    if (!target.startsWith("http")) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800
      );
    }
  });
});

// Impede a seleção de texto na página
document.addEventListener("selectstart", function (event) {
  event.preventDefault();
});

// Parceiros
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Banner inicial
$(".carousel").carousel();
