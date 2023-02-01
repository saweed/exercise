import { useDispatch, useSelector } from 'react-redux';
import { getDisplayUnit, setDisplayUnit } from './converterSlice';
function TempConverter() {
  const dispatch = useDispatch();
  const display_unit = useSelector(getDisplayUnit);
  let btncelcls, btnfarcls;
  if(display_unit == 'celcius'){
     btncelcls = 'btn btn-success';
     btnfarcls = 'btn btn-secondary';
  } else {
     btnfarcls = 'btn btn-success';
     btncelcls = 'btn btn-secondary';
  }
  return (
    <div id="temp-converter">
      <div>Temperature Convertor</div>
      <div>
        <button className={btncelcls} onClick={() => dispatch(setDisplayUnit('celcius'))}>Celcius</button>
        <i className="bi bi-arrow-left-right"></i>
        <button className={btnfarcls} onClick={() => dispatch(setDisplayUnit('fahrenheit'))} >Fahrenheit</button>
      </div>
    </div>
  )
}

export default TempConverter