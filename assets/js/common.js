// スムーススクロール
$(function () {
  $('a[href^="#"]').on('click', function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// ハンバーガーメニュー
$(function () {
  let ham = $('#js-ham');
  ham.click(function () {
    $(this).add('body').toggleClass('is-active');
  });
});

