"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const credentials = [
  {
    label: "USDOT Number",
    value: "4559459",
    description:
      "Our U.S. Department of Transportation identification number, confirming our registration as an interstate motor carrier.",
  },
  {
    label: "MC Number",
    value: "1812017",
    description:
      "Our Motor Carrier number issued by the FMCSA, authorizing interstate freight transportation operations.",
  },
];

export default function SafetyPage() {
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
            Safety & Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Our commitment to safety, regulatory compliance, and industry best
            practices sets the foundation for everything we do.
          </motion.p>
        </div>
      </section>

      {/* FMCSA Compliance */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
                Regulatory Compliance
              </p>
              <h2 className="section-title">FMCSA Compliance</h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6" />
              <p className="text-charcoal/80 leading-relaxed mb-4">
                BOITEX & GONECT ENTERPRISES LLC operates in full accordance with
                Federal Motor Carrier Safety Administration (FMCSA) regulations
                and industry best practices. As a registered interstate motor
                carrier, we maintain rigorous compliance with all federal
                transportation safety standards.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our compliance program covers driver qualifications, vehicle
                maintenance standards, hours-of-service regulations, and cargo
                securement requirements. We ensure that every aspect of our
                operations meets or exceeds regulatory expectations.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                By maintaining active FMCSA registration and adhering to all
                applicable regulations, we provide our customers with the
                confidence that their freight is being transported by a
                fully compliant and responsible carrier.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/safety-compliance.jpg"
                alt="Semi truck on highway"
                className="rounded-xl shadow-2xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              Our Pledge
            </p>
            <h2 className="section-title">Our Safety Commitment</h2>
            <p className="section-subtitle">
              Safety is not just a priority — it is a core value embedded in
              every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Safe Hauling Practices",
                description:
                  "We implement comprehensive safety protocols for every load, including proper cargo securement, weight distribution, and equipment inspections to ensure safe transportation from pickup to delivery.",
              },
              {
                title: "Driver Responsibility",
                description:
                  "Our drivers are trained to uphold the highest safety standards, including adherence to hours-of-service regulations, pre-trip and post-trip inspections, and defensive driving techniques.",
              },
              {
                title: "Cargo Protection",
                description:
                  "We take every precaution to protect our customers' freight, using proper loading techniques, quality securement equipment, and careful handling procedures throughout transit.",
              },
              {
                title: "Regulatory Compliance",
                description:
                  "We maintain strict compliance with all FMCSA regulations, including drug and alcohol testing programs, driver qualification files, vehicle maintenance records, and insurance requirements.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-navy mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Credentials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              Verified Credentials
            </p>
            <h2 className="section-title">Company Credentials</h2>
            <p className="section-subtitle">
              Our official registration and compliance credentials demonstrate
              our commitment to operating as a legitimate and responsible carrier.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {credentials.map((cred, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="credential-card group"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8 text-navy group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <p className="text-sm text-charcoal/60 uppercase tracking-widest mb-1">
                  {cred.label}
                </p>
                <p className="text-4xl md:text-5xl font-bold text-navy mb-3 tracking-tight">
                  {cred.value}
                </p>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {cred.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Verification Note */}
          <motion.div
            {...fadeInUp}
            className="mt-12 bg-gray-light rounded-xl p-6 max-w-3xl mx-auto text-center"
          >
            <p className="text-charcoal/70 text-sm">
              These credentials can be verified through the FMCSA SAFER system.
              BOITEX & GONECT ENTERPRISES LLC maintains active registration and
              full compliance with all federal transportation regulations.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}