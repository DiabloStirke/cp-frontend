import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Login from "./pages/Login";

function App() {
  return (
    <React.StrictMode>
      <NextUIProvider>
        <Login />
      </NextUIProvider>
    </React.StrictMode>
  )
}

export default App
