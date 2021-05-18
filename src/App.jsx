import React from 'react'
import './App.css'
// all pages
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import ErrorPage from './Pages/ErrorPage'

// Components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import {
    Switch,
    Route,
  } from "react-router-dom";



function App() {
    return (
        <>
          {/*navbar*/}
           <Navbar/>
            <Switch>
               <Route exact path="/" component = {Home}/>
               <Route exact path="/SingleRoom/:slug" component = {SingleRoom} />
               <Route exact path="/Rooms" component={Rooms}/>
               <Route component={ErrorPage} />
            </Switch>
            {/*footer*/}
           <Footer/>
        </>
    )
}

export default App
