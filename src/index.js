import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavouritesContextProvider } from "./store/favourite-context";

ReactDOM.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>,

  document.getElementById("root")
);
