import { Navigate, useRoutes } from "react-router-dom";

const Router = () => {
    const routes = [
        {
          path: "/",
          element: <Navigate to="auth/login" replace />
        //   element: <h1>Login</h1>,
        },
        {
            path: "/auth/login",
            element: <h1>Login</h1>,
          },
      ];
      return useRoutes(routes);
}
export default Router;
