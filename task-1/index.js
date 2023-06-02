function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert(
      "Must a password be at least 6 characters long containing at least 1 number and 1 letter"
    );
    return false;
  }
  alert("Form submitted successfully");
}
