import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./Hotels.css"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import HotelsSearch from '../../components/searchItem/SearchItem'
export default function Hotels() {
  const {state}=useLocation();

  // const date=state.date[0];
  const [date,setDate]=useState(state.date);
  const [option,setOptions]=useState(state.option);
  const [destination,setDestination]=useState(state.destination);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar/>
      <Header type="hotels"/>
      <div className="hotelsContainer">
        <div className="hotelsWrapper">
          <div className="hotelsSearch">
            <h1 className="hsTitle">Search</h1>
            <div className="hsItem">
              <label >Destination</label>
              <input type="text" onChange={(e)=>setDestination(e.target.value)} value={destination}/>
            </div>
            <div className="hsItem">
              <label >Check in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{format(date[0].startDate,"dd/MM/yyyy")} to {format(date[0].endDate,"dd/MM/yyyy")}</span>
              {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />
            )}
            </div>
            <div className="hsItem">
              <label >Options</label>
              <div className="hsOptionItem">
                <span className="hsOptonText">Min Price 
                <small> per night</small></span>
                <input type="number" />
              </div>
              <div className="hsOptionItem">
                <span className="hsOptonText">Max Price 
                <small> per night</small></span>
                <input type="number" />
              </div>
              <div className="hsOptionItem">
                <span className="hsOptonText">Adult
                </span>
                <input type="number" value={option.adult} />
              </div>
              <div className="hsOptionItem">
                <span className="hsOptonText">Children
                </span>
                <input min={0} type="number" value={option.children} />
              </div>
              <div className="hsOptionItem">
                <span className="hsOptonText">Room
               </span>
                <input min={1} type="number"  value={option.room}/>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="hotelsResult">
            <HotelsSearch/>
            <HotelsSearch/>
            <HotelsSearch/>
            <HotelsSearch/>
          </div>
        </div>
      </div>
    </div>
  )
}
