import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getDisplayUnit } from '../../converter/converterSlice';
import { formatTemperature } from '../current/CurrentForecast';
import {setBarData} from './weeklySlice';

const Card = (props : any) => {
    const dispatch = useDispatch();
    const display_unit = useSelector(getDisplayUnit)
    const unit_symbol =  '\u00b0' + Array.from(display_unit)[0];
    var date = new Date();


    var today = new Date();
    var result = today.setDate(today.getDate() + props.title + 1);
    const newTitle = new Date(result)
        .toISOString()
        .split('T')[0];
    const handleClick = (title : any) => {
        dispatch(setBarData(title))
    }
    return (
        props.empty ? 
        <div
        className="col-sm-1">
        <div className="card"
        style={{
            height: props.height + 'px',
            width: props.width,
        }}>
            <div className="card-body">
                <h4 className="card-title"></h4>
                <p className="card-text"></p>
            </div>
        </div>
        <span style={{ width: '3rem', fontSize: 12}} >{props.height} {unit_symbol.toUpperCase()}</span>
    </div>
    :
    <div
            className="col-md-4 mb-3"
            style={{
                cursor: 'pointer'
            }}
            onClick={() => handleClick(newTitle)}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{newTitle}</h4>
                    <p className="card-text"></p>
                </div>
            </div>
        </div>
        
    )
}

export default Card