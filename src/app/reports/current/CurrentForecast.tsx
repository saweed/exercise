import React from 'react'
import {useSelector} from 'react-redux'
import { getDisplayUnit } from '../../converter/converterSlice';
import { currentReport } from './currentSlice';

export const formatTemperature = (temp: string, display_unit: string) => {
  if(temp == ''){
    return '';
  }
  if(display_unit == 'fahrenheit') {
    return (1.8*(+temp-273) + 32).toFixed(2);
  } else {
    return (+temp - 271).toFixed(2);
  } 
}
const CurrentForecast = () => {
    const current_report = useSelector(currentReport);
    const display_unit = useSelector(getDisplayUnit);
    const unit_symbol =  '\u00b0' + Array.from(display_unit)[0];
    return (<div className='row' id = "daily-forecast" > 
    {current_report.name ? <><div>Today's Forecast for {current_report.name}</div>
      <div id='forecast' className='col'>
        Current Temperature. {formatTemperature(current_report.main.temp, display_unit)} {unit_symbol.toUpperCase()}<br />
        Weather Condition. {current_report.weather[0].description}<br />
        Highest and Lowed Temp. {`${formatTemperature(current_report.main.temp_max, display_unit) + unit_symbol.toUpperCase()} - ${formatTemperature(current_report.main.temp_min, display_unit) +  unit_symbol.toUpperCase()}`}<br />
      </div>
      {current_report.weather[0].icon ? <div className='col' id='weather-icon'><img src={`http://openweathermap.org/img/wn/${current_report.weather[0].icon}@2x.png`} width="50" height="50" /></div> : ``}</> : ``}
    </div>
    )
}

export default CurrentForecast