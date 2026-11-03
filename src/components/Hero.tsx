import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-label="Coming soon">
      <div className="hero__content">
        <p className="hero__eyebrow animate-fade-up delay-1">
          <span className="hero__eyebrow-line" aria-hidden="true" />
          Madison Avenue Cocktail Company
        </p>

        <h1 className="hero__title animate-fade-up delay-2">
          <span className="hero__title-line">Bar-quality classics.</span>
          <span className="hero__title-accent">Ready to drink.</span>
        </h1>

        <p className="hero__copy animate-fade-up delay-3">
          Your favorite traditional cocktails, ready whenever the occasion
          calls. All the character of a great cocktail bar, in a jar.
        </p>

        <div className="hero__cta-wrap animate-fade-up delay-4">
          <span className="hero__cta" role="status">
            <span className="hero__cta-star" aria-hidden="true">
              ✦
            </span>
            Coming Soon
          </span>
          <p className="hero__tagline">Something classic is on its way.</p>
        </div>
      </div>

      <div className="hero__media animate-fade-in delay-2">
        <div className="hero__media-frame">
          <Image
            src="/hero-lounge.jpg"
            alt="Elegant Midtown lounge overlooking the New York City skyline at dusk"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 52vw"
            className="hero__image"
          />
          <span className="hero__media-note">For illustration</span>
        </div>
      </div>
    </section>
  );
}
