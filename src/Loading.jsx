import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./App.css";

const Loading = ()=>{

  return(
      <div align ='center' height='50vh%'  >
    <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />    
      <h3 className="laoding-text">Getting Kitchen Ready!!</h3>
      </div>
  )

}

export default Loading;
