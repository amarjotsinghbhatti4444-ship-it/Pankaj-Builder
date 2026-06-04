"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, ArrowRight, HardHat, Building2, PaintBucket, 
  Ruler, Lightbulb, Users, Trophy, Target, Clock, Shield, Phone
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/construction/1920/1080"
          alt="Construction Site"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="container relative z-10 mx-auto px-6 text-center text-white mt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-amber-500 uppercase border border-amber-500/30">
              Premium Construction Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Building Dreams <br className="hidden md:block" />
            <span className="text-amber-500">Into Reality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl"
          >
            We deliver exceptional craftsmanship, unmatched reliability, and innovative architectural solutions for your residential and commercial projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-slate-900/50 hover:bg-amber-600 text-white border-white/20" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:text-amber-500 hover:bg-white/10" asChild>
              <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Company Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-3 block">About Pankaj Singh Builder</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
                Establishing the Standard for Construction Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a legacy of precision engineering and uncompromising quality, Pankaj Singh Builder transforms architectural visions into structural realities. Operating primarily in Punjab, our commitment to excellence spans both premium residential spaces and state-of-the-art commercial hubs.
              </p>
              <ul className="space-y-4 mb-8">
                {['Over a decade of industry expertise', 'Unwavering commitment to safety and compliance', 'Turnkey project management from design to delivery'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://picsum.photos/seed/about-const/800/1000" 
                alt="Construction Team" 
                fill 
                className="object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-8 border-white/20 rounded-2xl m-4 z-10 pointer-events-none"></div>
              <div className="absolute bottom-8 left-8 bg-slate-900 p-6 rounded-lg shadow-xl z-20 max-w-xs border-l-4 border-amber-500">
                <p className="text-white font-bold text-xl mb-1">100%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction Rate across all completed projects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-3 block">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-gray-600">Comprehensive construction solutions tailored to meet the exacting standards of our distinguished clientele.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Residential Construction", desc: "Custom-built luxury homes and villas with impeccable finishing.", icon: <Building2 className="h-8 w-8" /> },
              { title: "Commercial Construction", desc: "State-of-the-art office spaces and retail environments.", icon: <HardHat className="h-8 w-8" /> },
              { title: "Turnkey Projects", desc: "End-to-end project management from concept to final handover.", icon: <Ruler className="h-8 w-8" /> },
              { title: "Building Renovation", desc: "Expert restoration and modernization of existing structures.", icon: <Lightbulb className="h-8 w-8" /> },
              { title: "Interior Finishing", desc: "Premium interior detailing, flooring, and bespoke carpentry.", icon: <PaintBucket className="h-8 w-8" /> },
              { title: "Architectural Consultation", desc: "Strategic planning, design approval, and structural engineering.", icon: <Target className="h-8 w-8" /> }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-10 group-hover:bg-amber-100 transition-colors"></div>
                <div className="w-16 h-16 rounded-full bg-slate-900 text-amber-500 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="text-amber-600 font-semibold group-hover:text-amber-700 inline-flex items-center">
                  Explore Service <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild size="lg" className="border-slate-300">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold tracking-wider text-sm uppercase mb-3 block">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Our Working Process</h2>
            <p className="text-gray-400">A systematic, transparent, and efficient approach to ensure your project is completed flawlessly on time and within budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Understanding requirements, budget, and visionary goals. Initial site visit and feasibility studies." },
              { num: "02", title: "Planning & Design", desc: "Architectural blueprints, obtaining necessary approvals, and detailed material planning." },
              { num: "03", title: "Construction", desc: "Executing building phases with strict quality control, adherence to safety, and regular updates." },
              { num: "04", title: "Final Handover", desc: "Thorough quality inspections, final finishing touches, and key handover to the client." }
            ].map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-slate-800 border-2 border-amber-500 flex items-center justify-center text-2xl font-bold font-serif text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors relative z-10">
                  {step.num}
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-slate-800 pointer-events-none"></div>}
                <h3 className="text-xl font-bold mb-3 font-serif">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl mb-6 md:mb-0">
              <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-3 block">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Featured Projects</h2>
            </div>
            <Button variant="outline" asChild className="border-slate-300">
              <Link href="/projects">View Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Luxury Villa in Sector 10", category: "Residential", img: "https://picsum.photos/seed/villa1/600/400" },
              { title: "Sunrise Commercial Plaza", category: "Commercial", img: "https://picsum.photos/seed/office-p2/600/400" },
              { title: "Modern Duplex Estate", category: "Residential", img: "https://picsum.photos/seed/duplex3/600/400" },
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer h-[350px]"
              >
                <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                  <span className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-white text-xl font-bold font-serif">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-amber-500 text-slate-900">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-900/10">
          {[
            { label: "Years Experience", value: "15+", icon: <Clock className="h-8 w-8 mx-auto mb-4 opacity-80" /> },
            { label: "Completed Projects", value: "250+", icon: <Trophy className="h-8 w-8 mx-auto mb-4 opacity-80" /> },
            { label: "Happy Clients", value: "200+", icon: <Users className="h-8 w-8 mx-auto mb-4 opacity-80" /> },
            { label: "Safety Awards", value: "10+", icon: <Shield className="h-8 w-8 mx-auto mb-4 opacity-80" /> }
          ].map((stat, idx) => (
            <div key={idx} className="px-4">
              {stat.icon}
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-semibold uppercase tracking-wider pl-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA & Map */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-3 block">Ready to Build?</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Let's Discuss Your Next Great Project</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connect with our team of experts. Whether it's a luxury residential build or a massive commercial undertaking, Pankaj Singh Builder is equipped to handle it with excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 text-lg group" asChild>
                  <a href="tel:+919915948508">
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" /> Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 text-lg border-slate-300" asChild>
                  <Link href="/contact">Message Us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 h-80 lg:h-auto min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.293670987178!2d76.6787!3d30.767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ2JzAxLjIiTiA3NsKwNDAnNDMuMyJF!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pankaj Singh Builder Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
