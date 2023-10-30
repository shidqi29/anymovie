import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import MainLayout from "./components/layouts/MainLayout";
import TVPage from "./pages/tvPage";
import NotFound from "./pages/notFound";
import MovieDetail from "./pages/movieDetail";
import TVDetail from "./pages/tvDetail";
import Search from "./pages/Search";

function App() {
  return (
    <div className="container bg-primary mx-auto ">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/tv-series" element={<TVPage />} />
            <Route path="/tv-series/:id" element={<TVDetail />} />
            <Route path="/search/:query" element={<Search />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
