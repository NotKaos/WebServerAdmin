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
    } else {
      // User registration failed.
    }
  });
}

export { registration };
