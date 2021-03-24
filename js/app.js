window.addEventListener('scroll', function() {
  var Y = window.scrollY;
  if (Y > 0) {
    $('header').addClass('shadow');
    $('header').css('height', '50px');
  } else {
    $('header').removeClass('shadow');
    $('header').css('height', '70px');
  }
});
jQuery(document).ready(function() {
  $('.toggle').click(function() {
    $('sidebar').toggleClass('show');
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-times');
    $('#overlay').toggleClass('overlay');
  });
  $('#overlay').click(function() {
    $('sidebar').removeClass('show');
    $('.toggle').addClass('fa-bars');
    $('.toggle').removeClass('fa-times');
    $('#overlay').toggleClass('overlay');
    $('.notice').hide();
  });
  $('.hide-password').click(function() {
    if ($('.password').attr('type') == "password") {
      $(this).toggleClass('fa-eye-slash');
      $(this).toggleClass('fa-eye');
      $('.password').attr('type', 'text');
    } else {
      $(this).toggleClass('fa-eye-slash');
      $(this).toggleClass('fa-eye');
      $('.password').attr('type', 'password');
    }
  });
  $('.likes').click(function() {
    $(this).toggleClass('red');
  });
  $('#modal-cancel').click(function() {
    $('#overlay').removeClass('overlay');
    $('.notice').hide();
  });
  $('#donate').click(function() {
    $('#overlay').addClass('overlay');
    $('.notice').show();
  });
});