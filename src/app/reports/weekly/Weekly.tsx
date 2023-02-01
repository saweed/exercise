import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Card from './Card';
import {weeklyReport} from './weeklySlice';



const WeeklyReport = () => {
    const weekly_data = useSelector(weeklyReport);
    const [startIndex, setStartIndex] = useState(0);
    const [loadedCards, setLoadedCards] = useState([0, 1, 2]);
    const handleNavigation = (direction : string) => {
        if (startIndex > 0 && direction == 'left') {
            const updatedCards = loadedCards.map(item => item - 1)
            setLoadedCards(updatedCards)
            setStartIndex(startIndex - 1);
        }
        if (startIndex < 2 && direction == 'right') {
            const updatedCards = loadedCards.map(item => item + 1)
            setLoadedCards(updatedCards)
            setStartIndex(startIndex + 1);
        }
    }
    const navigators = (
        <>
        <i className="bi bi-arrow-left" onClick={() => handleNavigation('left')}></i>
        <i className="bi bi-dash"></i>
        <i className="bi bi-dash"></i>
        <i className="bi bi-dash"></i>
        <i className="bi bi-arrow-right" onClick={() => handleNavigation('right')}></i></>
      )
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
                                    <div className="row">
                                        {Object.keys(weekly_data).length !== 0 &&
                                            loadedCards.map(num => {
                                                return <Card key={num} title={num} empty={false}/>
                                            })
                                        }
                                        {Object.keys(weekly_data).length !== 0 &&
                                            navigators
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

export default WeeklyReport