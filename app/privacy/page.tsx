import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Property 007",
  description: "Privacy Policy for Property 007, Lda.",
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: 15 October 2026</p>
      <h2>1. Data controller</h2>
      <p>Property 007, Lda, NIF 516158953, Beco Palmira Bastos, 2, 2500-296 Caldas da Rainha, Portugal, is the controller of your personal data. Contact: <a href="mailto:info@property7.pt">info@property7.pt</a>.</p>

      <h2>2. Data we collect</h2>
      <ul>
        <li>Identification and contact data: name, email, phone, address, ID document where legally required (e.g. guest registration).</li>
        <li>Booking and transaction data: dates, services, amounts, invoices.</li>
        <li>Payment data: processed by Stripe. We receive only limited information such as the last four digits of your card and payment status.</li>
        <li>Communications you send us.</li>
        <li>Basic technical data: IP address and browser information in server logs.</li>
      </ul>

      <h2>3. Why we use it and legal basis</h2>
      <ul>
        <li>To provide and manage the services you request — performance of a contract.</li>
        <li>To issue invoices, keep accounting records and register guests with authorities — legal obligation.</li>
        <li>To prevent fraud and secure our website — legitimate interest.</li>
        <li>To answer your enquiries — legitimate interest or pre-contractual steps.</li>
      </ul>

      <h2>4. Sharing</h2>
      <p>We share data only with service providers who help us operate (payment processing by Stripe, hosting, accounting, booking platforms), with public authorities where required by law, and with professional advisers. We do not sell your data.</p>

      <h2>5. International transfers</h2>
      <p>Some providers, such as Stripe, may process data outside the European Economic Area. Where this happens, transfers are protected by appropriate safeguards such as the EU Standard Contractual Clauses or an adequacy decision.</p>

      <h2>6. Retention</h2>
      <p>We keep personal data only as long as needed for the purposes above. Accounting and tax records are kept for the period required by Portuguese law (generally 10 years).</p>

      <h2>7. Your rights</h2>
      <p>Under the GDPR you have the right to access, rectify, erase, restrict or object to processing of your data, and to data portability. To exercise these rights, email <a href="mailto:info@property7.pt">info@property7.pt</a>. You may also lodge a complaint with the Portuguese data protection authority, CNPD (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">www.cnpd.pt</a>).</p>

      <h2>8. Cookies</h2>
      <p>This website does not use advertising or analytics cookies. Strictly necessary cookies may be set by our payment provider during checkout.</p>

      <h2>9. Changes</h2>
      <p>We may update this policy. The current version is always published on this page.</p>
    </main>
  );
}
