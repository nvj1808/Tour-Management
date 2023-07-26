

import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'




const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autodisplay:true,
        speed:1000,
        swipeToSlide:true,
        autodisplaySpeed:2000,
        slideToShow:3,

        responsive:[
       {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
       },
{
       breakpoint: 567,
       settings: {
        slidesToShow:1,
        slideToScroll:1
       },
},
        ]
      }
  return (

   <Slider className="new1" {...settings}>
    <div className="testimonial  px-3">
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
     Aspernatur adipisci fugiat, omnis nemo nam voluptatum nostrum dicta, 
     possimus quis eum, harum quos praesentium explicabo libero consequatur 
     neque delectus quae Aspernatur!</p>

     <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className="mb-0 mt-3">Nishanth vj</h5>
            <p>Develeper</p>
        </div>
     </div>
    </div>

    <div className="testimonial py-4 px-3">
   <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
     Aspernatur adipisci fugiat, omnis nemo nam voluptatum nostrum dicta, 
     possimus quis eum, harum quos praesentium explicabo libero consequatur 
     neque delectus quae Aspernatur!
     </p>

     <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className="mb-0 mt-3">Aparna</h5>
            <p>Customer</p>
        </div>
     </div>
    </div>

    <div className="testimonial py-4 px-3">
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
     Aspernatur adipisci fugiat, omnis nemo nam voluptatum nostrum dicta, 
     possimus quis eum, harum quos praesentium explicabo libero consequatur 
     neque delectus quae Aspernatur!</p>

     <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className="mb-0 mt-3">Aswin</h5>
            <p>Developer</p>
        </div>
     </div>
    </div>

    
   </Slider>
  )
}

export default Testimonials