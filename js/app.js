var y = window.scrollY;
if(y > 5){
  $(header).css({
    "background":"#0075ff",
    "color":"#000"
  });
jQuery(document).ready(function() {
	$('.toggle').click(function() {
		$('sidebar').toggleClass('show');
		$(this).toggleClass('fa-bars');
		$(this).toggleClass('fa-times');
		$('#overlay').toggleClass('overlay');
	});
	$('#overlay').click(function() {
		$('sidebar').toggleClass('show');
		$('.toggle').addClass('fa-bars');
		$('.toggle').removeClass('fa-times');
		$('#overlay').toggleClass('overlay');
	});
	$('.hide-password').click(function() {
		if($('.password').attr('type')=="password"){
			$(this).toggleClass('fa-eye-slash');
			$(this).toggleClass('fa-eye');
			$('.password').attr('type', 'text');
		}else{
			$(this).toggleClass('fa-eye-slash');
			$(this).toggleClass('fa-eye');
			$('.password').attr('type', 'password');
		}
	});
	$('.likes').click(function(){
	  $(this).toggleClass('red');
	});
});