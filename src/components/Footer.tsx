import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/safety", label: "Safety & Compliance" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-display mb-1">
              BOITEX & GONECT
            </h3>
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              Enterprises LLC
            </p>
            <p className="text-gray-300 text-sm italic mb-4">
              &ldquo;Going and Connect by Moving&rdquo;
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering dependable freight transportation solutions across the
              United States with safety, professionalism, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-primary">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="tel:800-622-1203"
                  className="hover:text-accent transition-colors"
                >
                  800-622-1203
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@boitexgonect.com"
                  className="hover:text-accent transition-colors"
                >
                  info@boitexgonect.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-primary">
              Headquarters
            </h4>
            <address className="not-italic text-sm text-gray-300 space-y-1">
              <p>400 S. 4th St Ste 401</p>
              <p>Minneapolis, Minnesota</p>
              <p className="mt-3 text-primary font-medium">
                Service Area: Nationwide
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs">
              &copy; {currentYear} BOITEX & GONECT ENTERPRISES LLC. All Rights
              Reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <span>USDOT: 4559459</span>
              <span>MC: 1812017</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}