import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { Button } from "webuikit";

const title = 'My Minimal React setup with webuikit';
const App = () => {
  return (
    <React.Fragment>
      <div>{title}</div>
      <Button appearance="outline" btnColor="red" loading>outline</Button>
      {/* <btn2>zButton</btn2> */}
    </React.Fragment>
  )
}
ReactDOM.render(
  <App />
  , document.getElementById('app')
);
module.hot.accept();