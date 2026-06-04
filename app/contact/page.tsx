"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your inquiry, " + formData.name + ". Our team will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <Image src="https://picsum.photos/seed/contactbg/1920/400" alt="Contact Us" fill className="object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-amber-500 font-medium tracking-wider uppercase text-sm">We're Here to Build Your Dreams</p>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-3 block">Get In Touch</span>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Let's Discuss Your Project</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Whether you have a question about our services, pricing, or are ready to start a project, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm border border-gray-100 flex-shrink-0 mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      60C, Sunrise Enclave,<br />
                      Sector 127,<br />
                      Sahibzada Ajit Singh Nagar,<br />
                      Punjab 140307, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm border border-gray-100 flex-shrink-0 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">Contact Details</h3>
                    <p className="text-gray-600 mb-1">+91 99159 48508 (Phone)</p>
                    <p className="text-gray-600">+91 99159 48508 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm border border-gray-100 flex-shrink-0 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">Email Address</h3>
                    <p className="text-gray-600">info@pankajsinghbuilder.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm border border-gray-100 flex-shrink-0 mr-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-10 lg:p-14 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-8 flex items-center">
                  <MessageSquare className="w-6 h-6 text-amber-500 mr-3" />
                  Send Us A Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto h-14 px-8 text-lg">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="h-[500px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.293670987178!2d76.6787!3d30.767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ2JzAxLjIiTiA3NsKwNDAnNDMuMyJF!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Pankaj Singh Builder Location Map"
        />
      </section>
    </>
  );
}
