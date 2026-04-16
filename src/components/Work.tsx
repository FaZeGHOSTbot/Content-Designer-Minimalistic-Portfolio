import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';

interface CursorImage {
  x: number;
  y: number;
  visible: boolean;
  src: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Work() {
  const { ref, isInView } = useInView(0.1);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursorImage, setCursorImage] = useState<CursorImage>({
    x: 0,
    y: 0,
    visible: false,
    src: '',
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent, src: string) => {
    setCursorImage({
      x: e.clientX,
      y: e.clientY,
      visible: true,
      src,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    setCursorImage((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
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
            Selected Work
          </span>
          <div className="flex-1 h-[1px] bg-light-grey" />
        </div>

        <motion.ul
          ref={containerRef}
          variants={listVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="divide-y divide-light-grey"
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseMove={(e) => handleMouseMove(e, project.image)}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate(`/work/${project.id}`)}
              className="group py-8 md:py-10 flex items-start gap-6 md:gap-10 cursor-none"
              data-hover
            >
              <span
                className="font-sans text-xs text-mid-grey pt-2 shrink-0 transition-colors duration-300 group-hover:text-charcoal"
                style={{ letterSpacing: '0.12em' }}
              >
                {project.index}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-6">
                  <h2
                    className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-charcoal leading-tight
                      relative inline-block transition-all duration-300
                      group-hover:translate-x-1"
                  >
                    <span className="underline-grow">{project.title}</span>
                  </h2>
                  <span
                    className="font-sans text-xs text-mid-grey shrink-0 transition-opacity duration-300 group-hover:opacity-80"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {project.year}
                  </span>
                </div>

                <p
                  className="mt-2 font-sans text-sm text-mid-grey transition-colors duration-300 group-hover:text-charcoal"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {project.category}
                </p>

                <motion.p
                  className="mt-3 font-sans text-sm text-mid-grey leading-relaxed max-w-xl overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredId === project.id ? 'auto' : 0,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {project.description}
                </motion.p>
              </div>

              <div className="hidden md:flex items-center pt-3 shrink-0">
                <motion.span
                  className="font-sans text-xs text-mid-grey"
                  style={{ letterSpacing: '0.12em' }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                    x: hoveredId === project.id ? 0 : -8,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  View →
                </motion.span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <AnimatePresence>
        {cursorImage.visible && (
          <motion.div
            key="cursor-image"
            className="fixed pointer-events-none z-40 rounded overflow-hidden shadow-2xl"
            style={{
              left: cursorImage.x + 28,
              top: cursorImage.y - 80,
              width: 200,
              height: 130,
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={cursorImage.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
