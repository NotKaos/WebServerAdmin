function registration(state) {
  const { email, username, department, password } = state;

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, department, password }),
  }).then((data) => {
    if (data.status == 201) {
      // User registered
      // Do something
      window.location.replace("/src/pages/Home.js");
    } else if (data.status == 500) {
      alert("Email already exists");
      document.getElementById("userExists").innerHTML = "Email already exists";
      document.getElementById("userExists").style.color = "red";
    } else {
      // User registration failed.
    }
  });
}

export { registration };
