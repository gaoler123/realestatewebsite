import React, { useState } from 'react';
import Property from './Property';
import Filtersection from './Filtersection';
import propertiesList from '../constants';
import Heading from './Heading';

const Mainsection = () => {
    const [loc, setLoc] = useState(["Mumbai", "Ahemdabad", "Delhi"]);
    const [building, setBuilding] = useState(["Bungalow", "Villa"]);
    const [rent, setRent] = useState([0, 20000]);
    const [booking, setBooking] = useState(new Date(2023, 0, 1));  

  return (
    
    <div className='flex flex-col'>
    <Heading title = "Search for properties to rent"/>
    <Filtersection 
        onDateConfirm={(dateCaptured) => setBooking(dateCaptured)}
        onCityConfirm={(cityName) => setLoc([cityName])}
        onRentConfirm={(rentRange) => setRent([rentRange, rentRange+1000])}
        onTypeConfirm={(typeName) => setBuilding([typeName])}
    />
    <Heading title="Results"/>
    <div className='flex flex-col flex-wrap sm:flex-row'>
    {propertiesList.filter(item => loc.includes(item.city)
    ).filter(item => building.includes(item.type)
    ).filter(item => booking.getTime() >= item.availability.getTime()
    ).filter(item => item.rate > rent[0] && item.rate <= rent[1] 
    ).map(item => 
        <Property 
            key = {item.key}
            img = {item.img}
            rate = {item.rate}
            name = {item.name}
            type = {item.type}
            address = {item.address}
            availability = {item.availability}
            city = {item.city}
            details = {item.details} 
        />
    )}
    </div>
        
    </div>
)}

export default Mainsection