import React from "react";
import { useState } from "react";
import Cards from "./Components/user";
import "./App.css";

function App() {
  const [isLoader, setIsLoader] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [ButtonClick, setButtonClick] = React.useState(false);
  const handleClick = () => {
    setButtonClick(true);
    // To fetch data 
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsLoader(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="datacontainer">
        
        <div class="navitem" id="mynavitem">
         
          <a href="#getusers" class="btn" onClick={handleClick}>Get Users</a>
          
        </div>

        <div className="container">
          <div className="row justify-content-center ">
            {ButtonClick ? (
              isLoader ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
            ) : (
              <div className="footer">
               {  <p> #Lets'sGrowMore </p> }
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
