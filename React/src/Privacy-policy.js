import { useEffect } from "react";
function PrivacyPolicy(params) {
    useEffect(() => {
        document.title = 'Privacy Policy - El Golea Restaurant';
      }, []);
    return(
        <main className="container py-5">
        <h1 className="display-3 font-weight-bolder">Privacy Policy</h1>
        <p class="lead">At El Golea, we are committed to protecting the privacy of our customers and visitors.</p>
        <section>
            <h2><b>Information We Collect</b></h2>
            <p>We collect personal information from you when you:</p>
            <ul>
                <li>Make a reservation or place an order online</li>
                <li>Sign up for our newsletter or loyalty program</li>
                <li>Participate in a contest or survey</li>
            </ul>
        </section>
        <section>
            <h2><b>How We Use Your Information</b></h2>
            <p>We use your personal information to:</p>
            <ul>
                <li>Process your orders and reservations</li>
                <li>Send you newsletters and promotional offers</li>
                <li>Improve our services and website</li>
            </ul>
        </section>
        <section>
            <h2><b>Sharing Your Information</b></h2>
            <p>We do not share your personal information with third parties, except:</p>
            <ul>
                <li>When required by law or to comply with legal process</li>
                <li>With our service providers, such as payment processors and email marketing platforms</li>
            </ul>
        </section>
        <section>
            <h2><b>Security</b></h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or use.</p>
        </section>
        <section>
            <h2><b>Changes to This Policy</b></h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the updated policy on this page.</p>
        </section>
    </main>
    )
}
export default PrivacyPolicy;