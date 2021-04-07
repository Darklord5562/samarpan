// scrollbar managing
window.addEventListener('scroll', () => {
  var Y = window.scrollY;
  if (Y > 0) {
    $('header').addClass('shadow');
    $('header').css('height', '50px');
  } else {
    $('header').removeClass('shadow');
    $('header').css('height', '70px');
  }
});
$(document).ready(() => {
  createSidebar()
  $('.toggle').click(() => {
    $('sidebar').addClass('show');
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-times');
    $('#overlay').toggleClass('overlay');
  });
  $('#overlay').click(() => {
    $('sidebar').removeClass('show');
    closeModal()
    $('.toggle').addClass('fa-bars');
    $('.toggle').removeClass('fa-times');
    $('#overlay').toggleClass('overlay');
  });
  $('#password-toggle').click(() => {
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
  $('#login-submit').click(() => {
    $('#overlay').addClass('overlay');
    var modalHeaderMsg = 'hello'
    var modalBodyMsg = 'modal content'
    openModal();
  });
  modalCancel.addEventListener('click', () => {
    closeModal()
    $('#overlay').removeClass('overlay');
  })
  modalOk.addEventListener('click', () => {
    console.log('open')
    closeModal()
    $('#overlay').removeClass('overlay');
  });
  // form handling


  document.getElementById('info').addEventListener('submit', function(e){
    e.preventDefault();
  })

function print(){
  var x = 'hello'
    document.getElementById('display-message').innerText= x
}
  
  
  
  
  
});