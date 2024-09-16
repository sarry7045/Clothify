import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Authentication from "./Components/Authentication";
import Shop from "./Components/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authenticate" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
