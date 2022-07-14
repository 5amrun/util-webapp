import {useEffect, useRef, useState, createRef} from 'react';

import './Weather.css';


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={78653aeacdefb45208e8dbe3c4087722}


function Weather(props){
    const [city, setCity] = useState({name: 'Austin', countryCode: 'US', lon: null, lat: null});
    // const inputVal = useRef('Austin, US');
    const inputRef = createRef();
    const [cityList, setCityList] = useState([]);

    useEffect(() => {
        // console.log(city);
        
    }, [city]);

    
    const handleKeyDown = (e) => {
        if(e.key == 'Enter'){
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '6c716815f1msh99c361e278e8b58p12bd1bjsna3202c5a8086',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                }
            };
            
            fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${e.target.value ? e.target.value:'Austin'}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setCityList(response.data);
                    // setCity(response.data[0].city);
                })
                .catch(err => console.error(err));
        }
        
    }

    const handleCityClick = (e) => {
        // console.log(e.target.innerHTML);
        const item = cityList[Number(e.target.getAttribute('name'))];
        setCity({
            name: item.city,
            countryCode: item.countryCode,
            lon: item.latitude,
            lat: item.longitude,
        });
        inputRef.current.value = `${item.name},  ${item.countryCode}`;
        setCityList([]);
    }

    
    return (
        <div className='weatherContainer'>
            <p style={{backgroundColor: '#ccc'}}>Weather: </p>

            <input name={city.name} type={'text'} placeholder={'Type City...'} onKeyDown={handleKeyDown} ref={inputRef} />
            {/* value={`${city.name},  ${city.countryCode}`} */}
            <div className='cityListResult'>
                {cityList.length>0 && 
                <ul>
                    {cityList.map((item, i) => <li key={i} name={i} onClick={handleCityClick}>{item.city}, {item.countryCode}</li> )}
                </ul>}
            </div>
        </div>
    );
}


export default Weather;

