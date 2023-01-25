import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    const date = new Date()
    // console.log(date)
    const options={weekday: 'short', year:'numeric', month:'short',day:'numeric'}
    return (
        <div className='navbar_top'>
            <div className="top1">
                <p>EDITION</p>
                <p>
                    <img className="inflag" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" /> IN
                </p>
                <div className='navbar_dateTime'>
                    <p>{date.toLocaleDateString("en-US",options).toUpperCase()} | UPDATED {date.toLocaleTimeString()} IST</p>
                </div>
                <div className="navbar_cityTemp">
                    <p>NOIDA<span className='navbar_cityTemp_span' role={'img'}>🌑 24°</span>C</p>
                </div>
            </div>
            <div className="top2">
                <div>
                    <p>
                        <span className='navbar_timesPoints'>
                            Subscribe to TOI+
                        </span>
                    </p>
                </div>
                
                <p className='navbar_signIn' >SIGN IN</p>
                <p className='social_media_icons'><a href="https://twitter.com/timesofindia" className="fa fa-twitter"></a></p>
                <p className='social_media_icons'><a href="https://www.facebook.com/TimesofIndia" className="fa fa-facebook"></a></p>
                <p className='social_media_icons'><a href="https://www.youtube.com/channel/UCckHqySbfy5FcPP6MD_S-Yg" className="fa fa-youtube"></a></p>
            </div>
        </div>
    )
}

export default Navbar
