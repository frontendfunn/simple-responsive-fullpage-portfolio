$(document).ready(function () {
  $(function () {
    $.scrollify({
      section: '.section',
      before: function (index, section) {
        $('.sidebarNavigation .nav-item').on('click', function () {
          $('.sidebarNavigation .nav-item').removeClass('active');
          $(this).addClass('active');
        });
      },
      after: function (index, section) {
        $('.sidebarNavigation .nav-item').each(function (i, navItem) {
          i == index
            ? $(navItem).addClass('active')
            : $(navItem).removeClass('active');
        });
      },
    });
  });
  $('.sidebarNavigation a').on('click', $.scrollify.move);
  $('.progressBar').each(function (index, progressBar) {
    let value = $(progressBar).attr('data-percentage');
    $(progressBar)
      .find('.progress')
      .css('width', value + '%');
    $(progressBar)
      .find('.progress .percentage')
      .text(value + '%');
  });
});
