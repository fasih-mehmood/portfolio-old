$(document).ready(function () {

  const switchBtn = $(".switch-mode");
  const homeLine1 = $('.hl-1');
  const homeLine2 = $('.hl-2');

  $('[data-toggle="tooltip"]').tooltip();

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDark();
  } else {
    disableDark();
  };
  var typed = new Typed('.element', {
    strings: ["HTML5/CSS3", "JavaScript", "jQuery", "Bootstrap", "jQuery Animations", "SASS/SCSS", "Firebase"],
    typeSpeed: 25,
    loop: true,
    backDelay: 1200,
    backSpeed: 40,
  });


  $('.btn-about').click(e => {
    $('#v-pills-about-tab').click();
  });

  switchBtn.click(e => {
    if (switchBtn.attr("src") == 'img/Moon.svg') {
      enableDark();
    } else {
      disableDark();
    };
  });

  function enableDark() {
    $('body').addClass('dark');
    switchBtn.attr("src", "img/Sun.svg");
    homeLine2.attr("src", "img/Lines2-dark.svg");
    homeLine1.attr("src", "img/Lines1-dark.svg");
  };

  function disableDark() {
    $('body').removeClass('dark');
    switchBtn.attr("src", "img/Moon.svg");
    homeLine2.attr("src", "img/Lines2.svg");
    homeLine1.attr("src", "img/Lines1.svg");
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? enableDark() : disableDark();
    console.log(newColorScheme);
  });
})