import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 } as const,
  },
};

export default function Contact() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span
            className="font-sans text-xs text-mid-grey uppercase"
            style={{ letterSpacing: '0.2em' }}
          >
            Contact
          </span>
          <div className="flex-1 h-[1px] bg-light-grey" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl"
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal leading-[1.15] mb-12 md:mb-16"
          >
            Let's create something{' '}
            <em className="italic text-mid-grey">worth reading.</em>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 sm:gap-12"
          >
            <a
              href="mailto:sridhasaha98@gmail.com"
              className="group flex items-center gap-3 font-sans text-base font-light text-charcoal underline-grow"
              data-hover
            >
              <span>sridhasaha98@gmail.com</span>
              <ArrowUpRight
                size={16}
                className="text-mid-grey transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sridha-saha-b92105135/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-sans text-base font-light text-charcoal underline-grow"
              data-hover
            >
              <span>LinkedIn</span>
              <ArrowUpRight
                size={16}
                className="text-mid-grey transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-24 pt-12 border-t border-light-grey flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <span className="font-sans text-xs text-mid-grey" style={{ letterSpacing: '0.12em' }}>
            © 2026 Sridha Saha
          </span>
          <span className="font-sans text-xs text-mid-grey" style={{ letterSpacing: '0.12em' }}>
            Content Designer · India
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
