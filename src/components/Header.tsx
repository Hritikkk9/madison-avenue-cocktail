import Image from "next/image";

const CONTACT_EMAIL = "karan.a@madisonavenuecocktailco.com";

export default function Header() {
  return (
    <header className="site-header animate-fade-in">
      <a href="/" className="site-header__brand" aria-label="Madison Avenue Cocktail Company home">
        <Image
          src="/logo.png"
          alt="Madison Avenue Cocktail Company"
          width={206}
          height={135}
          priority
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 140px, 152px"
          className="site-header__logo"
        />
      </a>

      <div className="site-header__contact">
        <span className="site-header__contact-label">For any inquiries, contact</span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="site-header__contact-email"
          aria-label={`Email us at ${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </header>
  );
}
