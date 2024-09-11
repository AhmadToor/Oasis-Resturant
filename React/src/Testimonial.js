import { useEffect } from 'react';
import testimonial1 from './images/testimonial1.jpg'
import testimonial2 from './images/testimonial2.jpg'
import testimonial3 from './images/testimonial3.jpg'
function Testimonial(){
    useEffect(() => {
        document.title = 'Testimoinals - El Golea Restaurant';
      }, []);
    return(
        <main>
        <section class="testimonial-hero">
            <div class="container">
                <h1>What Our Customers Say</h1>
                <p>Don't just take our word for it, hear from our satisfied customers!</p>
            </div>
        </section>
        <section class="testimonials">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="testimonial">
                            <img src={testimonial1} alt="Testimonial 1" />
                            <h3>John Doe</h3>
                            <p>"I've been going to El Golea for years and it never disappoints. The food is always delicious and the service is top-notch."</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="testimonial">
                            <img src={testimonial2} alt="Testimonial 2" />
                            <h3>Jane Smith</h3>
                            <p>"I'm so glad I found El Golea! The atmosphere is cozy and intimate, and the food is always fresh and flavorful."</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="testimonial">
                            <img src={testimonial3} alt="Testimonial 3" />
                            <h3>Bob Johnson</h3>
                            <p>"El Golea is my go-to spot for special occasions. The staff is always friendly and accommodating, and the food is always impressive."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Testimonial;