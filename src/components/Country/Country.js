import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,area,region,flags,capital,population}=props.country
    
   
    
    return (
        <div className='countryElement'>
            
            <h2>Country Name : {name.common}</h2>
            <img className='flag' src={flags.png} alt="" />
            <h3>Capital : {capital}</h3>
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>
            <h4>Region : {region}</h4>
            
        </div>
    );
};

export default Country;