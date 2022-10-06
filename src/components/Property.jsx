import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Property = (props) => {

  const [beds, bathrooms] = props.details;
  let imgURL = props.img;
  return (
    <div className='px-4 py-4 drop-shadow sm:w-1/3 lg:w-1/4'>
      <Card sx={{ maxWidth: "100%" }}>
        <CardContent>
          <div className="px-2 py-2 h-60 w-full">
            <img src={imgURL} className="w-full h-full object-cover object-center"/>
          </div>
          <div className='font-montserrat font-semibold text-2xl py-4'>
            {props.name}
          </div>
            <div className='text-md font-cuprum opacity-50 pb-2'>
              {props.address}, {props.city}
            </div>
            <div className='text-md text-left font-cuprum opacity-50 p-0.5'>
              <BedIcon /> {beds}
            </div>
            <div className='text-md text-left font-cuprum opacity-50 p-0.5'>
              <BathtubIcon /> {bathrooms}
            </div>
            <div className='text-md text-left font-cuprum opacity-50 p-0.5'>
              <CalendarMonthIcon /> Available from {props.availability.toDateString()}
            </div>
        </CardContent>
        <div className='flex text-center px-2 py-2 font-montserrat font-semibold'>
          <div className='w-1/2 py-2 text-lg'>
            ${props.rate}/mo
          </div>
          <button className="bg-pastelred hover:bg-pastelred-dark text-white font-bold px-2 py-2 rounded-md w-1/2">
            Book Now
          </button>
        </div>
      </Card>
    </div>
  )
}

export default Property