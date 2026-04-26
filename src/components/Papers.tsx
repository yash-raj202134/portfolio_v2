import { motion } from 'framer-motion';
import { FileText, ExternalLink, ScrollText } from 'lucide-react';
import { researchPapers } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function Papers() {
  return (
    <section id="papers" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            <ScrollText className="w-4 h-4" />
            <span>Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Research Papers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-400">Some of My Unpublished or Yet to be Published Papers</p>
        </motion.div>

        {/* Papers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {researchPapers.map((paper) => (
            <motion.article
              key={paper.id}
              variants={itemVariants}
              className="glass-card-dark p-8 group hover:bg-black/70 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-7 h-7 text-blue-400" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-3 group-hover:text-blue-300 transition-colors">
                {paper.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 line-clamp-4">
                {paper.description}
              </p>

              {/* View Button */}
              <motion.a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-4 h-4" />
                View Paper
                <ExternalLink className="w-3 h-3 ml-1" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
