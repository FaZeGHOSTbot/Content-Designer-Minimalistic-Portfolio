export interface Section {
  type: 'text' | 'image' | 'image-slider';
  title?: string;
  content?: string;
  src?: string;
  caption?: string;
  images?: string[];
  size?: 'small' | 'medium' | 'large';
  slides?: { src: string; caption?: string }[];
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
  id: 'user-data-error-experience',
  index: '01',
  title: 'Designing a Clear Data Error Resolution Experience',
  category: 'Content Design · UX Writing',
  year: '2025',
  description: 'Transformed a technical and unclear data validation flow into a structured, user-friendly error resolution experience with clear messaging, actionable guidance, and system transparency.',
  tags: ['UX Writing', 'Content Design', 'Data UX', 'Error Handling'],
  image: '/images/onboarding/project1_5.jpeg',

  overview: 'Redesigned a complex data validation and error-handling experience into a structured, user-friendly flow that helps users quickly understand issues and resolve them with confidence.',
challenge:
  'Users struggled to understand system-generated errors due to unclear messaging, lack of structure, and limited visibility into where issues originated, leading to confusion and slower resolution.',

approach:
  'Introduced a simplified system model, structured error reporting, and clear, plain-language messaging. Designed actionable error states, prioritization through severity and timelines, and collaboration features to support faster resolution.',

outcome:
  'Transformed a technical error log into a guided resolution experience, enabling users to identify issues faster, take action independently, and complete onboarding with reduced friction.',

  sections: [
    {
      type: 'text',
      title: 'Overview',
      content:
        'This project focuses on improving how users identify and resolve data errors during onboarding. The system validates incoming data from multiple sources, but the experience lacked clarity, making it difficult for users to understand issues and take action. The goal was to design a clear, guided error resolution experience through better content and structure.'
    },

    {
      type: 'image',
      src: '/images/onboarding/project1_5.jpeg',
      size: 'small',
      caption: 'Overview page explaining how data is collected, validated, and where errors occur'
    },

    {
  type: 'text',
  title: 'Making the System Visible',
  content:
    'Users struggled to understand how their data moved through the system and where issues were occurring. I introduced a simplified visual model that breaks down the process into clear stages—data collection, validation, and error reporting. This helps users build a mental model of the system, making it easier to identify where things go wrong and what action is needed.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_7.png',
  size: 'large',
  caption: 'A simplified view of the data pipeline showing how inputs are collected, validated, and where errors are identified'
},

{
  type: 'text',
  title: 'Structuring the Error Experience',
  content:
    'The error report was redesigned to make issues easier to scan, prioritize, and act on. Errors are grouped and labeled by severity, with clear indicators showing where they originate (web, app, API, or uploads). To support decision-making, the system also provides a timeline of detected errors, helping users understand recency and relevance. This structured approach transforms raw system output into actionable insights, reducing confusion and enabling faster resolution.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_4.jpeg',
  caption: 'Error report with severity indicators, data source tagging, and a timeline of recently detected issues to support faster prioritization'
},

{
  type: 'text',
  title: 'Content Strategy',
  content:
    'I designed error communication to make it clear, actionable, and easy to understand. Instead of exposing raw system language, errors are now explained in plain terms, highlighting what went wrong, why it matters, and how to fix it. Supporting details like affected areas, sample values, and step-by-step guidance help users resolve issues without needing technical support.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_3.jpeg',
  caption: 'Error details rewritten in plain language, clearly explaining the issue, its impact, and how users can fix it'
},

    {
  type: 'text',
  title: 'Designing for Action',
  content:
    'To support faster resolution, I designed a structured way for users to share error details with their team. The flow includes clear input guidance, validation states, and feedback messages to prevent mistakes and ensure successful sharing. From limiting email inputs to handling edge cases and providing real-time success or error feedback, the experience is designed to be reliable, clear, and easy to act on—even for non-technical users.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_1.jpeg',
  caption: 'Error sharing flow with input validations, edge-case handling, and real-time feedback to ensure successful collaboration'
},
{
  type: 'text',
  title: 'Designing for Clarity Beyond the Product',
  content:
    'To ensure error details remain clear even outside the platform, I designed a structured email format that translates system data into easy-to-understand information. The email highlights error severity, explains the issue in plain language, and includes relevant data and fix guidance. This allows stakeholders to quickly understand the problem and take action without needing additional context or follow-ups.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_6.jpeg',
  size: 'small',
  caption: 'Structured email format that clearly communicates error details, impact, and resolution guidance for effective collaboration'
},

    {
      type: 'text',
      title: 'Impact',
      content:
        'The experience shifted from a technical error log to a guided resolution flow. Users can now quickly understand issues, take action without external help, and confidently progress through onboarding. This reduces friction, improves task completion, and creates a more intuitive product experience.'
    }
  ]
},  

{
  id: 'recommendation-strategy-builder',
  index: '02',
  title: 'Designing a Centralized Recommendation Strategy Builder',
  category: 'Content Design · UX Writing',
  year: '2024',
  description:
    'Designed a centralized strategy builder from scratch to help users configure and manage recommendation campaigns across channels with clarity, flexibility, and system transparency.',
  tags: ['UX Writing', 'Content Design', 'SaaS', 'Complex Systems'],
  image: '/images/project2/project2_1.jpeg',

  overview:
    'This project focused on designing a centralized strategy builder that allows users to create and manage recommendation campaigns from a single place. Instead of navigating multiple tools or flows, users can define how recommendations behave across channels like web, app, email, and push within one structured experience.',

  challenge:
    'The core challenge was designing for complexity without overwhelming users. The system involves multiple dependencies between channels, algorithms, filters, and constraints. Without clear structure and guidance, this could easily lead to confusion, invalid configurations, and heavy reliance on trial-and-error.',

  approach:
    'I approached this by structuring the experience around clarity and progressive understanding. I focused on making system logic visible, guiding users through decisions with contextual content, and ensuring that every state—default, disabled, or restricted—communicates meaning. The goal was to help users understand not just what to do, but why.',

  outcome:
    'The result is a structured and scalable strategy builder that brings multiple configuration layers into a single, coherent experience. Users can now create and manage campaigns more efficiently, understand system constraints, and make informed decisions without needing external support.',

  sections: [
    {
      type: 'text',
      title: 'Bringing Everything Into One Place',
      content:
        'The strategy builder was designed as a centralized space where users can configure all aspects of recommendation campaigns. Instead of switching between different tools or flows, users can define channels, algorithms, filters, and rules within a single interface. This reduces fragmentation and creates a more cohesive experience.'
    },

   {
  type: 'image-slider',
  title: 'End-to-End Strategy Creation Flow',
  slides: [
    {
      src: '/images/project2/image1.jpeg',
      caption: 'Strategy creation flow where users configure channels and page types upon which the selection below differs'
    },
    {
      src: '/images/project2/image2.jpeg',
      caption: 'Exit confirmation modal preventing accidental data loss'
    },
    {
      src: '/images/project2/image3.jpeg',
      caption: 'Strategy list view with success feedback after creation'
    }
  ]
},

    {
      type: 'text',
      title: 'Designing for System Complexity',
      content:
        'Each configuration choice affects what options are available next. For example, selected channels determine which algorithms or filters can be applied. To prevent confusion, I structured the content to reflect these dependencies clearly, helping users understand how their decisions shape the system.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_2.jpeg',
      caption:
        'System constraints communicated through contextual messaging, helping users understand why certain options are unavailable'
    },

    {
      type: 'text',
      title: 'Guiding Decision-Making',
      content:
        'Algorithm selection is a key decision point in the flow. I designed the content to clearly communicate what each option represents and when it is applicable. Instead of relying on generic tooltips, messaging is directly tied to user selections, making the system feel more predictable and easier to navigate.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_3.jpeg',
      caption:
        'Algorithm selection with contextual guidance that connects user choices to available options'
    },

    {
      type: 'text',
      title: 'Reducing Errors Through Clear Feedback',
      content:
        'To support smooth progression, validation and feedback were designed to be immediate and actionable. Users are clearly informed about missing inputs or incorrect configurations, along with guidance on how to fix them. This reduces friction and prevents errors early in the process.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_4.jpeg',
      caption:
        'Clear validation and feedback states that guide users toward completing the configuration correctly'
    },

    {
      type: 'text',
      title: 'Communicating System Constraints',
      content:
        'In scenarios where configurations cannot be modified—such as when a strategy is already in use—the system provides clear explanations. This ensures users understand the reason behind restrictions, reducing frustration and building trust in the system.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_5.jpeg',
      caption:
        'Informational messaging that explains why certain configurations are locked or cannot be edited'
    },

    {
      type: 'text',
      title: 'Impact',
      content:
        'By centralizing configuration and making system behavior transparent, the experience enables users to create strategies more efficiently and with greater confidence. The structured flow reduces cognitive load, minimizes errors, and supports scalable campaign management.'
    }
  ]
},
];
