import { Outlet, useNavigate } from "react-router-dom";
import ErrorModal from "./components/ErrorModal";
import { Navbar } from "./components";
import { NextUIProvider } from "@nextui-org/react";

export default function Layout() {
  const navigate = useNavigate();


  return (
    <NextUIProvider navigate={navigate}>
      <Navbar />
      <ErrorModal />
      <Outlet />
    </NextUIProvider>
  );
}
