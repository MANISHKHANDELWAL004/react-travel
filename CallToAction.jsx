import React from "react";
import calltoactionCSS from './../Footer/CallToAction.module.css'

function CallToAction(){
    return(
        <div className={`${calltoactionCSS.CalltoAction_wrapper} section`}>
            <h2>Explore Iconic Popular Destination <br />
            with Expert Insiders
            </h2>
            <button>Book Advanture</button>
        </div>
    )
}

export default CallToAction