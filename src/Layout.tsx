import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./components";
import { NextUIProvider } from "@nextui-org/react";
import axios from "axios";

export async function loader() {
  return await axios.get("/api/users/me");
}


export default function Layout() {
  const navigate = useNavigate();
  


  return (
    <NextUIProvider navigate={navigate}>
      <Navbar />
      <Outlet />
    </NextUIProvider>
  );
}
