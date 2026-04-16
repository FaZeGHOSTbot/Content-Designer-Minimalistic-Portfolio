import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const textVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function About() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" className="py-24 md:py-36 bg-charcoal">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="flex items-center gap-4 mb-16 md:mb-20">
            <span
              className="font-sans text-xs text-mid-grey uppercase"
              style={{ letterSpacing: '0.2em' }}
            >
              About
            </span>
            <div className="flex-1 h-[1px] bg-[#2a2a2a]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.h2
                variants={paragraphVariants}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-warm-white leading-[1.2] mb-8"
              >
                Words that work.{' '}
                <em className="italic text-mid-grey">Quietly.</em>
              </motion.h2>

              <motion.p
                variants={paragraphVariants}
                className="font-sans text-base font-light text-mid-grey leading-[1.8] mb-6"
              >
                Sridha Saha is a content designer with 5+ years of experience
                shaping how digital products speak to people. She believes the
                best UX writing is invisible—it guides, reassures, and empowers
                users without ever getting in the way.
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                className="font-sans text-base font-light text-mid-grey leading-[1.8] mb-6"
              >
                Her work sits at the intersection of language, psychology, and
                product design. From fintech to healthcare to SaaS, she brings
                clarity to complex experiences—one carefully chosen word at a time.
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                className="font-sans text-base font-light text-mid-grey leading-[1.8]"
              >
                Currently focused on financial services, healthcare, and
                enterprise SaaS. Open to full-time roles and select freelance
                engagements.
              </motion.p>
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8">
                {[
                  { label: 'Specialisation', value: 'UX Writing, Content Strategy, Voice & Tone' },
                  { label: 'Industries', value: 'Fintech, Healthcare, SaaS, E-commerce' },
                  { label: 'Based in', value: 'Bangalore, India' },
                  { label: 'Available', value: 'Freelance & Full-time' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={paragraphVariants}
                    className="border-b border-[#2a2a2a] pb-6"
                  >
                    <p
                      className="font-sans text-xs text-[#4a4a4a] uppercase mb-2"
                      style={{ letterSpacing: '0.18em' }}
                    >
                      {item.label}
                    </p>
                    <p className="font-sans text-sm font-light text-[#9a9694]">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
