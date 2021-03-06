import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { Button, Switch, Calendar } from "webuikit";

import Button from "webuikit/Button";
import Switch from "webuikit/Switch";
import Calendar from "webuikit/Calendar";

const title = "My Minimal React setup with webuikit";
const App = () => {
  return (
    <React.Fragment>
      <div>{title}</div>
      <Button>Hi Button</Button>
      <div>
        <Button appearance="outline" btnColor="red" loading>
          outline
        </Button>
      </div>
      <Switch />
      <Calendar />
    </React.Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
module.hot.accept();
