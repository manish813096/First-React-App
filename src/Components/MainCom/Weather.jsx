import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

const Weather = () => {
  const [inputVal, setInpuval] = useState();
  const [searchVal, setSearchval] = useState();
  const [apiName, setApiname] = useState();
  const [apiTem, setApitemp] = useState();
  const [apiMain, setApimain] = useState();

  const searchHandler = () => {
    setSearchval(inputVal);
  };
  const inputHandler = (element) => {
    setInpuval(element.target.value);
  };
  const getData = () => {
    let apiKey = "c2f923b30781d783589371c74aedbf8c";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiname(data.name);
        setApitemp(Math.round(data.main.temp - 270));
        setApimain(data.weather[0].main);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, [searchVal]);

  return (
    <>
      <div className="container-fluid main-div">
        <div className="conatiner mx-auto w-75 child-div">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-12">
              <h1 className="text-center text-primary">Weather App</h1>
            </div>

            <div className="col-md-10 col-12 w-100 d-flex justify-content-center my-2">
              <div className="weather-box col-12 col-md-6">
                <div className="inputBox bg-dark d-flex align-aitem-center justify-content-center">
                  <input
                    type="text"
                    value={inputVal}
                    placeholder="Enter City Name...."
                    onChange={inputHandler}
                  />
                  <FaSearch
                    className="icons text-primary"
                    onClick={searchHandler}
                  />
                </div>
                {
                    !inputVal? <div className='d-flex my-5 align-items-center justify-content-center'><h3 className='text-center my-5'>Enter City Name</h3></div>: <div className="container my-3 d-flex justify-content-center align-items-center p-3 flex-column">
                    <div className="cityName mx-auto my-2">
                      <h3 className="text-primary">{apiName}</h3>
                    </div>
                    <div className="temp mx-auto my-2">
                      <div>
                        <h2>
                          <span>{apiTem}</span>
                          &deg; Celcius
                        </h2>
                      </div>
                      <div className="main mx-auto my-3">
                        <h4 className="text-center">{apiMain}</h4>
                      </div>
                    </div>
                  </div>
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
