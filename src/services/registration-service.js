function registration(state) {
  const { email, username, department, password } = state;

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, department, password }),
  }).then((data) => {
    if (data.status === 201) {
      window.location.replace("/login");
    } else if (data.status === 500) {
      alert("Email already exists");
      document.getElementById("userExists").innerHTML = "Email already exists";
      document.getElementById("userExists").style.color = "red";
    } else {
      // User registration failed.
      // Unreachable
    }
  });
}

export { registration };
