"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

// Placeholder projects, we could filter by category
const projects = [
  { id: 1, title: "Sunrise Luxury Villa", category: "Residential", location: "Sector 127, Mohali", img: "https://picsum.photos/seed/proj1/800/600", status: "Completed" },
  { id: 2, title: "Apex Corporate Hub", category: "Commercial", location: "Chandigarh", img: "https://picsum.photos/seed/proj2/800/600", status: "Completed" },
  { id: 3, title: "Green Valley Duplex", category: "Residential", location: "Kharar", img: "https://picsum.photos/seed/proj3/800/600", status: "Ongoing" },
  { id: 4, title: "Modernist Retail Plaza", category: "Commercial", location: "Zirakpur", img: "https://picsum.photos/seed/proj4/800/600", status: "Completed" },
  { id: 5, title: "Heritage Renovation", category: "Renovation", location: "Panchkula", img: "https://picsum.photos/seed/proj5/800/600", status: "Completed" },
  { id: 6, title: "Minimalist Townhouse", category: "Residential", location: "Mohali", img: "https://picsum.photos/seed/proj6/800/600", status: "Ongoing" },
  { id: 7, title: "Tech Park Phase II", category: "Commercial", location: "IT Park", img: "https://picsum.photos/seed/proj7/800/600", status: "Ongoing" },
  { id: 8, title: "Grand Mansion Estate", category: "Residential", location: "Sector 10", img: "https://picsum.photos/seed/proj8/800/600", status: "Completed" }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = ["All", "Residential", "Commercial", "Renovation", "Ongoing", "Completed"];

  const filteredProjects = projects.filter(p => {
    if (filter === "All") return true;
    if (filter === "Ongoing") return p.status === "Ongoing";
    if (filter === "Completed") return p.status === "Completed";
    return p.category === filter;
  });

  return (
    <>
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <Image src="https://picsum.photos/seed/projbg/1920/400" alt="Projects" fill className="object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Project Gallery</h1>
          <p className="text-amber-500 font-medium tracking-wider uppercase text-sm">A Showcase of Our Finest Work</p>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white min-h-[600px]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? "bg-amber-600 text-white shadow-md transform -translate-y-0.5" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer h-72"
                  onClick={() => setSelectedImg(project.img)}
                >
                  <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-12 h-12 scale-50 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-slate-900 text-white`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-900 to-transparent">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                    <h3 className="text-white text-lg font-bold font-serif mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm flex justify-between items-center">
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-amber-500 p-2 z-50">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[16/9] rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImg} alt="Enlarged Project" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
