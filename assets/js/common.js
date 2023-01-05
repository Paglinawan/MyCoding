jQuery(function ($) {
  // スクロールイベント
  $(function () {
    scrollToggleClass();
    $(window).on('scroll', function () {
      scrollToggleClass();
    });

    function scrollToggleClass() {
      $('.js-scroll').each(function () {
        let $target = $(this).offset().top;
        let $scroll = $(window).scrollTop();
        let $windowHeight = $(window).height();
        if ($scroll > $target - $windowHeight + 80) {
          $(this).addClass('is-active');
        } else {
          $(this).removeClass('is-active');
        }
      });
    }
  });

  // スムーススクロール
  $(function () {
    $('a[href^="#"]').on('click', function () {
      const $speed = 500;
      const $href = $(this).attr('href');
      const $target = $($href == '#' || $href == '' ? 'html' : $href);
      const $position = $target.offset().top;
      $('html, body').animate({
        scrollTop: $position
      }, $speed, 'swing');
      return false;
    });
  });
  
  // ハンバーガーメニュー
  $(function () {
    let $ham = $('#js-ham');
    $ham.on('click', function () {
      $(this).add('body').toggleClass('is-active');
    });
  });
  
});

