import React, { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import SwapPage from "./pages/SwapPage";

function App() {
  const [entered, setEntered] = useState(false);

  return entered ? (
    <SwapPage />
  ) : (
    <WelcomePage onEnter={() => setEntered(true)} />
  );
}

export default App;
