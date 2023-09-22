import { RouteObject, useRoutes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";

export const DashboardRouter = () => {
  console.log(">>> DashboardRouter");
  const routes: RouteObject[] = [
    {
      path: "",
      element: <DashboardPage />,
    },
  ];
  return useRoutes(routes);
};
