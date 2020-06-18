/**
 * components/App/App.js
 */

/* imports modules */
import React, { } from "react";
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* import components */
//import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Project_01 from "../Projects/Project_01";
import Project_02 from "../Projects/Project_02";
import Project_03 from "../Projects/Project_03";
import Project_04 from "../Projects/Project_04";
import Project_05 from "../Projects/Project_05";
import Project_06 from "../Projects/Project_06";
import Project_07 from "../Projects/Project_07";
import Project_08 from "../Projects/Project_08";
import Project_09 from "../Projects/Project_09";
import Project_10 from "../Projects/Project_10";

/* import others */
import "./style.scss";

/* component */
function App(props) {

  return (
    <HashRouter basename='/'>

      <Navbar />

      <div className="mainContainer">
        <Switch>
          {/* Home */}


          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Project} />
          <Route path="/project_01" component={Project_01} />
          <Route path="/project_02" component={Project_02} />
          <Route path="/project_03" component={Project_03} />
          <Route path="/project_04" component={Project_04} />
          <Route path="/project_05" component={Project_05} />
          <Route path="/project_06" component={Project_06} />
          <Route path="/project_07" component={Project_07} />
          <Route path="/project_08" component={Project_08} />
          <Route path="/project_09" component={Project_09} />
          <Route path="/project_10" component={Project_10} />

        </Switch>
      </div>
    </HashRouter>
  );
}

/* export */
export default App;


