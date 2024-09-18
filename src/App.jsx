import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Multifile, SingleFile } from "./components";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SingleFile />} />
      <Route path="/multifile" element={<Multifile />} />
    </Route>
  )
);


function App() {
 

  return (
    <RouterProvider router={router} />
  );
}

export default App;
