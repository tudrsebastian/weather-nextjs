/* eslint-disable @next/next/no-img-element */
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import {API_KEY} from '../../pages/api/weatherAPI';


 const CurrentLocation=()=> {
    const [latitude,setLatitude] = useState(0);
    const [longitude,setLongitude] = useState(0);
    const [temp,setTemp] = useState('');
    const [name,setName] = useState('');
    const [country,setCountry] = useState('');
    const [icon,setIcon] = useState('');
    const [description,setDescription] = useState('');
    let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const savePosition = (position) =>{
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }



    useEffect(()=>{
      
const fetchWeather = async () =>{
    try{
  await window.navigator.geolocation.getCurrentPosition(savePosition);
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        setTemp(res.data.main.temp);
        setName(res.data.name);
        setCountry(res.data.sys.country);
        setIcon(res.data.weather[0].icon)
        setDescription(res.data.weather[0].description)
        console.log(res.data);
       
    } catch (err){
        console.error(err);
    }
}
fetchWeather();
    })
  return (
    <>
    
<div className=" flex items-center justify-center">
  <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
    <div>
        <img alt='weathericon' 
        
        src= {iconURL} 
        />

        
     
      <p className="text-center text-gray-500 mt-2 text-sm">{description}</p>
      </div>
    <div>
      <p className="text-7xl font-bold text-right text-gray-900">{temp}&deg;</p>
      <p className="text-gray-500 text-sm">{name}, {country}</p>
    </div>
  </div>

 
</div>
  
    <div></div>
    </>
  )
}

export default CurrentLocation;