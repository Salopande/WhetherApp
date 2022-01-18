import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {

  const apiKey="83f2d2bee0c218bcbed790a5fac85a93";
  const [data, setData]=useState({});
  const [inputCity,setInputCity]=useState("");
  const getWetherDetails=(cityName)=>{
    if(!cityName) return
    const apiurl="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=" + apiKey;
     axios.get(apiurl).then((res)=>{
       console.log(res);
       setData(res.data);
     }).catch((err)=>{
       console.log(err);
     })
  }
  const handleChangeInput=((e)=>{
    setInputCity(e.target.value);
  });
  
  const handleSearch=()=>{
    getWetherDetails(inputCity);
  }
 

  return (
    <div className="col-md-12">
       <div className="wetherbg">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput}/>
            <button className="btn btn-primary" type="button"
            onClick={handleSearch}
            >Search</button>
          </div>
        </div>
        {Object.keys(data).length>0 &&
        <div className="col-md-12 text-center mt-5">
           <div className="shadow rounded wetherResultBox">
              <img className="wethericon" src="data:image/png;base64,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"/>
              <h5 className="wetherCity">{data?.name}</h5>
              <h6 className="wethertemp">{(data?.main?.temp)}°C</h6>
           </div>
        </div>
        }
    </div>
  );
}

export default App;
