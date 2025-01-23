const form = document.getElementById("mainForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("Form submitted : " + e.target.name.value);
  alert(`My name is ${e.target.name.value}`);
});
