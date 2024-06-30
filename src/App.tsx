import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MoviePage from "./pages/Movie/MoviePage";
import "./App.module.css"; // Импортируем стили приложения

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  );
};

export default App;
