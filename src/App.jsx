import BrowserRouter from "./BrowserRouter.jsx";
import Route from "./Route.jsx";
import Blog from "./Blog.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import NavBar from "./NavBar.jsx";

import "./App.css";

function App() {
  return (
    <>
      <h1>App</h1>

      <BrowserRouter>
        <h2>Browser Router!</h2>
        <NavBar />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
