import { useEffect } from "react";
function TermsCondition() {
    useEffect(() => {
        document.title = 'Terms And Conditions- El Golea Restaurant';
      }, []);
    return(
        <main class="container py-5">
        <h1 class="display-4">Terms and Conditions</h1>
        <p class="lead">By using our website, mobile app, or services, you agree to these terms and conditions.</p>
        <section>
            <h2>Introduction</h2>
            <p>[Your Restaurant Name] provides online ordering, delivery, and pickup services for food and beverages. These terms and conditions apply to all users of our services.</p>
        </section>
        <section>
            <h2>Account Registration</h2>
            <p>To use our services, you must register for an account. You must provide accurate and complete information, and keep your account information up to date.</p>
        </section>
        <section>
            <h2>Ordering and Payment</h2>
            <p>By placing an order, you agree to pay for the ordered items and any applicable taxes and fees. We accept various payment methods, including credit cards and online payment services.</p>
        </section>
        <section>
            <h2>Delivery and Pickup</h2>
            <p>We offer delivery and pickup services for our menu items. Delivery times and areas may vary. You must be present to receive your order during the designated delivery time.</p>
        </section>
        <section>
            <h2>Refunds and Cancellations</h2>
            <p>We may cancel or refund orders at our discretion. If you need to cancel or modify an order, please contact us as soon as possible.</p>
        </section>
        <section>
            <h2>Intellectual Property</h2>
            <p>All content on our website and mobile app, including text, images, and logos, is our property and may not be used without our permission.</p>
        </section>
        <section>
            <h2>Dispute Resolution</h2>
            <p>Any disputes arising from these terms and conditions will be resolved through binding arbitration.</p>
        </section>
        <section>
            <h2>Changes to These Terms</h2>
            <p>We may update these terms and conditions from time to time. We will notify you of any changes by posting the updated terms on this page.</p>
        </section>
    </main>
    )
}
export default TermsCondition;