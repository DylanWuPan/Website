// Javascript Index for Dylan Pan's Website

$(document).ready(function () {
  const $window = $(window);
  const windowHeight = $window.height();

  // Initial reveal of name
  $("#name").each(function () {
    show(this);
  });

  // Scroll behavior
  $window.on("scroll", function () {
    const scrollTop = $window.scrollTop();

    // Fade in hidden elements
    $(".hidden").each(function () {
      const $elem = $(this);
      const bottom_of_object = $elem.position().top + $elem.outerHeight();
      const bottom_of_window = scrollTop + windowHeight;

      if (bottom_of_window > bottom_of_object) {
        show($elem);
      }
    });

    // Animate about section boxes
    ["#aboutInfo1", "#aboutInfo2", "#aboutInfo3"].forEach(function (id) {
      const isLeft = id === "#aboutInfo2";

      $(id).each(function () {
        const $elem = $(this);
        const startLine =
          $elem.position().top + $elem.outerHeight() - windowHeight;
        const scrollPos = scrollTop - startLine;
        const newMargin = $window.width() - 0.002 * $window.width() * scrollPos;

        $elem.css(isLeft ? "margin-left" : "margin-right", newMargin);
        $elem.show();
      });
    });
  });

  // Navigation scroll
  $("#navBarItem1").click(() => scrollToSection("#landing"));
  $("#navBarItem2").click(() => scrollToSection("#aboutSection"));
  $("#navBarItem3").click(() => scrollToSection("#contactSection"));

  // Restore scroll position
  const scrollPos = localStorage.getItem("scrollpos");
  if (scrollPos) window.scrollTo(0, scrollPos);

  // Save scroll position on unload
  window.onbeforeunload = () => {
    localStorage.setItem("scrollpos", window.scrollY);
  };
});

// Helper: Show element by removing "hidden", adding "shown"
function show(elem) {
  $(elem).removeClass("hidden").addClass("shown");
}

// Helper: Smooth scroll to section
function scrollToSection(selector) {
  $("html, body").animate(
    {
      scrollTop: $(selector).offset().top - 20, // minor offset for padding
    },
    1000
  );
}
