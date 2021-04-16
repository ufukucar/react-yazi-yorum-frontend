import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import YaziDetayi from "./components/YaziDetayi";

import YaziListesi from "./components/YaziListesi";

function App() {
  //console.log({ yaziListesi });

  return (
    <Router>
      <div className="main_wrapper">
        <header></header>

        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" component={YaziDetayi} />
        </div>
      </div>
    </Router>
  );
}

export default App;
