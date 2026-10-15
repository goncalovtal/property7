import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">Livro de Reclamações</a>
        </div>
        <div>© {new Date().getFullYear()} Property 007, Lda · NIF 516158953</div>
      </div>
    </footer>
  );
}
