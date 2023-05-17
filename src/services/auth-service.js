function isAuth(page) {
  fetch(page).then((res) => {
    if (res.status === 401) {
      window.location.href = "/";
    }
  });
}

export { isAuth };
