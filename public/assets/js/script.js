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

  //setup colour change
  $('.text-fader .text-content .colour').each(function () {
    var textSplit = $(this).text().split('');
    var returnHTML = '';
    $.each(textSplit, function (intIndex, objValue) {
      returnHTML += '<span class="letter">' + objValue + '</span>';
    });
    $(this).html(returnHTML);
  });

  $(".text-fader .text-content:first-child").addClass("in");
  var textFaderDelay = 2000;
  var textFaderAnimationSpeed = 500;
  var colourChangeDelay = 500;

  function nextText($current) {
    if ($current.next(".text-fader .text-content").length > 0) {
      var hasNext = true;
    } else {
      var hasNext = false;
    }

    setTimeout(function () {
      $current.find('.colour').addClass('go');
    }, colourChangeDelay);

    setTimeout(function () {
      $current.removeClass("in").addClass("out");
      setTimeout(function () {
        $current.find('.colour').removeClass('go');
        $current.removeClass("out");
        if (hasNext) {
          $current.next(".text-fader .text-content").addClass("in");
        } else {
          $(".text-fader .text-content:first-child").addClass("in");
        }
        nextText($(".text-fader .text-content.in"));
      }, textFaderAnimationSpeed);
    }, textFaderDelay);
  }
  nextText($(".text-fader .text-content.in"));

  // var typed = new Typed('.element', {
  //   strings: ["HTML5/CSS3", "JavaScript", "jQuery", "Bootstrap", "jQuery Animations", "SASS/SCSS", "Firebase"],
  //   typeSpeed: 25,
  //   loop: true,
  //   backDelay: 1200,
  //   backSpeed: 40,
  // });


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