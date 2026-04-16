export interface Section {
  type: 'text' | 'image';
  title?: string;
  content?: string;
  src?: string;
  caption?: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;

  overview: string;
  challenge: string;
  approach: string;
  outcome: string;

  // ✅ NEW
  sections?: Section[];
}

export const projects: Project[] = [
  {
  id: 'onboarding-redesign',
  index: '01',
  title: 'Making Data Onboarding Understandable',
  category: 'UX Writing · Data Platform',
  year: '2024',
  description: 'Simplified a complex data ingestion and validation flow into a clear, guided experience that helps users understand system status and take action with confidence.',
  tags: ['UX Writing', 'Content Design', 'Data Systems'],
  image: '/images/onboarding/project1_1.png',

  overview: '',
  challenge: '',
  approach: '',
  outcome: '',

  sections: [
    {
      type: 'text',
      title: 'Overview',
      content:
        'This product allows users to integrate data from multiple sources—web, app, APIs, external platforms, and CSV uploads. While powerful, the onboarding experience lacked clarity around what the system was doing and what users needed to do next.'
    },

    {
      type: 'image',
      src: '/images/onboarding/project1_1.png',
      caption: 'Users connect multiple data sources, but system behavior is not clearly explained'
    },

    {
      type: 'text',
      title: 'The Challenge',
      content:
        'Users were exposed to backend concepts like events, parameters, and attributes without explanation. As data moved through the system, there was little feedback on its status—whether it was collected, validated, or failing—leading to confusion and drop-offs.'
    },

    {
      type: 'image',
      src: '/images/onboarding/project1_2.svg',
      caption: 'Data flows into the system, but relationships and outcomes are unclear'
    },

    {
      type: 'text',
      title: 'Key Insight',
      content:
        'Users don’t need to understand the system architecture—they need to understand what’s happening to their data and what action to take next.'
    },

    {
      type: 'image',
      src: '/images/onboarding/project1_3.svg',
      caption: 'System begins validating collected data, but errors are surfaced without clear guidance'
    },

    {
      type: 'text',
      title: 'My Approach',
      content:
        'I restructured the onboarding into a clear progression: data collection → validation → resolution. Rewrote microcopy to reflect system states in plain language, introduced visual status indicators (success, error), and added actionable guidance to help users resolve issues quickly.'
    },

    {
      type: 'image',
      src: '/images/onboarding/project1_4.svg',
      caption: 'Errors are clearly identified and grouped, with guidance on how to fix them'
    },

    {
      type: 'image',
      src: '/images/onboarding/project1_5.svg',
      caption: 'Clear success states reinforce progress and build user confidence'
    },

    {
      type: 'text',
      title: 'Impact',
      content:
        'The onboarding experience shifted from a technical process to a guided journey. Users could clearly track their data status, resolve issues faster, and complete setup with confidence—reducing friction and improving overall activation.'
    }
  ]
},
  {
    id: 'voice-tone-system',
    index: '02',
    title: 'Voice & Tone System for Healthcare',
    category: 'Content Strategy · Healthcare',
    year: '2024',
    description: 'Built a comprehensive voice and tone guide that aligned 12 product teams and reduced review cycles by 60%.',
    tags: ['Content Strategy', 'Design Systems', 'Healthcare'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    overview: 'A healthcare platform with 12 product teams was publishing content with wildly inconsistent voice and tone—creating confusion and eroding user trust.',
    challenge: 'No shared content standards existed. Writers across teams were making independent decisions about language, resulting in a fragmented experience that felt unreliable for patients seeking health information.',
    approach: 'Audited 4,000+ strings across the product. Identified 8 core voice attributes through stakeholder workshops and user research. Built a living voice and tone guide with contextual examples, decision trees, and tone spectrum documentation.',
    outcome: 'Reduced content review cycles by 60%. All 12 teams adopted the guide within 3 months. New team member onboarding time for content standards cut from 2 weeks to 3 days.',
  },
  {
    id: 'microcopy-conversion',
    index: '03',
    title: 'Microcopy That Converts',
    category: 'UX Writing · E-commerce',
    year: '2023',
    description: 'A/B tested 200+ microcopy variations to discover the language patterns that turn hesitation into action.',
    tags: ['UX Writing', 'Copywriting', 'E-commerce'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    overview: 'An e-commerce platform noticed that conversion rates stalled at key decision points—checkout, cart abandonment, and empty states. The culprit was uninspired, generic microcopy.',
    challenge: 'Buttons said "Submit." Error messages said "Invalid input." Empty states said nothing meaningful. Every small word was a missed opportunity to move users forward.',
    approach: 'Mapped every friction point in the purchase journey. Developed a hypothesis framework—each copy change was anchored to a specific user emotion or cognitive barrier. Ran 200+ targeted A/B tests over 6 months.',
    outcome: 'Cart-to-checkout conversion increased by 23%. Checkout completion rate improved by 17%. Error recovery rate (users who fixed an error and completed the flow) went from 34% to 61%.',
  },
  {
    id: 'ia-overhaul',
    index: '04',
    title: 'Information Architecture Overhaul',
    category: 'Content Design · SaaS',
    year: '2023',
    description: 'Restructured a 5,000-page knowledge base into a navigable system that users actually want to use.',
    tags: ['Content Design', 'IA', 'SaaS'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    overview: 'A B2B SaaS company had accumulated 5,000+ help articles over 8 years. Users consistently reported that they could not find what they needed, leading to a 40% increase in support tickets.',
    challenge: 'The knowledge base had grown organically with no taxonomy or content strategy. Articles were duplicated, outdated, or buried under misleading titles. Search was nearly useless.',
    approach: 'Conducted tree testing with 200 users to understand mental models. Audited all content and reduced the article count to 1,200 through consolidation and deletion. Built a three-tier taxonomy from scratch, rewrote titles using user language, and introduced progressive disclosure in article structure.',
    outcome: 'Support ticket volume fell by 35% in the first quarter. Self-serve resolution rate improved from 42% to 78%. Average time-on-page increased by 2.3 minutes, indicating users were actually reading.',
  },
];
