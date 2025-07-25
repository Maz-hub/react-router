import { createContext, useState } from "react";

const BrowserContext = createContext();
const routerState = {}; // Initial State

export default function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));
  return (
    <BrowserContext.Provider value={{ routerState, currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
}

export { BrowserContext };
