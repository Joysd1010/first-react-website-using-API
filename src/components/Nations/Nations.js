import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Nations.css'
const Nations = () => {
    const [Nation,setNation]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setNation(data));
    },[])
    return (
        <div className='CountryContainer'>

            
            {
                Nation.map(Nations=> <Country country ={Nations}
                 key={Nations.cca3}
                ></Country>
                
                )
            }
        </div>
    );
};

export default Nations;