"use client";

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

const timeline = [
  {
    date: "April 2026",
    title: "FMCSA Registration",
    description:
      "BOITEX & GONECT ENTERPRISES LLC officially registered with the Federal Motor Carrier Safety Administration, marking the beginning of our transportation operations.",
  },
  {
    date: "2026",
    title: "Interstate Operations Launch",
    description:
      "Commenced interstate freight transportation operations, serving routes extending beyond 500 miles with a focus on flatbed and box truck services.",
  },
  {
    date: "2026",
    title: "Nationwide Service Expansion",
    description:
      "Expanded service coverage to provide comprehensive transportation solutions across the United States, connecting major markets and industrial hubs.",
  },
];

const values = [
  {
    title: "Safety",
    description:
      "We prioritize safety above all else, implementing rigorous protocols and continuous training to protect our drivers, cargo, and the public.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We conduct business with honesty and transparency, building trust with our customers, partners, and employees through ethical practices.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "We deliver on our promises, ensuring on-time performance and dependable service that our customers can count on every single shipment.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Customer Commitment",
    description:
      "We are dedicated to exceeding customer expectations through responsive communication, personalized solutions, and exceptional service.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Professionalism",
    description:
      "We maintain the highest standards of professionalism in every aspect of our operations, from driver conduct to customer interactions.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Learn about our company, our mission, and our commitment to excellence
            in freight transportation.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Our Company</h2>
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
                <p>
                  By adhering to all FMCSA regulations and industry best
                  practices, BOITEX & GONECT ENTERPRISES LLC prioritizes the
                  protection of both cargo and drivers, ensuring every shipment
                  is handled with professionalism, efficiency, and care.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80"
                alt="Semi truck on highway"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              Our Journey
            </p>
            <h2 className="section-title">Company Timeline</h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-4 top-1 w-8 h-8 bg-accent rounded-full border-4 border-white hidden md:flex items-center justify-center -translate-x-1/2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className="card">
                    <span className="text-accent font-bold text-sm tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-navy mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-navy text-white">
        <div className="container-max text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-4">
              Our Mission
            </p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins leading-tight text-primary">
              &ldquo;Our mission is to provide dependable, safe, and efficient
              transportation solutions while building long-term relationships
              through exceptional service, reliability, and professionalism.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              Our Values
            </p>
            <h2 className="section-title">Core Values That Drive Us</h2>
            <p className="section-subtitle">
              These principles guide every decision we make and every mile we drive.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="card group text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-navy mx-auto mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}