import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import './components/Sidebar.css'

import chart from "./components/icons/chart.PNG"


function App(){
    return(
        <div className="App">
            <Sidebar/>
            <div className="Dashboard">
                <div className="Over">
                    Overview
                </div>
                    <hr  style={{
                        color: '#D4D6DD',
                        backgroundColor: '#D4D6DD',
                        height: .3,
                        border:0,
                    }}/>
                <div className="chart">
                <img className="chartimg" src={chart} alt="fireSpot" />
                </div>
                    
            </div>
                
                
        </div>
            
     );

}

export default App;