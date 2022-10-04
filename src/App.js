import "./App.css";
import React,{useState} from "react";
import Home from "./pages/home/index.jsx";
import Add_contact from "./pages/add-contact/add_contact.jsx"
import Single_contact from "./components/single_contact"
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'mina',
      lastName: 'alaei',
      age: 21,
      city: 'esfahan',
      email: 'nimai@example.com',
      favorite: 'favorite'
    },
    {
      id: 2,
      name: 'nima',
      lastName: 'rezaei',
      age: 21,
      city: 'tehran',
      email: 'rezaei@example.com',
      favorite: 'unFavorite'
    },
    {
      id: 3,
      name: 'nima',
      lastName: 'rezaei',
      age: 21,
      city: 'tehran',
      email: 'rezaei@example.com',
      favorite: 'unFavorite'
    },
    {
      id: 4,
      name: 'nima',
      lastName: 'rezaei',
      age: 21,
      city: 'tehran',
      email: 'rezaei@example.com',
      favorite: 'unFavorite'
    },
  ])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home contacts={contacts} setContacts={setContacts}/>,
    },
    {
      path: "/addContact",
      element: <Add_contact contacts={contacts} setContacts={setContacts}/>,
    },
    {
      path: "/contact/:contactID",
      element: <Single_contact contacts={contacts}/>,
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