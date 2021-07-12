import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//importing app whwere we compiled all the components together
import App from './App';
import {BrowserRouter} from 'react-router-dom'
//rendering the app in the main index.html of public folder 
//this will render the whole page in the div#root
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
  document.getElementById('root')
);
