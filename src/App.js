import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/css/style.css";
import Homepage from "scenes/Homepage";
import Daftarkelas from "scenes/Daftarkelas";
import Penyediakursus from "scenes/Penyediakursus";
import Hasilpencarian from "scenes/Hasilpencarian";
import Semantikweb from "scenes/Semantikweb";
import Tentangkami from "scenes/Tentangkami";
import Lihatkelas from "scenes/Lihatkelas";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/kelas" component={Daftarkelas}></Route>
        <Route exact path="/platform" component={Penyediakursus}></Route>
        <Route exact path="/hasil" component={Hasilpencarian}></Route>
        <Route exact path="/kelas/:kelasId" component={Lihatkelas}></Route>
        <Route exact path="/tentang" component={Tentangkami}></Route>
        <Route exact path="/semantikweb" component={Semantikweb}></Route>
        <Route exact path="/" component={Homepage}></Route>
      </Router>
    </div>
  );
}

export default App;
