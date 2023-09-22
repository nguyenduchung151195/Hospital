import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export const MainLayout = () => {
  // const data = useLoaderData()
  // console.log(">>> MainLayout", data);
  console.log(">>> MainLayout");
  useEffect(() => { }, []);
  return (
    <>
      <Outlet />
    </>
  );
};
