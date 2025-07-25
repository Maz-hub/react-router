import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

export default function Link({ children, to }) {
  const { setCurrentURL } = useContext(BrowserContext);

  function handleNavigation() {
    setCurrentURL(new URL(window.location.origin + to));
  }
  return <a onClick={handleNavigation}>{children}</a>;
}
