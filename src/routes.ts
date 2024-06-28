import { createBrowserRouter } from "react-router-dom";
import {
  loader as rootLoader,
  action as rootAction,
} from "./layouts/Root";
import Error from "./pages/Error";
import Layout from "./Layout";
import Login, { loginAction } from "./pages/Login";
import Test, { action as testAction } from "./pages/Test/Test";
const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: Error,
    loader: rootLoader,
    action: rootAction,
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
    action: loginAction,
  },
]);

export default routes;
