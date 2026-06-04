"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Residential Construction",
    description: "Expertly crafted premium homes, villas, and residential complexes built to exact specifications.",
    benefits: ["Custom architectural designs", "Premium material selection", "Energy-efficient builds", "Timely delivery"],
    img: "https://picsum.photos/seed/resid/800/600"
  },
  {
    title: "Commercial Construction",
    description: "State-of-the-art office buildings, retail spaces, and institutional facilities engineered for success.",
    benefits: ["Scalable layouts", "Compliance with commercial codes", "Modern aesthetics", "Minimal business disruption"],
    img: "https://picsum.photos/seed/commer/800/600"
  },
  {
    title: "Turnkey Projects",
    description: "Complete end-to-end solutions. We handle everything from the initial design phase to the final key handover.",
    benefits: ["Single point of contact", "Streamlined timelines", "Cost control", "Stress-free for clients"],
    img: "https://picsum.photos/seed/turnk/800/600"
  },
  {
    title: "Building Renovation",
    description: "Breathe new life into aging structures with our comprehensive restoration and modernization services.",
    benefits: ["Structural reinforcement", "Aesthetic upgrades", "Increased property value", "Space optimization"],
    img: "https://picsum.photos/seed/renov/800/600"
  },
  {
    title: "Interior Finishing",
    description: "High-end interior detailing, false ceilings, bespoke carpentry, and luxurious finishing touches.",
    benefits: ["Exquisite craftsmanship", "Premium fixtures", "Custom lighting solutions", "Flawless painting"],
    img: "https://picsum.photos/seed/inter/800/600"
  },
  {
    title: "Civil Construction",
    description: "Robust civil engineering works including foundational structures, boundary walls, and infrastructure.",
    benefits: ["High-grade materials", "Advanced engineering", "Long-lasting durability", "Strict safety protocols"],
    img: "https://picsum.photos/seed/civil/800/600"
  },
  {
    title: "Flooring & Tile Work",
    description: "Precision installation of premium marble, granite, ceramic tiles, and hardwood flooring.",
    benefits: ["Perfect leveling", "Vast material choices", "Durable finishes", "Elegant aesthetics"],
    img: "https://picsum.photos/seed/floor/800/600"
  },
  {
    title: "Painting & Waterproofing",
    description: "Professional interior and exterior painting combined with advanced structural waterproofing solutions.",
    benefits: ["Weather resistance", "Leakage prevention", "Vibrant colors", "Long-lasting protection"],
    img: "https://picsum.photos/seed/paint/800/600"
  },
  {
    title: "Architectural Consultation",
    description: "Expert advice on structural design, space planning, material choices, and municipal approvals.",
    benefits: ["Optimized floor plans", "Regulatory compliance", "Cost-effective planning", "Innovative design"],
    img: "https://picsum.photos/seed/arch/800/600"
  },
  {
    title: "Project Management",
    description: "Dedicated project oversight ensuring safety, quality control, and schedule adherence.",
    benefits: ["Daily site supervision", "Budget adherence", "Quality assurance", "Transparent reporting"],
    img: "https://picsum.photos/seed/mgmt/800/600"
  }
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <Image src="https://picsum.photos/seed/servicesbg/1920/400" alt="Our Services" fill className="object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h1>
          <p className="text-amber-500 font-medium tracking-wider uppercase text-sm">Comprehensive Construction Solutions</p>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Expertise You Can Trust</h2>
            <p className="text-gray-600 text-lg">From breaking ground to the final coat of paint, we offer specialized services to cover every aspect of the construction lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (idx % 2) * 0.2 } }
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col sm:flex-row group"
              >
                <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                  <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                    <ul className="mb-8 space-y-2">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-center text-sm text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-fit hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all border-slate-300" asChild>
                    <Link href="/contact">Inquire Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
