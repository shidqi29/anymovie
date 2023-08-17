import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import MainLayout from "./components/layouts/MainLayout";
import TVPage from "./pages/tvPage";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className="container bg-primary mx-auto ">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie" element={<HomePage />} />
            <Route path="/tv-series" element={<TVPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
