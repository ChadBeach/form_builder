import $ from 'jquery';
var url =  'http://json-data.herokuapp.com/forms'

var data = $.ajax({
  url: url,
  success: getType
});

function getType (data) {
  console.log(data);
  data.forEach(function (x) {
    itemTemplate (x)
  })
}
function itemTemplate (x){

  $("form").append(
  `<div class="dynamic-form">
  ${x.type}
  <div class="text">${x.type}</div>
  `);
};


<label for="">First Name</label>

// console.log(data.responseJSON);



// $(".submit").on('click', function (e) {
//   event.preventDefault();
// });
