import React from "react";
import searchCSS from './../Searches/Search.module.css'

function Search(){
    return(
        <div className={`${searchCSS.search_wrapper} section`} id="searches">
        <h2>Popular Searches</h2>
        <div className={searchCSS.Cards}>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>

               <h3>Domestic Trips <span>See America In a New Light</span></h3>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>

               <h3>Vacation in 14 Days <span>Limited Awaiable and Sellig Fast</span></h3>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>

               <h3>Offer for wealthness <span>Save when you are being alone</span></h3>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>

               <h3>Past Guests Benefits <span>Saving with Global Tour Rewards</span></h3>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>

               <h3>Tours under $2000 <span>Browse Our value Vacation</span></h3>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>

               <h3>Offer for Traveling Groups <span>Save when you 9+ Guests</span></h3>
            </div>
        </div>
        </div>
    )
}

export default Search