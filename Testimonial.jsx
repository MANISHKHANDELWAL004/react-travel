import React from "react";
import testimonialCSS from './../Testimonial/Testimonial.module.css'

import { Swiper,SwiperSlide } from "swiper/react";

import profile1 from './../../assets/Testimonials-02.jpg'
import profile2 from './../../assets/Testimonials-03.jpg'
import profile3 from './../../assets/Testimonials-07.jpg'

import 'swiper/css'
import { Autoplay } from "swiper/modules";


function Testimonial(){
    return(
        <div className={`${testimonialCSS.Testimonial_Wrapper} section`}>
<h2>Exceptional Journey's with Travelia</h2>

<Swiper 
spaceBetween={30}
slidesPerView={3}
loop={true}
breakpoints={{
0:{
  slidesPerView:1, 
},
768:{
    slidesPerView:2,
},
1200:{
    slidesPerView:3,
}

}}
autoplay={{
delay:1500,

}}

modules={[Autoplay]}
className={testimonialCSS.swiper}
>
<SwiperSlide>
<div className={testimonialCSS.Testimonial_Container}>
<div className={testimonialCSS.profile}>
<img src={profile1}alt="" />
<div className={testimonialCSS.detail}>


<span>
    John Doe
</span>
<div className={testimonialCSS.ratings}>

<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-half-fill"></i>
<i className="ri-star-line"></i>

</div>
</div>

</div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sint nesciunt delectus porro autem voluptatum perferendis veritatis animi.</p>


</div>



</SwiperSlide>

<SwiperSlide>
<div className={testimonialCSS.Testimonial_Container}>
<div className={testimonialCSS.profile}>
<img src={profile2}alt="" />
<div className={testimonialCSS.detail}>
<span>
    Kim
</span>
<div className={testimonialCSS.ratings}>

<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-half-fill"></i>

</div>

</div>
</div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sint nesciunt delectus porro autem voluptatum perferendis veritatis animi.</p>


</div>



</SwiperSlide>
<SwiperSlide>
<div className={testimonialCSS.Testimonial_Container}>
<div className={testimonialCSS.profile}>
<img src={profile1}alt="" />
<div className={testimonialCSS.detail}>
<span>
    Anaya
</span>
<div className={testimonialCSS.ratings}>

<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-half-fill"></i>

</div>
</div>

</div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sint nesciunt delectus porro autem voluptatum perferendis veritatis animi.</p>


</div>



</SwiperSlide>

<SwiperSlide>
<div className={testimonialCSS.Testimonial_Container}>
<div className={testimonialCSS.profile}>
<img src={profile3}alt="" />
<div className={testimonialCSS.detail}>
<span>
    dr.
</span>
<div className={testimonialCSS.ratings}>

<i className="ri-star-fill"></i>
<i className="ri-star-fill"></i>
<i className="ri-star-half-fill"></i>
<i className="ri-star-fill"></i>

</div>
</div>

</div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sint nesciunt delectus porro autem voluptatum perferendis veritatis animi.</p>


</div>



</SwiperSlide>

</Swiper>




        </div>
    )
}

export default Testimonial