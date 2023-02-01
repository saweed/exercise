import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrent } from './current/currentSlice'
import { setWeekly } from './weekly/weeklySlice'

function Searchbar() {
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState('Name');
  const dispatch = useDispatch()
  useEffect(() => {
    // debounce for delayed requests.
    const setCurrentReport = setTimeout(async() => {
        if(!search){
            return;
        }
        try {
            let location;
            if(searchBy == 'Zip'){
              location = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${search},US&limit=1&appid=7b32ecad50d890200409bc0a460b5135`);
              var {lat, lon} = location.data;
            } else {
              location = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=7b32ecad50d890200409bc0a460b5135`);
              var {lat, lon} = location.data[0];
            }
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b32ecad50d890200409bc0a460b5135`);
            dispatch(setCurrent(data.data));
            const weekly = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7b32ecad50d890200409bc0a460b5135`);
            dispatch(setWeekly(weekly.data));
        } catch(e) {
            console.log(e)
        }
    }, 400)

    return () => clearTimeout(setCurrentReport)
  }, [search])
  return (
    <>
    <div>
    <input value={search} type="text" onChange={(e) => setSearch(e.target.value)} />
    <select onChange={(e) => {setSearchBy(e.target.value)}}>
      <option value='Name'>Name</option>
      <option value='Zip'>Zip</option>
    </select>
    </div>
    </>
  )
}

export default Searchbar