import "./Mail.css"

const Mail = () => {
  return (
    <div className="mail">
        <span className="mailTitle">Save time, save money!</span>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Mail