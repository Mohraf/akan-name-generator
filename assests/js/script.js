let day;
let month;
let year;

$('#submit').on('click', () => {
  var date = new Date($('#birthdate').val());
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();
  // console.log(month);
});