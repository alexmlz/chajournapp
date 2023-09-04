import { createBrowserRouter } from "react-router-dom";
import JournalDetailPage from "./pages/JournalDetailsPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AddJournalPage from "./pages/AddJournalPage";
import LogoutPage from "./pages/LogoutPage";
import JournalPage from "./pages/JournalPage";
import AdminPage from "./pages/AdminPage";
//import ListGroup from "./ListGroup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/journals/", element: <JournalPage /> },
      { path: "/journals/:id", element: <JournalDetailPage /> },
      { path: "/add/", element: <AddJournalPage /> },
      { path: "/logout/", element: <LogoutPage /> },
      { path: "/fische/", element: <AdminPage /> },
    ],
  },
]);

export default router;
