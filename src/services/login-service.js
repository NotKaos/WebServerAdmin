function login(state) {
  const { email, password } = state;
  console.log(email, password);

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export { login };
