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

  overview: '',
  challenge: '',
  approach: '',
  outcome: '',

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
];
