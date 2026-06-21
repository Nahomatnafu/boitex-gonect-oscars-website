"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const services = [
  {
    id: "flatbed",
    title: "Flatbed Transportation",
    description:
      "Our flatbed transportation services are designed to handle oversized and specialized freight that requires flexible loading and unloading. We transport a wide variety of materials including construction supplies, industrial equipment, machinery, and other large or irregularly shaped cargo.",
    highlights: [
      "Construction materials and supplies",
      "Heavy equipment and machinery",
      "Oversized and wide loads",
      "Industrial steel and lumber",
      "Flexible loading capabilities",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  },
  {
    id: "hotshot",
    title: "Hotshot Transportation",
    description:
      "When time is critical, our hotshot transportation services provide fast and flexible solutions for urgent deliveries. We understand that some shipments simply cannot wait, and we are equipped to respond quickly with expedited scheduling and direct routes.",
    highlights: [
      "Expedited delivery scheduling",
      "Time-sensitive freight handling",
      "Direct route optimization",
      "Urgent shipment response",
      "Flexible pickup and delivery",
    ],
    image: "/images/services-hotshot.jpg",
  },
  {
    id: "freight",
    title: "Freight Hauling",
    description:
      "Our freight hauling services form the backbone of our transportation offerings. We provide reliable long-distance transportation solutions for businesses needing to move cargo across state lines and throughout the country safely and on time.",
    highlights: [
      "Long-distance interstate hauling",
      "Reliable on-time delivery",
      "Nationwide route coverage",
      "Cargo protection and security",
      "Professional driver assignments",
    ],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80")',
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Comprehensive freight transportation solutions tailored to meet your
            shipping needs across the United States.
          </motion.p>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, i) => (
        <section
          key={service.id}
          className={`section-padding ${i % 2 === 1 ? "bg-gray-light" : "bg-white"}`}
        >
          <div className="container-max">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <motion.div
                {...fadeInUp}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <h2 className="section-title">{service.title}</h2>
                <div className="w-20 h-1 bg-accent rounded-full mb-6" />
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">
                  Request This Service
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative rounded-xl overflow-hidden shadow-2xl ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-max text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Contact us today and our team will help determine the best
              transportation solution for your specific requirements.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}