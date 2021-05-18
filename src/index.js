import ReactDOM from 'react-dom'
import App from './App'

import {BrowserRouter as Router } from "react-router-dom";
  
import {GlobalContext} from './GlobalContext'
ReactDOM.render(
    <GlobalContext>
      <Router>
         <App/>
      </Router>
    </GlobalContext>,
   document.getElementById('root')
 )