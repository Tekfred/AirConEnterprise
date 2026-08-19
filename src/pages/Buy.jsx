import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
// import Card from '../components/Card'
import Badge from "../components/Badge";
import Button from "../components/Button";
import PopIn from "../components/PopIn";
import clsx from "clsx";

const LISTINGS = [
  {
    id: 1,
    title: "LG 1.5 Ton Window AC",
    location: "Accra",
    price: "Ghc5000",
    condition: "Like New",
    image: "Assets/images/Lg Ac 1.jpg",
    alt: "LG window air conditioner",
  },
  {
    id: 2,
    title: "Samsung 2.5 Ac",
    location: "Accra",
    price: "Ghc9000",
    condition: "Good",
    image: "Assets/images/samsung ac 1.jpg",
    alt: "Samsung split system",
  },
  {
    id: 3,
    title: "Standing AC",
    location: "Accra",
    price: "Ghc12000",
    condition: "Excellent",
    image: "Assets/images/tower ac 1.jpg",
    alt: "Standing tower air conditioner",
  },
];

export default function Buy() {
  return (
    <div>
      {/* Page hero */}
      <section
        className={clsx(
          "page-hero",
          "bg-linear-to-r",
          "from-primary",
          "to-primary-dark",
          "py-17.5",
          "text-center",
          "text-white",
        )}
      >
        <div className="container">
          <p
            className={clsx("eyebrow", "mb-3")}
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Featured listings
          </p>
          <h1 className={clsx("text-[2.5rem]", "mb-3")}>
            Find Your Perfect AC
          </h1>
          <p
            className={clsx(
              "text-[1.05rem]",
              "text-[rgba(255,255,255,0.85)]",
              "max-w-140",
              "mx-auto",
              "mb-6",
            )}
          >
            Browse verified new & used units — all sellers are ID-checked and
            community-rated.
          </p>
          <form
            className={clsx(
              "buy-search",
              "flex",
              "bg-(--color-bg)/15",
              "border",
              "border-white/30",
              "rounded-[10px]",
              "p-1.5",
              "max-w-150",
              "mx-auto",
            )}
          >
            <input
              type="text"
              placeholder="Search brand, e.g. Daikin, LG, Mitsubishi"
              className={clsx(
                "flex-1",
                "border-none",
                "outline-none",
                "px-3",
                "py-2",
                "font-body",
                "text-sm",
                "bg-transparent",
                "text-white",
                "placeholder:text-white/70",
              )}
            />
            <select
              className={clsx(
                "border-none",
                "outline-none",
                "px-3",
                "py-2",
                "font-body",
                "text-sm",
                "bg-transparent",
                "text-white",
                "border-l",
                "border-white/30",
              )}
            >
              <option>Any Type</option>
              <option>Window AC</option>
              <option>Split System</option>
              <option>Portable AC</option>
              <option>Central / Ducted</option>
            </select>
            <Button variant="accent" size="sm">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Featured listings */}
      <section className="section" id="buy">
        <div className="container">
          <SectionHeading
            eyebrow="Available now"
            title="Units ready for a new home"
          />
          <div
            className={clsx(
              "listing-grid",
              "grid",
              "grid-cols-1",
              "sm:grid-cols-2",
              "lg:grid-cols-4",
              "gap-6",
            )}
          >
            {LISTINGS.map((listing, i) => (
              <PopIn key={listing.id} delay={i * 80}>
                <div
                  className={clsx(
                    "listing-card",
                    "bg-surface",
                    "rounded-(--radius-base)",
                    "overflow-hidden",
                    "shadow-(--shadow-base)",
                    "transition-all",
                    "duration-200",
                    "hover:-translate-y-1",
                    "hover:shadow-[0_20px_35px_rgba(14,134,212,0.18)]",
                  )}
                >
                  <div className={clsx("listing-image", "relative")}>
                    <img
                      src={listing.image}
                      alt={listing.alt}
                      className={clsx("w-full", "h-40", "object-cover")}
                    />
                    <Badge variant="condition">{listing.condition}</Badge>
                  </div>
                  <div className={clsx("listing-body", "p-4.5")}>
                    <h3 className={clsx("text-[1.05rem]", "mb-1")}>
                      {listing.title}
                    </h3>
                    <p
                      className={clsx(
                        "listing-meta",
                        "text-xs",
                        "text-text-muted",
                        "mb-3",
                      )}
                    >
                      <i
                        className={clsx(
                          "fa-solid",
                          "fa-location-dot",
                          "text-primary",
                          "mr-1",
                        )}
                      ></i>
                      {listing.location}
                    </p>
                    <div
                      className={clsx(
                        "listing-footer",
                        "flex",
                        "items-center",
                        "justify-between",
                      )}
                    >
                      <span
                        className={clsx(
                          "price",
                          "font-mono",
                          "font-semibold",
                          "text-[1.15rem]",
                          "text-primary-dark",
                        )}
                      >
                        {listing.price}
                      </span>
                      <Button to="/contact" variant="outline" size="sm">
                        View Listing
                      </Button>
                    </div>
                  </div>
                </div>
              </PopIn>
            ))}

            {/* CTA card */}
            <PopIn delay={240}>
              <Link
                to="/sell-your-ac"
                className={clsx(
                  "listing-card--cta",
                  "flex",
                  "flex-col",
                  "items-center",
                  "justify-center",
                  "text-center",
                  "p-8",
                  "border-2",
                  "border-dashed",
                  "border-primary",
                  "bg-[#eaf6ff]",
                  "shadow-none",
                  "hover:bg-[#ddf0ff]",
                  "transition-colors",
                  "rounded-(--radius-base)",
                )}
              >
                <div
                  className={clsx(
                    "cta-icon",
                    "w-12",
                    "h-12",
                    "rounded-full",
                    "bg-primary",
                    "text-white",
                    "flex",
                    "items-center",
                    "justify-center",
                    "text-xl",
                    "mb-4",
                  )}
                >
                  <i className={clsx("fa-solid", "fa-plus")}></i>
                </div>
                <h3 className={clsx("text-[1.05rem]", "mb-2")}>
                  List Your Air Conditioner
                </h3>
                <p className={clsx("text-sm", "text-text-muted", "mb-4")}>
                  Turn your old unit into cash. It only takes about 2 minutes.
                </p>
                <span className={clsx("btn", "btn-accent", "btn-small")}>
                  Get Started
                </span>
              </Link>
            </PopIn>
          </div>
        </div>
      </section>
    </div>
  );
}
