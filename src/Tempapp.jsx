import React,{useEffect, useState} from "react";
import axios from "axios";

import "./style.css";

function changeTheme(){
  console.log("FIRED");
  var element = document.body;
element.classList.toggle("dark-mode");
document.getElementById("one").classList.toggle("colorChange");
document.getElementById("two").classList.toggle("colorChange");
document.getElementById("three").classList.toggle("colorChange");
document.getElementById("four").classList.toggle("colorChange");
document.getElementById("five").classList.toggle("colorChange");
document.getElementById("six").classList.toggle("colorChange");
  }
const Tempapp = () => {
    const [city,setCity]=useState(null);
    const [sky,setSky]=useState(null);
    const[search,setSearch]=useState("");
    const [clothes,setClothes]=useState(["T-Shirts,Cotton Dresses,Skirts,Caps","Beanie, Cardigan, Earmuffs,Jacket,Long Coat,Mittens","It is raining or probably would rain,wear a raincoat or take an umbrella."]);
useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7a9c44c66cb7672e90d095e3406f03e7`
      )
      .then((response) => {
        console.log(response);
        setCity(response.data.main);
        setSky(response.data.weather[0].description);
      })
      .catch((error) => {
        setCity(null);
        // console.log(error);
      });
  }, [search]);
    return (
        <>
        
            <div className="box">
                <div className="inputData">
                    <input placeholder="ENTER LOCATION..." spellCheck="false" onChange={(event) => {
setSearch(event.target.value)
                    }} value={search} type="search" className="inputField"/>
                    <button className="theme" onClick={changeTheme} />
                    </div>
{!city ? (<p className="errorMsg">Wrong City!! No Data Found</p>):(
    <div><div className="info">
    <div className="content">
                        <h2 id="one" className="location">
                             <i className="fas fa-street-view"></i> 
                            {search}
                        </h2>
                      
                        <h1 id="two"  className="temp">
                        {city.temp} °Cel

                        </h1>
                        <h1 id="three" >{sky}</h1>
                        <h3 id="four" className="tempmin_max">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                        </h3>


                        {/* /*<h2 className="">You should wear Jacket,sweaters </h2>*/ }
                        
                      {(city.temp_max>20)?
                      <><i id="five" className="fa fa-clouds-sun fa-2x"></i>
                      <h2  id="six" className="">It is hot.Wear {clothes[0]} </h2></>:
                      <><i id="five" className="fa fa-cloud-snow fa-2x"></i>
                      <h2 id="six" className="">It is cold.Wear {clothes[1]} </h2></>} 


                      </div>
                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div> 
                    </div>
)}
                
                
                      </div>
        </>
    )
}

export default Tempapp;