import "./App.scss";
import { Suspense } from "react";
import Loader from "./components/common/Loader";
import RouterProviderData from "./core/RouterProviderData";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProviderData />
      </Suspense>
    </>
  );
}

export default App;
