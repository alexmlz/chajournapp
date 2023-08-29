import { createBrowserRouter } from "react-router-dom";
import JournalDetailPage from "./pages/JournalDetailsPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AddJournalPage from "./pages/AddJournalPage";
//import ListGroup from "./ListGroup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/journals/:id", element: <JournalDetailPage /> },
      { path: "/add/", element: <AddJournalPage /> },
    ],
  },
]);

export default router;
