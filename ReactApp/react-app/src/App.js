import {ToastContainer, toast, Zoom, Bounce} from "react-toastify";
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import './App.css';

//toast.configure()
const App = () => {
  const successToast = () => {
    toast("this is success custom Toast",{
      className: "custom.toast",
      draggable: true,
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  toast.error("Oh No Error");
  toast.success("you success");
  toast.info("you bhave info");
  toast.warn("you have been warn");
  
  axios.get("/rdfggjk")
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    if(err){
      toast("API ERROR", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_CENTER
      })
    }
  })

  return (
    <div className="App">
      <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000}/>
      </>
      <button onClick={successToast}> invoke success toast</button>
    </div>
  );
}

export default App;
