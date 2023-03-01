import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom"
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = ({type}) => {
  const navigate=useNavigate();
  const [destination,setDestination]=useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [option, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    // setOptions(prev=>{return {
    //   ...prev,
    //   [name]:operation==="i"?option[name]+1:option[name]-1
    // }})
    console.log(8);
    setOptions({
      ...option,
      [name]: operation === "d" ? option[name] - 1 : option[name] + 1,
    });
  };
  const handleSearch=()=>{
    navigate("/hotels",{state:{option,date,destination}});
  }
  return (
    <div className="header">
      <div className={type==="hotels"?"headerContainer hotelsMode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        { type!=="hotels" && <><h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
          Search low prices on hotels, homes and much more...
        </p>
        <button className="headerButton">sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${option.adult} adults - ${option.children} children - ${option.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">adult</span>
                  <div className="optionCounter">
                    <button
                    disabled={option.adult<=1}
                      className="optionCounterBtn"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.adult}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">children</span>
                  <div className="optionCounter">
                    <button
                    disabled={option.children<=0}
                      className="optionCounterBtn"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {option.children}
                    </span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">room</span>
                  <div className="optionCounter">
                    <button
                    disabled={option.room<=1}
                      className="optionCounterBtn"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.room}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}{" "}
          </div>
          <div className="headerSearchItem">
            <button onClick={handleSearch} className="headerButton">Search</button>
          </div>
        </div> </>}
      </div>
    </div>
  );
};

export default Header;
