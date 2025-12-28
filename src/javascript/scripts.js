$(document).ready(function () {
  $("#mobile-btn").on("click", function () {
    $("#mobile-menu").toggleClass("active");
    $("#mobile-btn").find("i").toggleClass("fa-bars fa-xmark");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const scrollPosition = $(this).scrollTop();

    let activeIndex = 0;

    sections.each(function (i) {
      const top = $(this).offset().top - 120;
      const bottom = top + $(this).outerHeight();

      if (scrollPosition >= top && scrollPosition < bottom) {
        activeIndex = i;
        return false;
      }
    });

    navItems.removeClass("active");
    navItems.eq(activeIndex).addClass("active");
  });
});
