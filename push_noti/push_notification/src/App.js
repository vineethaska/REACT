//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReactNotification from 'react-notification-component'
//import { store } from "react-notifications-component"
//import "animate.css"
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div className="app">
      <h1>push Notification</h1>
      <ReactNotification/>
      <Home />
    </div>
  );
}
function Home(){
  return(
    <div>
      <button>
        default
      </button>
    </div>
  )
}

export default App;
