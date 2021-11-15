let day;
let month;
let year;
let akanName;

let boys = new Array("Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame");

let girls = new Array("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama");

$('#submit').on('click', () => {
  var date = new Date($('#birthdate').val());
  var gender = $("input[name='gender']:checked").val();
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();
  let yearString = String(year);
  let century = parseInt(yearString.slice(0,2));
  let calculatingYear = parseInt(yearString.slice(2,5));
  let day_of_week = (((century/4)-2*century-1) + ((5*calculatingYear/4)) + ((26*(month+1)/10)) + day) % 7;
  let weekday = Math.trunc(day_of_week);

  if (gender == 'male') {
    akanName = boys[weekday];
  }
  else {
    akanName = girls[weekday];
  }

  alert('Your Akan Name is ' + akanName + '!');
});
