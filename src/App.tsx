import "./App.scss";
import router from "./core/RouterProviderData";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/common/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
