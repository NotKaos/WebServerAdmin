function login(state) {
  const { email, password } = state;
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.status === 200) {
      window.location.replace("/");
    } else if (res.status === 401) {
      alert("The email or password is incorrect");
      window.location.replace("/login");
    } else {
      alert('You stupid.');
      window.location.replace("/login");
    }
  });
}

export { login };
