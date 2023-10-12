import './App.css';
import pic from './pictures/sprint.jpg'
import DescriptionWidgets from "./components/DescriptionWidgets";
import {useEffect, useState} from "react";
import {getFormattedWeatherData} from "./WeatherService";

function App() {
    const [city, setCity] = useState('Brooklyn')

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData('Brooklyn')
        }
        fetchWeatherData()
    }, []);

    return (
        <div className="App" style={{backgroundImage: `url(${pic})`}}>

            <div className='overlay'>
                <div className='container'>
                    <div className='section section_inputs'>
                        <input type="text"
                               placeholder='Enter the City...'
                               name='city'
                        />
                        <button>°F</button>
                    </div>

                    <div className='section section_temperature'>
                        <div className='icon'>
                            <h4>New York, NY</h4>
                            <img src='https://openweathermap.org/img/wn/02n.png' alt='weatherIcon'/>
                            <h4>Cloudy</h4>
                        </div>
                        <div className='temperature'>
                            <h2>18° C</h2>
                        </div>

                    </div>
                    <DescriptionWidgets/>


                </div>
            </div>

        </div>
    );
}

export default App;
