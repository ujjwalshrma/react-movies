import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./components/layout/Layout";
import MoviesList from "./components/movies/MoviesList";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/movies/MovieDetail";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
