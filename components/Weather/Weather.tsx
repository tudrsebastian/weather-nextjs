/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
//@ts-ignore
const Weather = ({ city, weather, country, wind, clouds, temp, humidity, feels, tempMax, tempMin }) => {


    const main = weather.map((weather: { main: string }) => weather.main)

    const description = weather.map((weather: { description: string }) => weather.description)

    return (
        <div>

            <div className="container bg-grey-lightest mx-auto shadow rounded pb-4 bg-cover bg-gradient-to-r from-cyan-500 to-blue-500 " >
                <div className="mt-2 p-4 border-b border-grey-light  text-center">
                    <h1>Weather in</h1>
                    <span className="text-4xl font-thin">{city},{country}</span>
                    <span className="hidden sm:inline-block align-bottom text-xs"></span>
                </div>
                <div className="text-center text-xl text-grey-light p-4 space-x-4">
                    <span className="text-right" >{main}</span>
                    <span className="text-orange-200">Feels like {feels.toFixed(0)}&deg;C</span>
                    <span className="text-left">{description}</span>
                </div>
                <div className="flex justify-center">
                    <div className="text-center p-2">
                        <div className="text-lg text-grey-light">
                            <span className="text-right">{tempMax.toFixed(0)}&deg;C</span>
                            <span className="text-center text-5xl text-white mx-6  font-thin">{temp.toFixed(0)}&deg;C</span>
                            <span className="text-left">{tempMin.toFixed(0)}&deg;C</span>
                        </div>
                        <div className="text-grey-light tracking-wide">
                            Humidity: {humidity}%| Clouds:{clouds} | Wind speed:{wind}
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}


export default Weather;