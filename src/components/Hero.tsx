import { motion } from 'framer-motion';

const heroLines = [
  'A content designer',
  'crafting clear,',
  'human-first digital',
  'experiences.',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 40, skewY: 1 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const subtleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 1.2,
    },
  },
};

const scrollVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 1.8 },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <div className="mb-4 overflow-hidden">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
              },
            }}
            className="font-sans text-xs tracking-ultra text-mid-grey uppercase mb-8"
            style={{ letterSpacing: '0.22em' }}
          >
            Content Designer
          </motion.p>
        </div>

        <div className="overflow-hidden">
          {heroLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className="font-serif text-[2.8rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6.2rem] leading-[1.1] text-charcoal font-medium"
              >
                {i === heroLines.length - 1 ? (
                  <em className="italic">{line}</em>
                ) : (
                  line
                )}
              </motion.h1>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={subtleVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 md:mt-16 max-w-md"
      >
        <p className="font-sans text-base font-light text-mid-grey leading-relaxed">
          Based in Bangalore · Available for projects
        </p>
      </motion.div>

      <motion.div
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
        className="mt-auto pt-24 flex items-center gap-3"
      >
        <div className="w-8 h-[1px] bg-mid-grey" />
        <span className="font-sans text-xs text-mid-grey tracking-widest uppercase" style={{ letterSpacing: '0.18em' }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
