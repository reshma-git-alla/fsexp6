function validateForm() {
  const name = document.querySelector("[name='name']").value.trim();
  const email = document.querySelector("[name='email']").value.trim();
  const age = document.querySelector("[name='age']").value;
  const agree = document.querySelector("[name='agree']").checked;

  if (!name || !email) {
    alert("Name and Email are required!");
    return false;
  }
  if (age <= 0) {
    alert("Enter valid age!");
    return false;
  }
  if (!agree) {
    alert("You must agree to terms!");
    return false;
  }
  return true;
}