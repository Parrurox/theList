import { useState, useEffect, useContext } from "react";
import WatchList from "./components/WatchList";

import WatchCreate from "./components/WatchCreate";
import watchContext from "./context/watch";

// import "./App.css";

function App() {
  const { fetchWatch } = useContext(watchContext);
  useEffect(() => {
    fetchWatch();
  }, []);

  // render
  return (
    <>
      <div className="app">
        <h1>The List 👉🏻make list of any kind👈🏻</h1>
        <WatchList />
        <WatchCreate />
      </div>
    </>
  );
}

export default App;
