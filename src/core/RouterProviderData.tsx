import { lazy } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { event } from "../mock_data/event-data";
import Loader from "../components/common/Loader";
const RootLayout = lazy(() => import("./RootLayout"));
const Memories = lazy(() => import("../pages/Public/Memories"));
const AboutPage = lazy(() => import("../pages/Public/AboutPage"));
const LandingPage = lazy(() => import("../pages/Public/LandingPage"));
const Upcoming = lazy(() => import("../pages/Public/Upcoming"));
const TrekInfo = lazy(() => import("../pages/Public/TrekInfo"));
const EventCategory = lazy(() => import("../pages/Public/EventCategory"));
const EventPlanForm = lazy(() => import("../pages/admin/EventPlan/EventPlan"));
const SignIn = lazy(() => import("../pages/admin/SignIn/SignIn"));
const AdminLayout = lazy(
  () => import("../pages/admin/AdminLayout/AdminLayout")
);

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: () => <Loader />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/memories",
        element: <Memories />,
      },
    ],
  },
  {
    path: "/trip/category/:type",
    element: <EventCategory />,
  },
  {
    path: "/event/details/:id?",
    element: <TrekInfo {...event} />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "dashboard",
        element: <EventPlanForm />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
function RouterProviderData() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default RouterProviderData;
