import './style.css';
import { useEffect } from 'react';
import random1 from './images/random1.jpg';
import random2 from './images/random2.jpg';
import random3 from './images/random3.jpg';
import italianPizza from './images/italian-pizza.jpg';
import southPizza from './images/south-pizza.jpg';
import zingerPizza from './images/zinger-pizza.jpg';

function Home() {
    useEffect(() => {
        document.title = 'Home - El Golea Restaurant';
      }, []);
    
    return (
        
      <main>
        
      <section class="hero">
          <div class="container">
              <h1>Welcome to El Golea Restaurant</h1>
              <p>Experience the best of Middle Eastern cuisine</p>
              <a class="btn  btn-primary" href="/menu">Order Online</a>
              <a class="btn btn-secondary" href='/contact'>Reserve Table</a>
          </div>
      </section>
      <section class="reviews">
          <div class="container">
              <h2><b>Reviews</b></h2>
              <p>Our customers love us!</p>
              <div class="row">
                  <div class="col-md-4">
                      <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> 5/5
                  </div>
                  <div class="col-md-4">
                      <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> 5/5
                  </div>
                  <div class="col-md-4">
                      <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> 5/5
                  </div>
              </div>
          </div>
      </section>
      <section class="achievements">
          <div class="container">
              <h2><b>Achievements</b></h2>
              <p>We're proud of our accomplishments!</p>
              <div class="row">
                  <div class="col-lg-4">
                      <div class="card" style={{width: '18rem'}}>
                          <i class="fas fa-trophy"></i>
                          <div class="card-body">
                            <p class="card-text">Best Restaurant in Town (2020)</p>
                          </div>
                        </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="card" style={{width: '18rem'}}>
                          <i class="fas fa-trophy"></i>
                          <div class="card-body">
                            <p class="card-text">Top Rated Restaurant (2019)</p>
                          </div>
                        </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="card" style={{width: '18rem'}}>
                          <i class="fas fa-trophy"></i>
                          <div class="card-body">
                            <p class="card-text">Certificate of Excellence (2018)</p>
                          </div>
                        </div>
                  </div>
              </div>
          </div>
      </section>
      <section class="random-pictures">
          <div class="container">
              <div class="d-flex justify-content-between align-items-end">
              <h2><b>Gallery</b></h2>
              <a href="/gallery" class="d-flex">See More</a>
              </div>
              <p>Check out our restaurant and dishes!</p>
              <div class="row">
                  <div class="col-md-4">
                      <img src={random1} alt="Random Image 1" />
                  </div>
                  <div class="col-md-4">
                      <img src={random2} alt="Random Image 2" />
                  </div>
                  <div class="col-md-4">
                      <img src={random3} alt="Random Image 3" />
                  </div>
              </div>
          </div>
      </section>
      <section class="top-dishes">
          <div class="container">
                  <div class="d-flex justify-content-between align-items-end">
              <h2><b>Top Dishes</b></h2>
              <a href="/menu" class="d-flex">See More</a>
              </div>
              <p>Our most popular dishes!</p>
              <div class="row">
                  <div class="col-md-4">
                      <img src={italianPizza} alt="Italian Pizza" />
                      <p class="text-center"><b>Italian Pizza</b></p>
                  </div>
                  <div class="col-md-4">
                      <img src={southPizza} alt="South Pizza" />
                      <p class="text-center"><b>South Pizza </b></p>
                  </div>
                  <div class="col-md-4">
                      <img src={zingerPizza} alt="Zinger Pizza" />
                      <p class="text-center"><b>Zinger Pizza</b></p>
                  </div>
              </div>
          </div>
      </section>
  </main>
        
        
          
    );
  }
  
  export default Home;