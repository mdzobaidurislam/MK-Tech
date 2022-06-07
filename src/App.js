import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BannerAd from "./components/Home/TabItem/BannerAd";
import PopUnder from "./components/Home/TabItem/PopUnder";
import Native from "./components/Home/TabItem/Native";
import Skim from "./components/Home/TabItem/Skim";
import Footer from "./components/Footer/Footer";
// import Formates from "./components/Home/Formates";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="banner" element={<BannerAd />} />
          <Route path="pop-under" element={<PopUnder />} />
          <Route path="native" element={<Native />} />
          <Route path="skim" element={<Skim />} />
          <Route index element={<BannerAd />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
