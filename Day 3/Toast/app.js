const toast = document.getElementsByClassName("alart")[0]; // Get the first element with the "alart" class

const buttons = document.getElementsByClassName("alertBTN"); // Get all buttons with the "alertBTN" class
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    if (toast) {
      toast.classList.add("active");
      toast.classList.remove("alart");
      setTimeout(() => {
        toast.classList.remove("active");
        toast.classList.add("alart");
      }, 2000);
    }
  });
}
