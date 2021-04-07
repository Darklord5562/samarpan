var day = document.getElementById('day')
var month = document.getElementById('month')
var year = document.getElementById('year')

var submit = document.getElementById('info')
submit.addEventListener('submit', function(e) {
  e.preventDefault();
  var dd = day.value
  var mm = month.value -1
  var yyyy = year.value
  var today = new Date();
  var age = today.getFullYear() - yyyy;
  if (today.getMonth() < mm || (today.getMonth() == mm && today.getDate() < dd)) {
    age--;
  }
  alert(age)
  if(age>18){
    jQuery.ajax({
      url:'php/login.php',
      success: function(res){
        console.log(res)
      }
    })
  }
})