
export function authMiddleware (roles: string[]) {
  return (req, res, next) => {

    if (req.params.id) {
      if (req.session.user.userId === +req.params.id) {
        next();
      } else {
        const isAuthorized = req.session.user && roles.includes(req.session.user.user_role.role);
        if (isAuthorized) {
          next();
        } else {
          res.sendStatus(403);
        }
      }
    } else {
      // console.log(req.params.id);

      const isAuthorized = req.session.user && roles.includes(req.session.user.user_role.role);
      if (isAuthorized) {
        next();
      } else {
        res.sendStatus(403);
      }
    }
  };
}