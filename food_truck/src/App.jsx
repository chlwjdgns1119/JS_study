import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Foodtruck from "./pages/Foodtruck";
import Festival from "./pages/Festival"
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="foodtruck" element={<Foodtruck />} />
            <Route path="festival" element={<Festival />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="community" element={<Community />} />
        </Routes>
    );
};

export default App;