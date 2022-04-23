import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./components/layout/Layout";
import MoviesList from "./components/movies/MoviesList";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <MoviesList />
      </Layout>
    </Provider>
  );
}

export default App;
