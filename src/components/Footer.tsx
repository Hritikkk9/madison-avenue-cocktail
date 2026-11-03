const classics = ["Margarita", "Cosmopolitan", "Old Fashioned"] as const;

export default function Footer() {
  return (
    <footer className="site-footer animate-fade-in delay-5">
      <div className="site-footer__classics">
        <span className="site-footer__label">Meet the classics</span>

        <ul className="site-footer__list">
          {classics.map((name, index) => (
            <li key={name} className="site-footer__item">
              {index > 0 && (
                <span className="site-footer__star" aria-hidden="true">
                  ✦
                </span>
              )}
              <span>{name}</span>
            </li>
          ))}
        </ul>

        <span className="site-footer__tag">Timeless taste. Ready to enjoy.</span>
      </div>

      <div className="site-footer__legal">
        <p>© 2026 Madison Avenue Cocktail Company</p>
        <p>
          <span>New York, NY</span>
          <span className="site-footer__dot" aria-hidden="true">
            ·
          </span>
          <span>Enjoy responsibly. 21+</span>
        </p>
      </div>
    </footer>
  );
}
