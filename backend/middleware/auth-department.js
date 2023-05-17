const departmentAuth = (req, res, department) => {

  if (req.session.user_id == undefined) {
    res.sendStatus(401);
    return;
  }

  const authorized = req.session.department.some(
    (sess_dep) => sess_dep.department === department
  );

  if (authorized) res.sendStatus(200);
  else {
    res.sendStatus(401);
  }
};

module.exports = departmentAuth;
