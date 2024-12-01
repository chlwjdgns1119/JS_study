import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Foodtruck from "./pages/Foodtruck";
import Festival from "./pages/Festival"
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community"
import Tentstall from "./pages/Tentstall";
import FoodtruckPost from "./pages/FoodtruckPost";
import TestPage from "./pages/TestPage"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="foodstall/foodtruck" element={<Foodtruck/>} />
            <Route path="foodstall/tentstall" element={<Tentstall/>} />
            <Route path="festival" element={<Festival/>} />
            <Route path="marketplace" element={<Marketplace/>} />
            <Route path="community" element={<Community/>} />
            <Route path="foodstall/foodtruck/post" element={<FoodtruckPost/>}/>
            <Route path="TestPage" element={<TestPage/>}/>
        </Routes>
    );
};

export default App;