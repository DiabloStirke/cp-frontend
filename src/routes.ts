import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Layout, { loader as rootLoader } from "./Layout";
import Login, { loginAction, discordAuth } from "./pages/Login";
import Test, { action as testAction } from "./pages/Test/Test";
const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: Error,
    loader: rootLoader,
    children: [
      {
        ErrorBoundary: Error,
        children: [
          // { index: true, Component: Index },
          {
            path: "test",
            Component: Test,
            action: testAction,
          },
          // {
          //   path: "contacts/:contactId/edit",
          //   Component: EditContact,
          //   loader: contactLoader,
          //   action: editAction,
          // },
          // {
          //   path: "contacts/:contactId/destroy",
          //   action: deleteAction,
          // },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
    ErrorBoundary: Login,
    action: loginAction,
  },
  {
    path: "/discord-authorized",
    loader: discordAuth,
  }
]);

export default routes;
