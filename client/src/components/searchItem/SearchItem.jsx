import "./SearchItem.css"

const HotelsSearch = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/400512287.webp?k=d40cf9aeb8dc61f2414b42a216191d66a528003f7cda5f6b1086246a94d15823&o=&s=1" alt="" className="siImg" />
        <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">Entire Studio -1bathroom -21m2 1 full bed</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailText">
            <span className="siPrice">123Rs.</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckBtn">See availabiliy</button>
            
          </div>
        </div>
    </div>
  )
}

export default HotelsSearch