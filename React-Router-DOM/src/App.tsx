import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

const App = () => (
  <BrowserRouter>
    <div className="mb-6 space-y-4 text-center">
      <Link to="/" className="inline-block underline">
        Home
      </Link>
      <br />
      <Link to="/page1" className="inline-block underline">
        Page1
      </Link>
      <br />
      <Link to="/page2" className="inline-block underline">
        Page2
      </Link>
    </div>
    <Router />
  </BrowserRouter>
);

export default App;
