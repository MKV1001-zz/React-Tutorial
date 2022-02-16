import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
import Nopage from "./pages/Nopage";
import Layout from "./components/layout/layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/newmeetups" element={<NewMeetupsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
