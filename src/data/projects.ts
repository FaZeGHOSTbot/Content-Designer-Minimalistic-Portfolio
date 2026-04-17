export interface Section {
  type: 'text' | 'image';
  title?: string;
  content?: string;
  src?: string;
  caption?: string;
  size?: 'small' | 'medium' | 'large';
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
  title: 'Simplifying a Complex Recommendation Strategy Builder',
  category: 'Content Design · UX Writing',
  year: '2025',
  description:
    'Redesigned a complex recommendation strategy configuration flow into a clear, guided experience that helps users understand system constraints, make confident decisions, and reduce setup errors.',
  tags: ['UX Writing', 'Content Design', 'SaaS', 'Complex Systems'],
  image: '/images/project2/project2_1.jpeg',

  overview:
    'This project focuses on improving the usability of a recommendation strategy builder used to configure how products are suggested across different channels. The experience involved multiple dependencies between channel types, algorithms, and filters, but lacked clarity—making it difficult for users to understand why options were unavailable or how their selections impacted outcomes.',

  challenge:
    'Users struggled with hidden system constraints, unclear disabled states, and fragmented feedback. Important decisions—like selecting algorithms or filters—often resulted in confusion because the system did not clearly explain availability, dependencies, or consequences. This led to trial-and-error interactions and increased setup time.',

  approach:
    'I focused on making system logic visible through clear content and structured feedback. This included improving disabled states with meaningful explanations, clarifying dependencies between selections, and guiding users through complex configurations with contextual messaging. The goal was to replace guesswork with understanding.',

  outcome:
    'The experience shifted from a trial-and-error configuration flow to a more transparent and guided system. Users can now better understand why options are available or restricted, make informed decisions, and complete setup with greater confidence and fewer errors.',

  sections: [
    {
      type: 'text',
      title: 'Understanding the Complexity',
      content:
        'The recommendation builder allows users to configure product suggestions across multiple channels such as web, app, email, and push. Each selection affects what algorithms, filters, and options become available. However, this logic was not clearly communicated, making the system feel unpredictable and difficult to use.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_1.jpeg',
      caption:
        'Initial configuration flow where multiple options are available, but system dependencies are not clearly communicated to the user'
    },

    {
      type: 'text',
      title: 'Making Constraints Visible',
      content:
        'A key issue was the use of disabled states without sufficient explanation. Users could see that options were unavailable, but not why. I redesigned system messages to clearly explain the reason behind these restrictions, helping users understand how their current selections affect available options.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_2.jpeg',
      caption:
        'Disabled states supported with clear messaging that explains why certain options are not available based on user selections'
    },

    {
      type: 'text',
      title: 'Clarifying Algorithm Selection',
      content:
        'The algorithm selection step introduced further confusion, as not all options were compatible with selected channels. Instead of relying on generic tooltips, I introduced contextual messaging that directly connects system limitations to user choices, making the relationship between inputs and outcomes more explicit.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_3.jpeg',
      caption:
        'Algorithm selection with clearer feedback explaining availability and dependencies, reducing confusion during decision-making'
    },

    {
      type: 'text',
      title: 'Improving Feedback and Validation',
      content:
        'Error states and validation feedback were redesigned to be more direct and actionable. Instead of vague prompts, the system now clearly indicates what is required and how to resolve issues, allowing users to move forward without unnecessary friction.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_4.jpeg',
      caption:
        'Validation states that clearly guide users on required actions, reducing ambiguity and preventing setup errors'
    },

    {
      type: 'text',
      title: 'Supporting System Awareness',
      content:
        'In cases where configurations were locked due to active usage, I introduced clear informational messaging to explain why edits were restricted. This ensures users understand system behavior and prevents confusion around non-editable states.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_5.jpeg',
      caption:
        'Informational messaging explaining why certain configurations cannot be edited, improving transparency and user trust'
    },

    {
      type: 'text',
      title: 'Impact',
      content:
        'By making system logic visible and improving how constraints are communicated, the experience became more predictable and easier to navigate. Users can now understand dependencies, avoid invalid configurations, and complete setup more efficiently with fewer errors.'
    }
  ]
}
];
