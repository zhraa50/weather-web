
import './App.css';
import { useEffect, useState } from 'react';


const App =()=> 
{
  const [counterName, setCountryName] = useState('');
  const [searhCountry, setSearhCountry] = useState('');
  const [datatemperature, setdatatemperature] = useState('');
  const [wind, setwind] = useState('');



  useEffect(() => {

      const getDataFromApi = async () => {
        const request = await fetch('https://goweather.herokuapp.com/weather');
        const data = await request.json();
        setdatatemperature(data.temperature.value);
        setwind(data.wind.value);
    
      };
      getDataFromApi();
    }, []);

    const onClick = async (e) => 
    {
   
      const request = await fetch(
        'https://goweather.herokuapp.com/weather/' + counterName
      );

      const data = await request.json();

        setSearhCountry(counterName);
        setdatatemperature(data.temperature);
        setwind(data.wind);
        setCountryName('');


      };

  return (
           < div className='app'>
          <>
          <h1 className='text-center'>Weather App</h1>
          <div className='input-group  mt-3'>


         
           <img
            src="https://cdn1.vectorstock.com/i/1000x1000/66/05/cartoon-characters-weather-forecast-set-vector-21106605.jpg"
            width='600rem'
            height='300rem'
            alt='weather'
            className='rounded mx-auto d-block'
             >
          </img>
          <div className='text-center mt-3   w-100'>
            <input
              type='text'
              value={counterName}
              onChange={(e) => setCountryName(e.target.value)}
              placeholder='city name'
            ></input>

            <h3 className='text-center mt-3 w-100'>
             The weather info in {' '} <span style={{ color: 'darkblue' }}>{searhCountry}</span>: </h3>
            <div className='info mt-3'>
          
               <button
              onClick={onClick}
              className='btn btn-outline-secondary'
              type='button'
            >
              Get data
            </button>
            <div className='flex'>
                <h3 className="card-Temperature">Temperature</h3>
                <h3 className="text-center">{datatemperature}</h3>
             
              <div className='flex'>
                <h3 className="card-Wind">Wind</h3>
                <h3 className="text-center">{wind}</h3>
              </div>



         


</div>
              </div>

              </div>

</div>

            
         
</>

</div>
  );
  

  };

export default App;
