import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.title = 'Contact - El Golea Restaurant';
    }, []);

    
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name", "email", "message");

if (name){
    fetch('/FormApi/')
  .then(response => response.json())
  .then(text => {
    
    const newElement = document.createElement('p');
    newElement.className = "mt-2"
    newElement.textContent = text.text;
    document.body.querySelector('form').appendChild(newElement);
  });
}
    return (
        <main>
            <section class="contact-hero">
                <div class="container">
                    <h1><b>Get in Touch</b></h1>
                    <p>Have a question or want to make a reservation? We'd love to hear from you!</p>
                </div>
            </section>
            <section class="contact-info">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h3><b>Address</b></h3>
                            <p><i class="fas fa-home"></i> 123 Main St, Anytown, USA 12345</p>
                        </div>
                        <div class="col-md-4">
                            <h3><b>Phone</b></h3>
                            <p><i class='fas fa-phone-alt'></i> (555) 555-5555</p>
                        </div>
                        <div class="col-md-4">
                            <h3><b>Email</b></h3>
                            <p><i class="fas fa-envelope"></i>  <a href="mailto:info@elgolea.com">  info@elgolea.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-form">
                <div class="container">
                    <h2><b>Take a Reservation</b></h2>
                    <form action="/submit/" method="GET">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" class="form-control"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" >Send</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default Contact;