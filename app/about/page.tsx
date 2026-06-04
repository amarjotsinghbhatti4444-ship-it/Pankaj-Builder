"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Target, Lightbulb, CheckCircle2, ShieldCheck, ThumbsUp, HardHat } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <Image src="https://picsum.photos/seed/aboutbg/1920/400" alt="About Us" fill className="object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About Us</h1>
          <p className="text-amber-500 font-medium tracking-wider uppercase text-sm">Pankaj Singh Builder - Heritage of Excellence</p>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/seed/owner/800/1200" alt="Construction Site Manager" fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-serif text-3xl font-bold text-amber-500 mb-2">15+</p>
                <p className="text-lg">Years of Dedicated Service in Construction</p>
              </div>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:w-1/2">
              <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-3 block">Company Introduction</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Building The Future On A Foundation Of Trust</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Pankaj Singh Builder, we don't just build structures; we forge lasting relationships through transparency, superior craftsmanship, and an unwavering commitment to our clients' visions. Founded on the core principles of integrity and hard work, we have grown to become one of the most trusted names in the Punjab construction industry.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From luxury bespoke residential villas to highly functional commercial spaces, our portfolio reflects our versatility and our team's capability to deliver excellence across varied scales and complexities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                  <Target className="h-8 w-8 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold font-serif mb-2 text-slate-900">Our Mission</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">To deliver exceptional construction services by employing the highest standards of quality, safety, and innovation, ensuring timely delivery and total customer satisfaction.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-900">
                  <Lightbulb className="h-8 w-8 text-slate-900 mb-4" />
                  <h3 className="text-xl font-bold font-serif mb-2 text-slate-900">Our Vision</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">To be the preferred construction partner recognized for pioneering architectural marvels and sustainable development practices across the region.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-3 block">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">What Drives Our Work</h2>
            <p className="text-gray-600">The fundamental beliefs that guide our business operations and our interactions with clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Quality Commitment", icon: <CheckCircle2 className="h-10 w-10" />, desc: "We use only premium materials and proven methodologies to ensure durability and aesthetic perfection." },
              { title: "Safety Standards", icon: <ShieldCheck className="h-10 w-10" />, desc: "Zero-compromise approach to site safety, protecting our workforce and your investment." },
              { title: "Customer Satisfaction", icon: <ThumbsUp className="h-10 w-10" />, desc: "We prioritize clear communication and strive to exceed expectations on every single project." },
              { title: "Professional Approach", icon: <HardHat className="h-10 w-10" />, desc: "A disciplined, deadline-oriented and transparent process from the initial blueprint to handover." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                }}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-serif mb-4 text-slate-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
