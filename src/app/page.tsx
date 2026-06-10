"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 1 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.15 },
};

const services = [
  {
    title: "Flatbed Transportation",
    description:
      "Safe and efficient transportation for oversized and specialized freight including construction materials, equipment, and industrial loads.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 15h3m0 0h3m-3 0V5a2 2 0 012-2h6a2 2 0 012 2v10m-9 0h9m0 0h3m0 0a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2m-4 0a2 2 0 012-2h2a2 2 0 012 2m-4 0a2 2 0 00-2 2m0 0H5a2 2 0 01-2-2v-2a2 2 0 012-2h3" />
      </svg>
    ),
  },
  {
    title: "Hotshot Transportation",
    description:
      "Fast and flexible transportation solutions for urgent deliveries and time-sensitive freight with expedited scheduling.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Freight Hauling",
    description:
      "Reliable freight transportation services across nationwide routes with a commitment to on-time delivery and cargo safety.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Safe Hauling",
    description:
      "Safety-first operations that protect cargo, equipment, and drivers through rigorous protocols and compliance.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Reliability & On-Time Delivery",
    description:
      "Dependable transportation solutions with a strong commitment to meeting deadlines and exceeding expectations.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Excellent Customer Service",
    description:
      "Responsive communication and personalized support throughout every shipment from pickup to delivery.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Professional Drivers",
    description:
      "Experienced and qualified drivers dedicated to safe, efficient, and professional transportation services.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 parallax-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
            className="hero-video w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/52017/52017-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 gradient-overlay" />
        </div>

        <div className="relative z-10 w-full pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl ml-4 sm:ml-8 md:ml-12 lg:ml-24 xl:ml-32"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block text-primary text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              BOITEX & GONECT ENTERPRISES LLC
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Reliable Nationwide Freight Transportation Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl"
            >
              BOITEX & GONECT ENTERPRISES LLC delivers dependable freight
              transportation services across the United States. Specializing in
              flatbed, hotshot, and freight hauling solutions while maintaining
              the highest standards of safety, reliability, and customer service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="/contact" className="btn-glass-primary">
                Contact Us
              </Link>
              <Link href="/services" className="btn-glass-secondary">
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-accent rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                Moving Freight with Reliability and Professionalism
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6" />
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  BOITEX & GONECT ENTERPRISES LLC is an active motor carrier
                  registered with the Federal Motor Carrier Safety Administration
                  (FMCSA) since April 2026. Headquartered in Minneapolis,
                  Minnesota, the company operates as an interstate carrier,
                  providing reliable transportation services across routes
                  extending beyond 500 miles.
                </p>
                <p>
                  Specializing in flatbed and box truck transportation, BOITEX
                  & GONECT ENTERPRISES LLC delivers dependable freight solutions
                  tailored to meet diverse shipping needs. The company is
                  committed to maintaining the highest standards of safety,
                  compliance, and operational excellence.
                </p>
              </div>
              <Link href="/about" className="btn-outline mt-6 inline-flex">
                Learn More About Us
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80"
                alt="Freight truck on highway"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              Our Services
            </p>
            <h2 className="section-title">Comprehensive Transportation Solutions</h2>
            <p className="section-subtitle">
              We offer a full range of freight transportation services tailored
              to meet the unique needs of our customers.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="card group"
              >
                <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-accent font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="section-title">Built on Trust and Performance</h2>
            <p className="section-subtitle">
              We set ourselves apart through unwavering commitment to safety,
              reliability, and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-navy mx-auto mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
                Coverage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nationwide Transportation Coverage
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We provide freight transportation solutions across the United
                States, helping businesses move cargo safely and efficiently over
                long-distance interstate routes. Our network connects major
                markets and industrial hubs nationwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-2xl font-bold text-accent">50</p>
                  <p className="text-sm text-gray-400">States Covered</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-2xl font-bold text-accent">500+</p>
                  <p className="text-sm text-gray-400">Miles Route Range</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80"
                alt="United States highway map route"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1566576912323-bcb22f7dc6c2?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need Reliable Freight Transportation?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              Contact BOITEX & GONECT ENTERPRISES LLC today to discuss your
              transportation requirements and learn how we can support your
              logistics needs.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-4 inline-flex">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}