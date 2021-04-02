// var day = document.getElementById('day-dob');
// var dayVal = day.value

// day.addEventListener('focusout', function() {
//   if (dayVal < 31 && dayVal > 0) {
//     alert('hii')
//   }
//   else if (dayVal < 0 || dayVal > 31) {
//     day.value = "";
//     alert("Please select a valid date")
//   }
// });
// var month = document.getElementById('month');
// month.addEventListener('change', function() {
//   month = month.value
// })
// month = month.value
// var year = document.getElementById('year-dob');
//   var yearVal = year.value;
// year.addEventListener('focusout', function() {
//   if (yearVal <= 2002 && yearVal > 1961) {
//     var dob = yearval + month +dayVal
//     alert(dob);
//     var year = Number(dob.substr(0, 4));
//     var month = Number(dob.substr(4, 2)) - 1;
//     var day = Number(dob.substr(6, 2));
//     var today = new Date();
//     var age = today.getFullYear() - year;
//     if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
//       age--;
//     }
//   }
//   else if (yearVal > 2002 || yearVal < 1961) {
//     year.value = "";
//     alert("Please select a valid year. You age should atleast 18 years to donate blood.")
//   }
// });




var day = document.getElementById('day')
var month = document.getElementById('month')
var year = document.getElementById('year')




var submit = document.getElementById('info')
submit.addEventListener('submit', function(e){
  e.preventDefault();
  var dd = day.value
  var mm = month.value
  var yyyy = year.value
  var modalHeaderMsg = 'Your DOB'
  var modalBodyMsg = 'your DOB is ' + dd +'-'+mm+'-'+yyyy
  alert(modalBodyMsg)
  openModal()
})




