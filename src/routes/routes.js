import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index.jsx";
import Add_contact from "../pages/add-contact/add_contact.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/addContact",
    element: <Add_contact/>,
  },
  // {
  //   path: "/",
  //   element: <Layout2 />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
]);

export default router;