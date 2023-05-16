function login(state) {
  const { email, password } = state;

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {});
}

export { login };
