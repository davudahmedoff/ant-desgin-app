import { BrowserRouter, Routes, Route ,Outlet} from "react-router-dom";
import { Error, SignIn, SignUp } from "./pages/export";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
