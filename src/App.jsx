import './App.css'

import AppRedirect from "./AppRedirect.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export const routes= [
    {
        path: '*',
        element: null,
    },
];


function App() {
    const router = createBrowserRouter(routes);

  return (
    <>
        <RouterProvider router={router} />
        <AppRedirect />
      <div>redirect to app</div>
    </>
  )
}

export default App
