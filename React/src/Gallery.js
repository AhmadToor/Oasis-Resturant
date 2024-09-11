import { useEffect } from 'react'
import random1 from './images/random1.jpg'
import random2 from './images/random2.jpg'
import random3 from './images/random3.jpg'
import random4 from './images/random4.jpg'
import random5 from './images/random5.jpg'
import random6 from './images/random6.jpg'
function Gallery() {
    useEffect(() => {
        document.title = 'Gallery - El Golea Restaurant';
      }, []);
    return(
        <main>
        <section class="gallery-hero">
            <div class="container">
                <h1><b>Our Gallery</b></h1>
                <p>Takea look at our restaurant and dishes</p>
            </div>
        </section>
        <section class="gallery">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src={random1} alt="Gallery 1" />
                    </div>
                    <div class="col-md-4">
                        <img src={random2} alt="Gallery 2" />
                    </div>
                    <div class="col-md-4">
                        <img src={random3} alt="Gallery 3" />
                    </div>
                    <div class="col-md-4">
                        <img src={random4} alt="Gallery 4" />
                    </div>
                    <div class="col-md-4">
                        <img src={random5} alt="Gallery 5" />
                    </div>
                    <div class="col-md-4">
                        <img src={random6} alt="Gallery 6" />
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Gallery;