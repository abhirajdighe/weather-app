import React, { useState } from "react";
import axios from 'axios';
import '../Home.css';

const Home = () => {
    const [input, setInput] = useState(" ");
    const [max, setMax] = useState(" ");
    const [min, setMin] = useState(" ");
    const [humidity, setHumidity] = useState(" ");
    

    const onClick = async (e) => {
        e.preventDefault();
        const response = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
            params: { city: input },
            headers: {
                'X-RapidAPI-Key': 'f935d44543mshaf86446fe7a5a43p177a19jsn3bd204dcba68',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        console.log("hi")
        console.log(response.data)
        setHumidity(response.data.humidity)
        setMax(response.data.max_temp)
        setMin(response.data.min_temp)



    }

    return (
        <div className= " divi  ml-4">
            
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Enter city name" />
                <br />
                <input  onClick={onClick} className="mt-2 btn btn-dark" type="button" value="submit" />
                <hr  style={{ height: "4px" }} />
                <div>
                    <p>Maximun Temperature of {input} : {max}</p>
                    <p>Minimum Temperature {input} :{min}</p>
                    <p>Humidity {input} : {humidity}</p>
             
            </div>

        </div>

    )
}

export default Home;