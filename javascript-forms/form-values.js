document.addEventListener('submit', function (event) {
  event.preventDefault();
  var form = document.querySelector('#contact-form');
  var values = {};
  values.name = document.forms[0].elements[0].value;
  values.email = document.forms[0].elements[1].value;
  values.message = document.forms[0].elements[2].value;
  console.log('Form values:', values);
  form.reset();
});
