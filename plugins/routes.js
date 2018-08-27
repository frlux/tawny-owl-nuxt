export default ({ app }) => {
  /**
   * Every time the route changes, we want to ensure that
   * query parameters (like location) are carried from route
   * to route.
   */
  app.router.beforeEach((to, from, next) => {
    if(!hasLocationQueryParameter(to) && hasLocationQueryParameter(from)){
      next({name: to.name, query: from.query});
    } else {
      next();
    }
  });

  function hasLocationQueryParameter(route) {
    return !!route.query.location;
  }
};
