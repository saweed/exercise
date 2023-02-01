import React from 'react'
import {useSelector} from 'react-redux';
import { getDisplayUnit } from '../../converter/converterSlice';
import { formatTemperature } from '../current/CurrentForecast';
import Card from './Card';
import {barData} from './weeklySlice';

const BarChart = () => {
    const bar_data = useSelector(barData);

    const display_unit = useSelector(getDisplayUnit)
    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            id="carouselExampleIndicators2"
                            className="carousel slide"
                            data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row" style={{alignItems: 'self-end'}}>
                                        {
                                            bar_data.length && bar_data.map((data:any, i: number) => {
                                                return (
                                                <Card key={i} title={i} height={formatTemperature(data.main.temp, display_unit)} width='3rem' empty={true} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BarChart