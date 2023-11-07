import Route from "./router/Route";
import MovieContextProvider from "./contexts/MovieContextProvider";
function App() {
  return (
    <MovieContextProvider>
      <Route />
    </MovieContextProvider>
  );
}

export default App;
