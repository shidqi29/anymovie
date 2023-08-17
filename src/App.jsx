import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import MainLayout from "./components/layouts/MainLayout";
import TVPage from "./pages/tvPage";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
