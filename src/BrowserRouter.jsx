import { createContext, useState, useEffect } from "react";

const BrowserContext = createContext();
const routerState = {}; // Initial State

export default function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

  useEffect(() => {
    console.log("Setting up popstate listener");

    function handlePopStateEvent(e) {
      console.log(e);
    }

    window.addEventListener("popstate", handlePopStateEvent);

    return () => window.removeEventListener("popstate", handlePopStateEvent);
  }, []);

  return (
    <BrowserContext.Provider value={{ routerState, currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
}

export { BrowserContext };
