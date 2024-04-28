import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import Categories from "./pages/Categories/Categories";
import Areas from "./pages/Areas/Areas";
import Results from "./pages/Results/Results";
import Details from "./pages/Details/Details";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import { useState } from "react";
import { SearchContext, AreaContext } from "./context/context";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [area, setArea] = useState("");

  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return (
    <SearchContext.Provider value={{ area, setArea }}>
      <SearchContext.Provider value={{ searchItem, setSearchItem }}>
        {" "}
        {loading ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/categories" element={<Categories />} />
              <Route path="/home/areas" element={<Areas />} />
              <Route path="/home/results" element={<Results />} />
              <Route path="/home/details" element={<Details />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <SplashScreen />
        )}
      </SearchContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
