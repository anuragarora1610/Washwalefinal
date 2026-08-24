const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = [
    document.getElementById("name"),
    document.getElementById("phone"),
    document.getElementById("email"),
    document.getElementById("city")
  ];

  fields.forEach((field) => field.classList.remove("invalid"));

  const [name, phone, email, city] = fields;
  let valid = true;

  if (name.value.trim().length < 2) {
    name.classList.add("invalid");
    valid = false;
  }

  const digits = phone.value.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    phone.classList.add("invalid");
    valid = false;
  }

  if (!email.checkValidity()) {
    email.classList.add("invalid");
    valid = false;
  }

  if (city.value.trim().length < 2) {
    city.classList.add("invalid");
    valid = false;
  }

  if (!valid) {
    message.textContent = "Please check the highlighted details.";
    message.style.color = "#b34e4e";
    return;
  }

  message.textContent = `You're on the list, ${name.value.trim().split(" ")[0]}! We'll be in touch.`;
  message.style.color = "";
  form.reset();
});
