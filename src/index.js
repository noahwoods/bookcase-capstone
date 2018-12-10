import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Bookcase from './components/Bookcase';
import { BrowserRouter as Router } from "react-router-dom"
// import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
<Router>
  <Bookcase />
</Router>,
document.getElementById('root'))
