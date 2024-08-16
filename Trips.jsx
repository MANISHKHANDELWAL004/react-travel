import React from "react";
import TripsCSS from './../Trips/Trips.module.css'

import trip01 from './../../assets/Trips01.jpg'
import trip02 from './../../assets/Trips02.jpg'
import trip03 from './../../assets/Trips03.jpg'
import trip04 from './../../assets/Trips04.jpg'
import trip05 from './../../assets/Trips05.jpg'
import trip06 from './../../assets/Trips06.jpg'
import trip07 from './../../assets/Trips07.jpg'
import trip08 from './../../assets/Trips08.jpg'


function Trips(){
    return(
        <div className={`${TripsCSS.trips_wrapper} section`} id="trips">
            <h2>Popular Trips </h2>


            <div className={TripsCSS.cards}>
                <div className={TripsCSS.card}>
<img src={trip01} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
</div>
<h3>Australia Panorma</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>7 days</span>
<span><i className="ri-map-pin-line"></i>5 places</span>
<span><i className="ri-flag-line"></i>Australia</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$1,200</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                <div className={TripsCSS.card}>
<img src={trip02} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
    <i className="ri-star-line"></i>
</div>
<h3>Best of Spain</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>5 days</span>
<span><i className="ri-map-pin-line"></i>15 places</span>
<span><i className="ri-flag-line"></i>Spain</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$1,850</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                <div className={TripsCSS.card}>
<img src={trip03} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
</div>
<h3>Italy</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>15 days</span>
<span><i className="ri-map-pin-line"></i>8 places</span>
<span><i className="ri-flag-line"></i>Italy</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$1,100</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                <div className={TripsCSS.card}>
<img src={trip04} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
</div>
<h3>Canyonlands</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>5 days</span>
<span><i className="ri-map-pin-line"></i>8 places</span>
<span><i className="ri-flag-line"></i>Canyonlands</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$5,200</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                <div className={TripsCSS.card}>
<img src={trip05} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
</div>
<h3>India</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>10 days</span>
<span><i className="ri-map-pin-line"></i>25  places</span>
<span><i className="ri-flag-line"></i>India</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$1,200</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                <div className={TripsCSS.card}>
<img src={trip06} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
</div>
<h3>France Discovery</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>7 days</span>
<span><i className="ri-map-pin-line"></i>5 places</span>
<span><i className="ri-flag-line"></i>Australia</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$100</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                <div className={TripsCSS.card}>
<img src={trip07} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
</div>
<h3>Japan in work</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>7 days</span>
<span><i className="ri-map-pin-line"></i>5 places</span>
<span><i className="ri-flag-line"></i>Japan in work</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$1,200</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                <div className={TripsCSS.card}>
<img src={trip08} alt="" />
<div className={TripsCSS.TripsContent}>
<div className={TripsCSS.rating}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
</div>
<h3>Explore Bali</h3>

<div className={TripsCSS.TripsDetails}>
<span><i className="ri-calendar-line"></i>7 days</span>
<span><i className="ri-map-pin-line"></i>5 places</span>
<span><i className="ri-flag-line"></i>Explore bali</span>
</div>

<div className={TripsCSS.Pricing}></div>
<span className={TripsCSS.price}>$1,200</span>
<button className={TripsCSS.book}>Book Now</button>
</div>

                </div>
                
            </div>
        </div>
    )
}

export default Trips