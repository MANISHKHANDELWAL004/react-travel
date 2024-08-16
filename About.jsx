import React from "react";
import aboutCSS from './../About/About.module.css'


import aboutImg from './../../assets/about-bg.png'
function About(){
    return(
        <div className={`${aboutCSS.about_Wrapper} section`} id="about">
<div className={aboutCSS.about_image}>
    <img src={aboutImg} alt="about-img" />
</div>
<div className={aboutCSS.about_content}>
    <h2>Discover Organized <br /> Advantures the, <br />
    Ultimate Travel Hack
    </h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ab nostrum fugiat nobis? Officiis pariatur, incidunt voluptas eveniet quibusdam esse.</p>

<div className={aboutCSS.about}>
<p><i className="ri-building-4-line"></i> Accomodation</p>
<p><i className="ri-car-line"></i> Transportation allowance</p>  
<p><i className="ri-magic-line"></i>Exclusive Experiences</p>
<p><i className="ri-instance-line"></i>Local recommendations</p>
<p><i className="ri-pin-distance-line"></i>personalized trip craft</p>
<p><i className="ri-phone-line">27/7 support</i></p>
</div>

</div>



        </div>
    )
}

export default About