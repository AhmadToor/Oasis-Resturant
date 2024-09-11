import { useEffect } from 'react';
import aboutImage from './images/about-image.jpg'
import teamMember from './images/team-member.jpg'
function About() {
    useEffect(() => {
        document.title = 'About - El Golea Restaurant';
      }, []);
    return(
        <main>
        <section class="about-hero">
            <div class="container">
                <h1><b>About Us</b></h1>
                <p>Welcome to El Golea Restaurant, where we serve up delicious food and warm hospitality.</p>
            </div>
        </section>
        <section class="about-story">
            <div class="container">
                <h2><b>Our Story</b></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                <img src={aboutImage} alt="About Image" />
            </div>
        </section>
        <section class="about-team">
            <div class="container">
                <h2><b>Meet Our Team</b></h2>
                <div class="row">
                    <div class="col-md-4">
                        <img src={teamMember} alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>Head Chef</p>
                    </div>
                    <div class="col-md-4">
                        <img src={teamMember} alt="Team Member 2" />
                        <h3>Jane Doe</h3>
                        <p>Restaurant Manager</p>
                    </div>
                    <div class="col-md-4">
                        <img src={teamMember} alt="Team Member 3" />
                        <h3>Bob Smith</h3>
                        <p>Sous Chef</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default About;