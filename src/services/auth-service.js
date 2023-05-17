function isAuth(state) {
  console.log(
    "====================",
    state,
    "================================="
  );

  // fetch(`/${state}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "text/html",
  //   },
  //   body: JSON.stringify({ email, password }),
  // }).then((res) => {
  //   if (res.status === 200) {
  //     // Do Something
  //   } else if (res.status === 401) {
  //     // Do Something Else
  //   }
  // });
}

export { isAuth };
