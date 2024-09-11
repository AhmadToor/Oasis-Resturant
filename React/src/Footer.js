import './style.css'
function Footer() {
    return(
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4><b><u>El Golea Restaurant</u></b></h4>
                    <p><i class="fas fa-home"></i> 123 Main St, Anytown, USA 12345</p>
                    <p><i class='fas fa-phone-alt'></i>  555-555-5555</p>
                    <p><i class='fa fa-fax'></i>  555-555-5556</p>
                </div>
                <div class="col-md-4">
                    <h4><b><u>Follow Us</u></b></h4>
                    <ul class="social-media">
                        <li>
                            <a href="#" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4><b><u>Quick Links</u></b></h4>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/term-and-conditions">Terms & Conditions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2023 El Golea Restaurant. All rights reserved.</p>
        </div>
    </footer>
    )
    
}
export default Footer;