import React from 'react';
import { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../App.css";
import { Dropdown } from 'semantic-ui-react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { cities, types, ranges } from '../constants';


const Filtersection = (props) => {

  const [date, setDate] = useState(new Date());
  const [calendarState, setCalendarState] = useState(false);
  const [selected, setSelected] = useState(false)

  return (
    <div className='flex flex-col'>
    <div className='flex flex-col sm:flex-row bg-pastelblue-light mx-3 rounded-lg px-1 pt-1 drop-shadow'>
      <div className='w-full py-0.5 px-0.5 sm:w-1/4'>
        <Dropdown 
          className='font-montserrat'
          placeholder='Location'
          floating
          fluid
          selection
          onChange={(e, {value}) => {
            return (
              props.onCityConfirm(value)
            )
          }}
          options={cities}
        />
      </div>
      <div className='flex flex-row sm:w-1/2'>
        <div className='w-1/2 py-0.5 px-0.5'>
          <Dropdown 
            className='font-montserrat'
            placeholder='Price Range'
            fluid
            selection
            onChange={(e, {value}) => {
              return (
                props.onRentConfirm(value)
              )              
            }}
            options={ranges}
          />
        </div>
        <div className='w-1/2 pt-0.5 px-0.5'>
          <Dropdown 
            className='font-montserrat'
            placeholder='Type'
            fluid
            floating
            selection
            onChange={(e, {value}) => {
            return (
              props.onTypeConfirm(value)
            )
          }}
            options={types}
          />
        </div>
      </div>
      <div className='pb-1 sm:w-1/4'>
        <div className='bg-white border rounded m-0.5 drop-shadow-sm px-4'>
          <button className='font-montserrat text-md text-gray-300 py-2 px-2' onClick={() => {
            return setCalendarState(!calendarState)
          }}> {(!calendarState&&(!selected))&&"Select Date"} {selected&&date.toDateString()}<CalendarMonthIcon className='pt-0.5 pb-1 text-gray-500 w-full'/> 
          </button>
        </div>
      </div>
    </div>
    <div className='bg-transparent overflow-auto h-72 rounded-lg m-4 h-1/2 drop-shadow sm:w-1/3 sm:ml-[65.8%] sm:h-1/2'>
        {calendarState&&<div className='px-8 sm:px-0'>
          <Calendar
              onClickDay={(e) => setDate(e)}
              value={date}
              maxDate={new Date(2022, 12, 1)}
              minDate={new Date()} 
            />
            <button 
              onClick={() => {
                setCalendarState(false);
                setSelected(true)
                return (
                  props.onDateConfirm(date)
                )
              }}
              className="bg-pastelblue-dark hover:bg-blue-600 text-white font-montserrat font-bold m-2 py-2 rounded-md w-11/12">
              Confirm
            </button>
            </div>}
      </div> 
    </div>
  )
}

export default Filtersection
