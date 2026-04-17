import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center">
          <p className="font-sans text-mid-grey mb-6">Project not found.</p>
          <Link to="/" className="font-sans text-sm text-charcoal underline-grow">
            Back to home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-28 pb-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto"
    >
      <Link
        to="/"
        className="group inline-flex items-center gap-2 font-sans text-sm text-mid-grey underline-grow mb-16 transition-colors duration-300 hover:text-charcoal"
        data-hover
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Work
      </Link>

      <motion.div variants={sectionVariants} className="mb-16">
        <span
          className="font-sans text-xs text-mid-grey uppercase block mb-6"
          style={{ letterSpacing: '0.2em' }}
        >
          {project.index} / {project.category}
        </span>

        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-charcoal leading-[1.1] mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs text-mid-grey border border-light-grey px-4 py-2 rounded-full"
              style={{ letterSpacing: '0.1em' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

<div className="w-full mb-20 flex justify-center">
  <img
    src={project.image}
    alt={project.title}
    className="w-full max-w-5xl h-auto object-contain rounded-lg"
  />
</div>

<div className="space-y-16">
  {/* Pull quote (keep this from old design) */}
  <motion.div
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
  >
    <span className="font-sans text-xs text-mid-grey uppercase block mb-5 tracking-[0.2em]">
      Overview
    </span>

    <p className="font-serif text-xl md:text-2xl font-medium text-charcoal leading-[1.5] italic mb-6 border-l-2 border-light-grey pl-6">
      {project.description}
    </p>
  </motion.div>

  {/* NEW dynamic sections */}
  {project.sections?.map((section, index) => {
    if (section.type === 'text') {
      return (
        <motion.div
          key={index}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {section.title && (
            <span className="font-sans text-xs text-mid-grey uppercase block mb-5 tracking-[0.2em]">
              {section.title}
            </span>
          )}

          <p className="font-sans text-base font-light text-mid-grey leading-[1.9] max-w-2xl">
            {section.content}
          </p>
        </motion.div>
      );
    }

    if (section.type === 'image') {
      return (
        <motion.div
          key={index}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="my-10"
        >
          <div className="w-full flex justify-center">
  <img
    src={section.src}
    alt={section.caption}
    className={`
    h-auto object-contain rounded-lg
    ${section.size === 'small' ? 'w-[60%]' : ''}
    ${section.size === 'medium' ? 'w-[75%]' : ''}
    ${section.size === 'large' || !section.size ? 'w-full max-w-5xl' : ''}
  `}
  />
</div>

          {section.caption && (
            <p className="text-sm text-mid-grey mt-3 text-center">
              {section.caption}
            </p>
          )}
        </motion.div>
      );
    }

    if (section.type === 'image-slider' && section.slides) {
  return (
    <ImageSlider
      key={index}
      slides={section.slides}
    />
  );
}
    return null;
  })}
</div>

      <div className="mt-24 pt-12 border-t border-light-grey flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-sans text-sm text-mid-grey underline-grow transition-colors duration-300 hover:text-charcoal"
          data-hover
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to all work
        </Link>

        <NextProject currentId={project.id} />
      </div>
    </motion.main>
  );
}

function CaseSection({
  label,
  content,
  pullQuote,
}: {
  label: string;
  content: string;
  pullQuote?: string;
}) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <span
        className="font-sans text-xs text-mid-grey uppercase block mb-5"
        style={{ letterSpacing: '0.2em' }}
      >
        {label}
      </span>

      {pullQuote && (
        <p className="font-serif text-xl md:text-2xl font-medium text-charcoal leading-[1.5] italic mb-6 border-l-2 border-light-grey pl-6">
          {pullQuote}
        </p>
      )}

      <p className="font-sans text-base font-light text-mid-grey leading-[1.9]">
        {content}
      </p>
    </motion.div>
  );
}

function NextProject({ currentId }: { currentId: string }) {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <Link
      to={`/work/${nextProject.id}`}
      className="group flex flex-col gap-1"
      data-hover
    >
      <span
        className="font-sans text-xs text-mid-grey uppercase"
        style={{ letterSpacing: '0.18em' }}
      >
        Next Project
      </span>
      <span className="font-serif text-lg font-medium text-charcoal underline-grow transition-colors duration-300 group-hover:text-mid-grey">
        {nextProject.title} →
      </span>
    </Link>
  );
}

function ImageSlider({
  slides,
}: {
  slides: { src: string; caption?: string }[];
}) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      className="my-12"
    >
      <div className="relative w-full flex justify-center overflow-hidden group">

        {/* Smooth animation */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].src}
            src={slides[current].src}
            className="w-full max-w-5xl rounded-lg object-contain"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </AnimatePresence>

        {/* Left */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              i === current ? 'bg-charcoal scale-110' : 'bg-light-grey'
            }`}
          />
        ))}
      </div>

      {/* Dynamic caption */}
      {slides[current].caption && (
        <motion.p
          key={slides[current].caption}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-mid-grey mt-3 text-center"
        >
          {slides[current].caption}
        </motion.p>
      )}
    </motion.div>
  );
}
