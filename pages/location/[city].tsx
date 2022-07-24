/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import cities from '../../components/lib/city.list.json';
import Head from 'next/head';
import Weather from '../../components/Weather/Weather';
import Link from 'next/link';
//@ts-ignore
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
//@ts-ignore
export async function getServerSideProps(context) {
    const city = getCity(context.params.city)
    if (!city) {
        return {
            notFound: true,
        }
    }



    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${API_KEY}&units=metric`)

    const data = await res.json();
    console.log(data)
    if (!data) {
        return {
            notFound: true,
        }
    }


    // const slug = context.params.city;


    return {
        props: {

            city: data.name,
            weather: data.weather,
            country: data.sys.country,
            temp: data.main.temp,
            humidity: data.main.humidity,
            feels: data.main.feels_like,
            wind: data.wind.speed,
            clouds: data.clouds.all,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min


        }
    }
}
//@ts-ignore
const getCity = param => {
    const cityParam = param.trim();

    const splitCity = cityParam.split('-');
    const id = splitCity[splitCity.length - 1];
    console.log(id)
    if (!id) {
        return null;
    }
    //@ts-ignore
    const city = cities.find(city => city.id.toString() === id)

    if (city) {
        return city;
    } else {
        return null;
    }
}
// @ts-ignore
export default function City({ city, weather, country, temp, wind, clouds, feels, humidity, tempMax, tempMin }) {

    return (
        <div>
            <Head>
                <title>{city} Weather</title>
            </Head>
            <Link href='/'>
                <a className="px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200">Back</a>
            </Link>

            <Weather city={city} weather={weather} country={country} temp={temp} clouds={clouds} wind={wind} feels={feels} humidity={humidity} tempMax={tempMax} tempMin={tempMin}
            />
        </div>
    )
}
