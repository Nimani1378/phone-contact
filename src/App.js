import "./App.css";
import Home from "./pages/home/index.jsx";
import Add_contact from "./pages/add-contact/add_contact.jsx"
import { RouterProvider } from "react-router-dom";
function App() {
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
  return <RouterProvider router={router} />;
}

export default App;