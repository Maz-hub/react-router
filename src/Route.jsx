import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

export default function Route({ children, path }) {
  const { currentURL } = useContext(BrowserContext);
  console.log(currentURL, path);
  // am I at the current URL?
  // if yes -> render myself
  // if no -> render nothing
  if (currentURL.pathname === path) {
    return <>{children}</>;
  } else {
    return null;
  }
}
