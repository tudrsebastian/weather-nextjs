import { useState } from "react";
import cities from '../lib/city.list.json'
import Link from "next/link";


const SearchBox = ()=>{
const [query,setQuery] = useState('');
const [results,setResults] =useState([])

const onChange = (e)=>{
const {value} = e.target;
setQuery(value);
    
let matchingCities =[]


if(value.length > 3){
    for(let city of cities){
        if(matchingCities.length >= 5){
            break;
        }
        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match){
            const cityData = {
                ...city,
                slug:`${city.name.toLowerCase().replace(/ /g,'-')}-${city.id}`
            }
            matchingCities.push(cityData);
        }
    }
}
return setResults(matchingCities);
}
 


    return (
        <div className="relative w-52 top-12 left-96">
            <h1 className="font-semibold text-sky-400">Welcome to WeatherApp</h1>
            <div className="flex absolute inset-y-11 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input value={query} onChange={onChange} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
         {query.length > 3 && (
            <ul className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {results.length > 0 ? (
                    results.map((city)=>(
                        <li  key={city.slug}>
                            <Link className="dark:hover:text-white" href={`/location/${city.slug}`}>
                           <a>
                            {city.name}
                            {city.state ? `, ${city.state}` : ''}
                            <span>({city.country})</span>
                           </a>
                            </Link>
                        </li>
                    ))
                ) : (<li className="text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">No Results</li>) }
            </ul>
         )}
        </div>
  
    )
}

export default SearchBox;