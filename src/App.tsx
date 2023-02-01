import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './app/reports/Search';
import CurrentForecast from './app/reports/current/CurrentForecast';
import TempConverter from './app/converter/Converter';
import WeeklyReport from './app/reports/weekly/Weekly'
import BarChart from './app/reports/weekly/BarChart';

function App() {
    return (
        <div className="container-fluid">
            <div className="App">
                <header className="App-header">
                    Weather App
                </header>
                <div className="row">
                    <div className="col">
                        <Searchbar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col" id='left-panel'>
                    <CurrentForecast/>
                    <WeeklyReport />
                    </div>
                    <div className="col" id='right-panel'>
                    <TempConverter/>
                    <BarChart />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
