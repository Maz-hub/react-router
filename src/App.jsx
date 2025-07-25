import BrowserRouter from "./BrowserRouter.jsx";
import Route from "./Route.jsx";
import Blog from "./Blog.jsx";

import "./App.css";

function App() {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <h2>Browser Router!</h2>
        <Route path="/1">
          <h3>Route 1</h3>
        </Route>
        <Route path="/2">
          <h3>Route 2</h3>
          <Blog />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
