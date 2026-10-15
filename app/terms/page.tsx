import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Property 007",
  description: "Terms of Service for Property 007, Lda.",
};

export default function TermsPage() {
  return (
    <main className="legal">
      <h1>Terms of Service</h1>
      <p className="updated">Last updated: 15 October 2026</p>
      <h2>1. Who we are</h2>
      <p>This website is operated by Property 007, Lda ("Property 007", "we", "us"), a company registered in Portugal with NIF/VAT number 516158953 and registered office at Beco Palmira Bastos, 2, 2500-296 Caldas da Rainha, Portugal. Contact: <a href="mailto:info@property7.pt">info@property7.pt</a>.</p>

      <h2>2. Scope</h2>
      <p>These Terms govern your use of this website and any booking, purchase or service contracted with Property 007, including property rentals, property management and related real estate services. By using the website or contracting our services you accept these Terms.</p>

      <h2>3. Services and pricing</h2>
      <p>Service descriptions, prices and availability are provided at the time of booking or in the quote sent to you. All prices are in euros (EUR) and include VAT where applicable, unless stated otherwise. We may update prices at any time, but changes do not affect bookings already confirmed.</p>

      <h2>4. Bookings and payment</h2>
      <p>A booking or order is confirmed once we send written confirmation and the required payment or deposit is received. Payments are processed securely by our payment provider, Stripe. We do not store your full card details. You agree to provide accurate information and to pay all amounts due under the agreed terms.</p>

      <h2>5. Cancellations and refunds</h2>
      <p>Cancellation and refund conditions are set out in your booking confirmation or contract. Where we cancel for reasons within our control, you receive a full refund. Refunds are issued to the original payment method within 14 days. To cancel, email <a href="mailto:info@property7.pt">info@property7.pt</a>. Your statutory rights as a consumer are not affected.</p>

      <h2>6. Guest and client obligations</h2>
      <ul>
        <li>Use properties with care and in line with house rules and applicable law.</li>
        <li>Respect maximum occupancy and check-in/check-out times.</li>
        <li>Report any damage or issue promptly. You are responsible for damage caused by you or your guests beyond normal wear and tear.</li>
      </ul>

      <h2>7. Liability</h2>
      <p>We provide our services with reasonable care and skill. To the extent permitted by law, we are not liable for indirect or consequential losses, or for events outside our reasonable control. Nothing in these Terms limits liability that cannot be limited under Portuguese or EU law, including your statutory rights as a consumer.</p>

      <h2>8. Intellectual property</h2>
      <p>All content on this website is owned by or licensed to Property 007 and may not be reproduced without our permission.</p>

      <h2>9. Privacy</h2>
      <p>We process personal data as described in our <a href="/privacy">Privacy Policy</a>.</p>

      <h2>10. Complaints and dispute resolution</h2>
      <p>Complaints can be sent to <a href="mailto:info@property7.pt">info@property7.pt</a> or submitted through the <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">Livro de Reclamações Eletrónico</a>. Under Law no. 144/2015, consumers may also refer disputes to an alternative dispute resolution (RAL) entity. A list of authorised entities is available at <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener">www.consumidor.gov.pt</a>.</p>

      <h2>11. Governing law</h2>
      <p>These Terms are governed by Portuguese law. Disputes are subject to the competent courts of Portugal, without prejudice to mandatory consumer protection rules in your country of residence.</p>

      <h2>12. Changes</h2>
      <p>We may update these Terms from time to time. The version published on this page at the time of your booking applies.</p>
    </main>
  );
}
